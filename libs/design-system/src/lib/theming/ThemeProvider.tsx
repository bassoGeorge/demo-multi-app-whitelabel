import { ThemeSchematic } from '@multi-app-whitelabel/design-system-utils';
import {
  experimental_extendTheme as extendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  CssVarsThemeOptions,
} from '@mui/material';
import { useMemo } from 'react';

type ThemeProviderProps = React.PropsWithChildren<{
  theme: ThemeSchematic;
}>;

const themeBase: CssVarsThemeOptions = {
  cssVarPrefix: 'mad',
};

export function ThemeProvider({
  theme: themeInput,
  children,
}: ThemeProviderProps) {
  const theme = useMemo(
    () =>
      extendTheme({
        ...themeBase,
        colorSchemes: {
          light: {
            palette: themeInput.palette,
          },
        },
      }),
    [themeInput]
  );

  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
}
