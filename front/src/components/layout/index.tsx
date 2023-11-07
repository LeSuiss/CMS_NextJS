import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import Footer from './footer/Footer.main';
import Header from './header/Header';
import { NAVIGATION } from '../../config';
import SeoHead from '../../utils/SEO&Co/SeoHead';
import { isMobile } from '../../utils/hooks';

interface LayoutProps {
  backgroundImageUrl?: string;
  children: any;
  className?: string;
  removeLgContainer?: boolean;
  stickerToDisplay?: any;
  sx?: any;
  title?: string;
  titleIsSticky?: boolean;
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
    </>
  );
}

export default Layout;
