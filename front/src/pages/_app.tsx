import React, {useRef, useEffect, useState, createContext, useReducer} from 'react';

import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import PropTypes from "prop-types";
import { i18n } from '@lingui/core'
import { t } from "@lingui/macro";
import { initTranslation } from '../utils/lingui'
import { I18nProvider } from "@lingui/react";
//initialization function
initTranslation(i18n)

import createEmotionCache from "../createEmotionCache";
import theme from "../theme";
import { useRouter } from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export const rootContext = createContext<{context?:any, dispatchContext?:Function}>({})

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter()

  const contextInitialValue = {
    en: t`English`,
    sr: t`Serbian`,
    es: t`Spanish`,
    selected: 'en'
  
}
  const firstRender = useRef(true)
const [context, dispatchContext] = useReducer(contextReducer,contextInitialValue)

  if (pageProps.translation && firstRender.current) {
    //load the translations for the locale

  const locale = router.locale || router.defaultLocale
    i18n.load(locale, pageProps.translation)
    i18n.activate(locale)
    // render only once
    firstRender.current = false
  }

  function contextReducer (state, action){
    
    const selectedLanguage = action.payload

    return {...state, selected: selectedLanguage}
  }
  
  
  useEffect(() => {
    i18n.activate(context.selected)
    router.push(router.pathname, {}, {locale: context.selected})
    
  }, [context])
  



  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <I18nProvider i18n={i18n}>
      <rootContext.Provider value={{context, dispatchContext}}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </rootContext.Provider>
      </I18nProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
