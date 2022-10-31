import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#f6f9fe',
    },
    secondary: {
      main: '#5893FF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'transparent',
    }
  },
});

export default theme;