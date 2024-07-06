import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from './Theme';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <div className="navbar" style={{height:'70px', display:'flex', justifyContent:'flex-end',alignItems:'center', }}>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit" style={{marginRight: '80px'}}>
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
};

export default Navbar;
