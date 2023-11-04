import { Box, Tab, Tabs } from '@mui/material';
import { Theme, useTheme } from '../../../../node_modules/@mui/material';

import CustomMenu from './CustomMenu';
import Link from 'next/link';
import Logo from '../Logo';
import React from 'react';
import Switcher from './Switcher';
import { i18n } from '@lingui/core';
import { isMobile } from '../../../utils/hooks';

const _styles = (theme: Theme) => ({
  tabs: {
    opacity: 1,
    backgroundColor: 'white',

    color: theme.palette.primary.main,
    fontWeight: 'bolder',
    fontSize: '16px',
    height: '100%',
    borderBottom: `solid 2px rgba(0,0,0,0)`,

    '&:hover': {
      boxSizing: 'border-box',
      borderBottom: `solid 2px ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
  },
});

function Header({ navigationStructure, className }) {
  const theme = useTheme();
  const styles = _styles(theme);

  return (
    <Box
      component="header"
      className={`mainContainerHeader ${className}`}
      padding={0.1}
    >
      <Box component={Logo} />
      {isMobile ? (
        <CustomMenu linksToDisplay={navigationStructure} />
      ) : (
        <Tabs
          value={0}
          aria-label="tabs menu"
          sx={{ '& a': { margin: 'auto' } }}
        >
          {navigationStructure.map((page) => (
            <Link
              passHref={true}
              key={page.nav.id ?? page.nav}
              href={page.link}
            >
              <Tab label={i18n._(page.nav)} sx={styles.tabs} />
            </Link>
          ))}
        </Tabs>
      )}
      {!isMobile && <Switcher />}
    </Box>
  );
}

export default Header;
