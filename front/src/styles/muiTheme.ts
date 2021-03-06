/* eslint-disable import/prefer-default-export */
import { createTheme } from '@mui/material';
import _variables      from './_variables.module.scss';

// light grey:#f8f8f8 
// dark grey: #ecf0f1

export const muiTheme = createTheme(
  {
    typography: {
      h2: {
        fontSize: '30px ! important',
        margin: '0.7em !important',
        fontWeight: 'bolder',
        padding: '15px 15px 15px -2px !important',

      },
      h3: {
        fontSize: '18px ! important',
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
