import { ThemeSchematic } from '@multi-app-whitelabel/design-system-utils';

type ThemeProviderProps = React.PropsWithChildren<{
  theme: ThemeSchematic
}>

export function ThemeProvider({ theme } : ThemeProviderProps) {
  return <div>blah</div>
}