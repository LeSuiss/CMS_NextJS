import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React, { createContext, useEffect, useReducer } from 'react';

import { CookieBanner } from '../../lib';
import Footer from './footer/Footer.main';
import Header from './header/Header';
import { NAVIGATION } from '../../config';
import SeoHead from '../../utils/SEO&Co/SeoHead';
import { isMobile } from '../../utils/hooks';

interface LayoutProps {
  children: any;
  className?: any;
  title?: any;
  sx?: any;
  titleIsSticky?: any;
  stickerToDisplay?: any;
  backgroundImageUrl?: string;
  removeLgContainer?: boolean;
}

export const rootContext = createContext<{
  context?: any;
  dispatchContext?: Function;
}>({});
export const useRootContext = () => React.useContext(rootContext);
function Layout({
  children,
  className = '',
  backgroundImageUrl,
  removeLgContainer = false,
  title = undefined,
  sx = null,
  titleIsSticky = true,
  stickerToDisplay = null,
}: LayoutProps) {
  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector('.header-section');
    const scrollTop = document.querySelector('.container_component').scrollTop;
    const condition = scrollTop >= 250;
    if (true) {
      const titleToResize = document.querySelector('.shallTitleBeSticky');
      condition && !!titleToResize
        ? titleToResize?.classList.add('titleIsSticky')
        : titleToResize?.classList.remove('titleIsSticky');
    }

    return condition
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  const [context, dispatchContext] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {
      openCookieBanner: undefined,
      closeCookeBanner: undefined,
    }
  );

  useEffect(() => {
    document
      .querySelector('.container_component')
      .addEventListener('scroll', isSticky);
    return () => {
      document
        .querySelector('.container_component')
        .removeEventListener('scroll', isSticky);
    };
  }, []);

  return (
    <>
      <SeoHead />
      <CookieBanner />
      <rootContext.Provider value={{ context, dispatchContext }}>
        <div className={`container_GlobalLayoutPage ${className}`}>
          <Header navigationStructure={NAVIGATION} className="header-section" />

          <Box
            className="container_component"
            display="flex"
            flexDirection="column"
          >
            {title && (
              <Box
                className="shallTitleBeSticky"
                width="100%"
                sx={{
                  backgroundColor: 'white',
                  zIndex: 99,
                  ...(titleIsSticky && {
                    position: isMobile ? '' : 'fixed',
                  }),
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  p={1}
                >
                  <Typography variant="h5">{title}</Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={isMobile && { '& *': { fontSize: '12px' } }}
                  >
                    {stickerToDisplay}
                  </Box>
                </Stack>
                <Divider className="titleDivider" />
              </Box>
            )}
            <Box
              className="backImage"
              sx={{
                flexGrow: 1,
                backgroundImage: `url("${backgroundImageUrl}")`,
                paddingTop: titleIsSticky && !isMobile ? '48px' : '',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                ...sx,
              }}
            >
              {backgroundImageUrl && removeLgContainer && <>children</>}
              {backgroundImageUrl && !removeLgContainer && (
                <Container maxWidth="lg" sx={{ py: isMobile ? 2 : 5 }}>
                  {children}
                </Container>
              )}
              {!backgroundImageUrl && <>{children}</>}
            </Box>
            <Footer />
          </Box>
        </div>
      </rootContext.Provider>
    </>
  );
}

export default Layout;
