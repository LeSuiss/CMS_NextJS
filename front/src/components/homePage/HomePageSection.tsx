/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button, Divider, Grid, useMediaQuery,
} from '@mui/material';
import React from 'react';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';

export interface section{
  imageSrc:string,
  title: string,
  text:string,
  index?:number,
}
function HomePageSection({
  imageSrc = '', title = '', text = '', index,
}:section) {
  const isMobile = useMediaQuery('(max-width:900px)');
  const imageOrder = (!isMobile && index % 2 === 0)  ? 1 : -1;
  return (

    <section className={styles.sectionContainer}>
      <Grid container>
        <Grid className={styles.contentContainer} md={8} xs={12}>
          <h2>
            {i18n._(title)}
          </h2>
          <div className={styles.titleDivider} />

          <p>
            {text}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button onClick={() => alert('hoho')}>Learn More</Button>
        </Grid>
        <Grid xs={12} md={4} className={styles.imageContainer} style={{ order: imageOrder, minHeight: '200px' }}>
          <Image
            alt="bgHome"
            src={imageSrc}
            layout="fill"
            className={styles.homeBackground}
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default HomePageSection;
