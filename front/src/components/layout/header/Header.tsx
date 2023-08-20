import { Box, Tab, Tabs } from '@mui/material';

import CustomMenu from './CustomMenu';
import Link from 'next/link';
import Logo from '../Logo';
import React from 'react';
import Switcher from './Switcher';
import { i18n } from '@lingui/core';
import { useIsMobile } from '../../../utils/hooks';

function Header({ navigationStructure, className }) {
  const isMobile = useIsMobile();

  return (
    <Box
      component="header"
      className={`mainContainerHeader ${className}`}
      padding={0.1}
    >
      <Box
        component={Logo}
        sx={{
          '& a': { height: '100%' },
          '& img': { height: '8%' },
        }}
      />
      {isMobile ? (
        <CustomMenu linksToDisplay={navigationStructure} />
      ) : (
        <Tabs value={0}>
          {navigationStructure.map((page) => (
            <Link
              passHref={true}
              key={page.nav.id ?? page.nav}
              href={page.link}
            >
              <Tab
                label={i18n._(page.nav)}
                sx={{ fontWeight: 'bolder', fontSize: '16px' }}
              />
            </Link>
          ))}
        </Tabs>
      )}
      {!isMobile && <Switcher />}
    </Box>
  );
}

export default Header;
