import { COMPANY_COLORS, COMPANY_FONTS } from '../config/styles/styles';
import {
  createTheme,
  responsiveFontSizes,
} from '../../node_modules/@mui/material';

const theme: any = createTheme({
  typography: {
    allVariants: {
      fontFamily: COMPANY_FONTS,
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
