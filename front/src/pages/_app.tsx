import '../styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { createContext, useReducer, useRef } from 'react';
import { StylesProvider, createGenerateClassName } from '@mui/styles';

import { CacheProvider } from '@emotion/react';
import { CookieBanner } from '../lib';
import CssBaseline from '@mui/material/CssBaseline';
import { I18nProvider } from '@lingui/react';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import createEmotionCache from '../createEmotionCache';
import { i18n } from '@lingui/core';
import initTranslation from '../utils/lingui';
import { muiTheme } from '../styles/muiTheme';
import { useRouter } from 'next/router';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

// initialization function
initTranslation(i18n);

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export const rootContext = createContext<{
  context?: any;
  dispatchContext?: (arg: any) => void;
}>({});

export default function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const firstRender = useRef(true);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [context, dispatchContext] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {
      displayCookieBanner: undefined,
    }
  );

  if (pageProps.translation && firstRender.current) {
    // load the translations for the locale
    const locale = router.locale || router.defaultLocale;
    i18n.load(locale, pageProps?.translation ?? {});
    i18n.activate(locale);
    // render only once
    firstRender.current = false;
  }

  return (
    <CacheProvider value={emotionCache}>
      {/* {!!process.env.NEXT_PUBLIC_PUBLIC_GOOGLE_ANALYTICS && <GTAG />} */}
      <I18nProvider i18n={i18n}>
        <rootContext.Provider value={{ context, dispatchContext }}>
          <ThemeProvider theme={muiTheme}>
            <StylesProvider generateClassName={generateClassName}>
              <CssBaseline />
              <CookieBanner />
              <Component {...pageProps} />
              <ToastContainer />
            </StylesProvider>
          </ThemeProvider>
        </rootContext.Provider>
      </I18nProvider>
    </CacheProvider>
  );
}

export const useRootContext = () => React.useContext(rootContext);
