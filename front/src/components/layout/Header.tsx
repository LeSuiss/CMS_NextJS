/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import Link from 'next/link';
import logo from '@assets/logo.svg';
import Image from 'next/image';
import { makeStyles, useTheme } from '@mui/styles';
import { ThemeContext } from '@emotion/react';
import {
  Tab, Tabs, Theme, useMediaQuery,
} from '@mui/material';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import CustomMenu from '../customMUI/CustomMenu';
import Switcher from '../Switcher';

const useStyle = makeStyles((theme:Theme) => ({
  mainContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'end',
    maxHeight: '60px',
    backgroundColor: 'rgba(255,255,255, 1)',
    boxShadow: '1px 1px 1px 1px grey',
    '& >*:not(first-child())': {
      flex: 1,
    },
  },
  mobileMenu: {

  },
  desktopMenu: {
    borderWidth: 'solid',
  },
}));
function Header({ navigationStructure }) {
  const classes = useStyle();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <header className={classes.mainContainer}>
      <Image alt="logoSapem" src={logo} layout="fill" />
      {
        isMobile
          ? <CustomMenu className={classes.desktopMenu} linksToDisplay={navigationStructure} />
          : (
            <Tabs value={0}>
              {navigationStructure
                .map((page, index) => (
                  <Link key={page.nav} href={page.link}>
                    <Tab label={i18n._(page.nav)} />
                  </Link>
                ))}
            </Tabs>
          )

      }
      <Switcher />
    </header>
  );
}

export default Header;
