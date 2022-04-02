/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';

import { Button } from '@lesuiss/mui_compo';
import { GetStaticProps } from 'next';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import loadTranslation from '@utils/loadTranslation';
import {
  Box, Card, Fade, Grid,
} from '@mui/material';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import HomePageSection, { section } from '@components/HomePageSection';
import Layout from '../components/layout';
import styles from '../styles/Home.module.scss';

function Home() {
  const cardComponentRef = useRef < HTMLDivElement >(null);
  const sectionsToDisply :section[] = [{
    text: 'hoho',
    title: 'we are experts',
    imageSrc: '/bgHome.webp',
  },
  {
    text: 'hoho',
    title: 'we are experts',
    imageSrc: '/bgBE.jpg',
  },
  {
    text: 'haha',
    title: 'we are experts',
    imageSrc: '/bgHistory.webp',
  },
  ];
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <Box component={Grid} sm={0} md={12} display={{ xs: 'none', md: 'block' }} className={styles.playerWrapper}>
          <div className={styles.slogan}>

            <h1>WHEN SECURITY PREVAILS</h1>
          </div>
          <ReactPlayer
            className={styles.reactPlayer}
            url="/homePageBG.mp4"
            playing
            loop
            muted
            width="100vw"
            height="auto"
          />
        </Box>

        { sectionsToDisply.map((section, index) => <HomePageSection index={index} key={section.title} {...section} />) }

      </div>
    </Layout>
  );
}
export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!);
  return {
    props: {
      translation,
    },
  };
};
