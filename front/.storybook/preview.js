// .storybook/preview.js

import { ThemeProvider } from '@emotion/react'
import {
  ThemeProvider as MUIThemeProvider,
  createTheme
} from "@mui/material/styles";
import { withThemes }    from "@react-theming/storybook-addon";
import { addDecorator }  from "@storybook/react";
import * as themes       from "../src/styles/muiTheme";

const providerFn = ({ theme, children }) => {

  const muTheme = createTheme(...Object.values(theme));

  return (
    <MUIThemeProvider theme={muTheme}>
      <ThemeProvider theme={muTheme}>
        {children}
      </ThemeProvider>
    </MUIThemeProvider>
  );
};

// pass ThemeProvider and array of your themes to decorator
addDecorator(
  withThemes(null, Object.values(themes), {
    providerFn
  })
);
