import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import Footer from './footer/Footer.main';
import Header from './header/Header';
import SeoHead from '../../utils/SEO&Co/SeoHead';
import { getNavigationStructure } from '../../config';
import { isMobile } from '../../utils/hooks';
import { useLingui } from '@lingui/react';

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
  const { i18n } = useLingui();
  const navigationStructure = getNavigationStructure(i18n);
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
        <Header
          navigationStructure={navigationStructure}
          className="header-section"
        />

        <Box className="container_component">
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
          <Stack
            direction="column"
            flexGrow={1}
            className="backImage"
            sx={{
              ...sx,
              backgroundImage: `url("${backgroundImageUrl}")`,
              paddingTop: titleIsSticky && !isMobile ? '48px' : '',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: '1',
              justifyContent: 'center',
            }}
          >
            {backgroundImageUrl && removeLgContainer && <>children</>}
            {backgroundImageUrl && !removeLgContainer && (
              <Container maxWidth="lg" sx={{ py: isMobile ? 2 : 5 }}>
                {children}
              </Container>
            )}
            {!backgroundImageUrl && <>{children}</>}
          </Stack>
          <Footer />
        </Box>
      </div>
    </>
  );
}

export default Layout;
