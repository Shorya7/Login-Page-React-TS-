import React, { createContext, useState, useMemo, useContext, ReactNode } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';

interface ColorModeContextProps {
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextProps>({ toggleColorMode: () => {} });

const ThemeProviderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'light' ? '#d5efad' : '#121212',
            paper: mode === 'light' ? '#d5efad' : '#333', 
          },
          text: {
            primary: mode === 'light' ? '#000' : '#fff',
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const useColorMode = () => useContext(ColorModeContext);

export { ThemeProviderWrapper, useColorMode };
