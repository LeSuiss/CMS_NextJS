import Image      from 'next/image';
import Link       from 'next/link';
import React      from 'react';
import logo       from '@assets/logo.svg';
import { i18n }   from '@lingui/core';
import {
  Tab,
  Tabs,
  useMediaQuery,
} from '@mui/material';
import styles     from '../../styles/Home.module.scss';
import CustomMenu from './CustomMenu';
import Switcher   from './Switcher';

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
