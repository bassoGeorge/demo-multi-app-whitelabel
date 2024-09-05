import { SchemaBuilderExecutorSchema } from './schema';
import { rmSync, readdirSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import * as TJS from 'typescript-json-schema';

const settings: TJS.PartialArgs = {
  required: true,
  ignoreErrors: true, // Its throwing all TS errors from root level, ignoring those
  strictNullChecks: true,
  noExtraProps: true,
};

const compilerOptions: TJS.CompilerOptions = {
  strictNullChecks: true,
};

export default async function runExecutor(
  options: SchemaBuilderExecutorSchema
) {
  rmSync(options.outputPath, { recursive: true, force: true });
  mkdirSync(options.outputPath);

  // Iterate over all given Model root paths
  options.modelRoots.forEach((modelRoot) => {
    readdirSync(modelRoot).forEach((file) => {
      const program = TJS.getProgramFromFiles(
        [resolve(modelRoot, file)],
        compilerOptions
      );
      const generator = TJS.buildGenerator(program, settings);

      const allSymbols = generator.getMainFileSymbols(program);
      // Generate schemas for all symbols within content model file
      allSymbols.forEach((symbol) => {
        const schema = generator.getSchemaForSymbol(symbol);

        const fileName = file.split('.')[0];
        writeFileSync(
          resolve(options.outputPath, `${fileName}.${symbol}.schema.json`),
          JSON.stringify(schema)
        );
      });
    });
  });

  return {
    success: true,
  };
}