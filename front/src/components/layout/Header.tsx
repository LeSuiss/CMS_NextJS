/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import Link from 'next/link';
import logo from '@assets/logo.jpg';
import Image from 'next/image';
import { makeStyles, useTheme } from '@mui/styles';
import { ThemeContext } from '@emotion/react';
import { Theme, useMediaQuery } from '@mui/material';
import CustomMenu from '../customMUI/CustomMenu';
import Switcher from '../Switcher';

const useStyle = makeStyles((theme:Theme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
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
    <div className={classes.mainContainer}>
      <Image alt="logoSapem" src={logo} />
      {
        isMobile
          ? <CustomMenu className={classes.desktopMenu} linksToDisplay={navigationStructure} />
          : (
            <>
              {navigationStructure
                .map((page) => (
                  <Link key={page.nav} href={page.link}>
                    {page.nav}
                  </Link>
                ))}
            </>
          )

      }
      <Switcher />
    </div>
  );
}

export default Header;
