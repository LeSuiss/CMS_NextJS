import {
  Card,
} from '@mui/material';
import React, {
  useRef,
} from 'react';

import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';
import Image from 'next/image';
import bgHome from '../../assets/bgHome.webp';

import { NAVIGATION_STRUCTURE } from '../../constants';
import Header  from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const cardComponentRef = useRef < HTMLDivElement >(null);

  return (
    <div className="container_GlobalLayoutPage">
      <Header navigationStructure={NAVIGATION_STRUCTURE} />
      <div className="container_component">
        <Image
          alt="bgHome"
          src={bgHome}
          layout="fill"
          className="BackgroundImage"
        />
        <div
          className="cardComponent"
        >
          <h2>
            {i18n._(/* i18n: MainPageTItle1/2 */ t`Pressing and Laundry`)}
          </h2>
          <div className="cardContent">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
