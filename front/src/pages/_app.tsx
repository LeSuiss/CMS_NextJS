import '../styles/styles.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Head                                                    from 'next/head'
import { useRouter }                                           from 'next/router'
import React, { createContext, useReducer, useRef }            from 'react'
import { CacheProvider }                                       from '@emotion/react'
import { i18n }                                                from '@lingui/core'
import { I18nProvider }                                        from '@lingui/react'
import CssBaseline                                             from '@mui/material/CssBaseline'
import { ThemeProvider }                                       from '@mui/material/styles'
import { StylesProvider, createGenerateClassName }             from '@mui/styles'
import createEmotionCache                                      from '../createEmotionCache'
import { muiTheme }                                            from '../styles/muiTheme'
import initTranslation                                         from '../utils/lingui'

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
})

// initialization function
initTranslation(i18n)

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
export const rootContext = createContext<{
  context?: any
  dispatchContext?: Function
}>({})

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const router = useRouter()
  const firstRender = useRef(true)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const [context, dispatchContext] = useReducer((state) => state, {})

  if (pageProps.translation && firstRender.current) {
    // load the translations for the locale
    const locale = router.locale || router.defaultLocale
    i18n.load(locale, pageProps?.translation ?? {})
    i18n.activate(locale)
    // render only once
    firstRender.current = false
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <I18nProvider i18n={i18n}>
        <rootContext.Provider value={{ context, dispatchContext }}>
          <ThemeProvider theme={muiTheme}>
            <StylesProvider generateClassName={generateClassName}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </StylesProvider>
          </ThemeProvider>
        </rootContext.Provider>
      </I18nProvider>
    </CacheProvider>
  )
}
