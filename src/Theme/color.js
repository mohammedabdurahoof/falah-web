import { createTheme  } from '@mui/material/styles';
import { amber, teal } from '@mui/material/colors';

export const theme = createTheme ({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: amber[800]
    },
    success:{
      main:'#3B71CA'
    }
  }
});