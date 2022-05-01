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
    <section>
      <Grid className={styles.sectionContainer} container>
        <Grid className={styles.contentContainer} md={8} xs={12}>
          <h2>
            {i18n._(title)}
          </h2>
          <div className="titleDivider" />

          <p>
            {text}
            <Button onClick={() => alert('hoho')}>Learn More</Button>
          </p>
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
      <Divider />
    </section>

  );
}

export default HomePageSection;
