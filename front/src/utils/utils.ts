export const setContrastedBackground = (color: string, theme) => {
  return {
    background: `${color}`,
    color: `${`${theme?.palette?.getContrastText(color)}`}`,
  };
};
