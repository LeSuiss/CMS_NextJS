/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useRef,
  useEffect,
  createContext,
  useReducer,
} from 'react';

import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';
import { I18nProvider } from '@lingui/react';
import { useRouter } from 'next/router';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import initTranslation from '../utils/lingui';
import '../styles.css';
import createEmotionCache from '../createEmotionCache';
import theme from '../theme';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

// initialization function
initTranslation(i18n);

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export const rootContext = createContext<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context?: any,
  dispatchContext?: Function,
}>({});

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const firstRender = useRef(true);

  // useEffect(() => {
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  const [context, dispatchContext] = useReducer(
    (state) => state,
    {},
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
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <I18nProvider i18n={i18n}>
        <rootContext.Provider value={{ context, dispatchContext }}>
          <ThemeProvider theme={theme}>
            <StylesProvider generateClassName={generateClassName}>
              {' '}
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </StylesProvider>
          </ThemeProvider>
        </rootContext.Provider>
      </I18nProvider>
    </CacheProvider>
  );
}
