import { Box, Tab, Tabs } from '@mui/material';
import { Theme, useTheme } from '../../../../node_modules/@mui/material';

import CustomMenu from './CustomMenu';
import Link from 'next/link';
import Logo from '../Logo';
import { NavigationProps } from '../../../config';
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
interface HeaderProps {
  navigationStructure: any[];
  className;
}
function Header({ navigationStructure, className }: HeaderProps) {
  const theme = useTheme();
  const styles = _styles(theme);

  console.log('header', navigationStructure);

  return (
    <Box
      component="header"
      className={`mainContainerHeader ${className}`}
      paddingY={0.1}
      paddingX={2}
    >
      <Box component={Logo} />
      {isMobile() ? (
        <CustomMenu linksToDisplay={navigationStructure} />
      ) : (
        <Tabs value={0} aria-label="tabs menu" role="tablist">
          {navigationStructure.map((item, index) => (
            <Link
              key={item.nav}
              href={item.link}
              style={{ textDecoration: 'none' }}
              aria-label={item.nav}
            >
              <Tab
                label={item.nav}
                sx={styles.tabs}
                role="tab"
                aria-label={item.nav} // Apply aria-label directly to the Tab component
              />
            </Link>
          ))}
        </Tabs>
      )}
      {!isMobile() && <Switcher />}
    </Box>
  );
}

export default Header;
