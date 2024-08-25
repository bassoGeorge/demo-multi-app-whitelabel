import { PaletteOptions } from '@mui/material';

export type ThemeSchematic = {
  palette: PaletteOptions
  info: {
    brandName: string;
  }
}

declare module '@mui/material/styles' {
  interface PaletteOptions {
    warmNeutral: {
      main: string;
      light: string;
    }
  }

  interface Palette {
    warmNeutral: {
      main: string;
      light: string;
    }
  }
}