import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect, useLayoutEffect } from 'react';
import SeoHead, { SeoProps } from '../../utils/SEO&Co/SeoHead';

import Footer from './footer/Footer.main';
import Header from './header/Header';
import { NAVIGATION_STRUCTURE } from '../../config';
import { useIsMobile } from '../../utils/hooks';

interface LayoutProps {
  seo?: SeoProps;
  children: any;
  className?: any;
  title?: any;
  sx?: any;
  titleIsSticky?: any;
  stickerToDisplay?: any;
}
function Layout({
  children,
  className = '',
  seo,
  title = undefined,
  sx = null,
  titleIsSticky = true,
  stickerToDisplay = null,
}: LayoutProps) {
  const isMobile = useIsMobile();
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
      <SeoHead {...seo} />
      <div className={`container_GlobalLayoutPage ${className}`}>
        <Header
          navigationStructure={NAVIGATION_STRUCTURE}
          className="header-section"
        />

        <Box className="container_component">
          {title && (
            <Box
              className="shallTitleBeSticky"
              sx={{
                boxSizing: 'content-box',
                width: '100%',
                backgroundColor: 'white',
                ...(titleIsSticky && {
                  zIndex: 99,
                  position: isMobile ? '' : 'fixed',
                }),
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                padding={1}
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
            sx={{
              ...(titleIsSticky &&
                !isMobile && {
                  paddingTop: '48px',
                }),
              ...sx,
            }}
          >
            {children}
          </Box>
          <Footer />
        </Box>
      </div>
    </>
  );
}

export default Layout;
