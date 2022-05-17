/* eslint-disable import/prefer-default-export */
import { createTheme } from '@mui/material';
import _variables from './_variables.module.scss';

export const muiTheme = createTheme(
  {
    typography: {
      h2: {
        fontSize: '30px ! important',
        padding: '15px !important',

      },
      h3: {
        fontSize: '24px ! important',
        fontWeight: 'bold !important',
        padding: '10px !important',
        Margin: '0 10px !important',
      },
      h4: {
        fontWeight: 'bold',
      },
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#bf181b',
        light: '#ad9042',
        dark: '#451085',
      },
      secondary: {
        main: '#1ace19',
        light: '#33f798',
      },
      background: {
        default: '#fafafa',
      },
      info: {
        main: '#21f35f',
      },
      divider: 'rgba(168,66,66,0.12)',
    },
  },
);
