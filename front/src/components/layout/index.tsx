import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect, useLayoutEffect } from 'react';
import SeoHead, { SeoProps } from '../../utils/SEO&Co/SeoHead';

import Footer from './footer/Footer.main';
import Header from './header/Header';
import { NAVIGATION } from '../../config';
import { i18n } from '@lingui/core';
import { useIsMobile } from '../../utils/hooks';
import { useRouter } from 'next/router';

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
      <SeoHead />
      <div className={`container_GlobalLayoutPage ${className}`}>
        <Header navigationStructure={NAVIGATION} className="header-section" />

        <Box
          className="container_component"
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
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
            {backgroundImageUrl ? (
              <Stack>
                {removeLgContainer ? (
                  <>{children}</>
                ) : (
                  <Container maxWidth="lg">{children}</Container>
                )}
              </Stack>
            ) : (
              <>{children}</>
            )}
          </Box>
          <Footer />
        </Box>
      </div>
    </>
  );
}

export default Layout;
