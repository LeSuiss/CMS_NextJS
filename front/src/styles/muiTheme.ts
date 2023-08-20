import {
  createTheme,
  responsiveFontSizes,
} from '../../node_modules/@mui/material';

const theme: any = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto, Cambria, Cochin, Georgia, Times, Serif',
    },
  },
  palette: {
    primary: {
      main: 'rgb(194, 0, 43)',
    },
    secondary: {
      main: '#9d9d9d',
    },
    divider: 'rgba(168,66,66,0.12)',
  },
});

export const muiTheme = responsiveFontSizes(theme);
