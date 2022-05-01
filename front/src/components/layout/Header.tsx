/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import Link from 'next/link';
import logo from '@assets/logo.svg';
import Image from 'next/image';
import {
  Tab, Tabs, Theme, useMediaQuery,
} from '@mui/material';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import CustomMenu from './CustomMenu';
import Switcher from './Switcher';
import styles from '../../styles/Home.module.scss';

function Header({ navigationStructure }) {
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
    <header className="mainContainerHeader">
      <Image className={styles.logo} alt="logoSapem" src={logo} layout="responsive"  />
      {
        isMobile
          ? <CustomMenu linksToDisplay={navigationStructure} />
          : (
            <Tabs value={0}>
              {navigationStructure
                .map((page, index) => (
                  <Link key={page.nav.id ?? page.nav} href={page.link}>
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
