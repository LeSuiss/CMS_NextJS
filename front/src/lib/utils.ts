import { Theme } from '@mui/material/styles';
import { useTheme } from '@emotion/react';

export const setContrastedBackground = (color: string) => {
  const theme: Partial<Theme> = useTheme();
  return {
    background: `${color}`,
    color: `${`${theme?.palette?.getContrastText(color)}`}`,
  };
};
