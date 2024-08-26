import { AssetsExecutorSchema } from './schema';
import { ExecutorContext } from '@nx/devkit';
import * as path from 'path';
import * as fs from 'fs';

export default async function runExecutor(
  options: AssetsExecutorSchema,
  context: ExecutorContext
) {
  const currentProjectRoot =
    context.projectsConfigurations.projects[context.projectName].root;

  const destination = path.join(currentProjectRoot, 'public');

  fs.rmSync(destination, { recursive: true, force: true });
  fs.mkdirSync(destination);
  fs.writeFileSync(
    path.join(destination, 'DO_NOT_USE_THIS_FOLDER.txt'),
    'store assets in ../assets. This folder is ignored and generated on the fly'
  );

  const sources = options.from.map((projectName) =>
    path.join(
      context.projectsConfigurations.projects[projectName].root,
      'assets'
    )
  );

  /** First copy assets from the source projects */
  sources.forEach((folder) => {
    fs.cpSync(folder, destination, { recursive: true });
  });

  /** then finally copy from the current nextjs project itself, overwriting any */
  fs.cpSync(path.join(currentProjectRoot, 'assets'), destination, {
    recursive: true,
  });

  return {
    success: true,
  };
}