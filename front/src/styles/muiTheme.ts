import {
  createTheme,
  responsiveFontSizes,
} from '../../node_modules/@mui/material';

import { COMPANY_COLORS } from '../config/styles/styles';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'block',
});

const theme: any = createTheme({
  typography: {
    allVariants: {
      fontFamily: roboto.style.fontFamily,
    },
  },
  palette: {
    primary: {
      main: COMPANY_COLORS.main,
    },
    secondary: {
      main: COMPANY_COLORS.secondary,
    },
    divider: 'rgba(168,66,66,0.12)',
  },
});

export const muiTheme = responsiveFontSizes(theme);
