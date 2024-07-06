import { createTheme, ThemeOptions } from '@mui/material/styles';

interface CustomThemeOptions extends ThemeOptions {
  mode?: 'light' | 'dark';
}

const getDesignTokens = (mode: 'light' | 'dark') => {
//   const lightPalette = {
//     primary: {
//       main: '#ffc107', 
//     },
//     divider: '#ffc107',
//     background: {
//       default: '#ffffff', 
//       paper: '#ffffff', 
//     },
//     text: {
//       primary: '#000000', 
//       secondary: '#333333',
//     },
//   };

  const darkPalette = {
    primary: {
      main: '#ff5722',
    },
    divider: '#ff5722',
    background: {
      default: '#212121', 
      paper: '#212121', 
    },
    text: {
      primary: '#ffffff', 
      secondary: '#aaaaaa', 
    },
  };

  const themeOptions: CustomThemeOptions = {
    palette: mode === 'light' ? {} : darkPalette,
    mode, 
  };

  return createTheme(themeOptions);
};

export { getDesignTokens };
