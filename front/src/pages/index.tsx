/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useLayoutEffect, useRef } from 'react';
import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import loadTranslation from '@utils/loadTranslation';
import {
  Box, Button, Card, Fade, Grid, useMediaQuery,
} from '@mui/material';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import HomePageSection, { section } from '@components/homePage/HomePageSection';
import SideMenu from '@components/homePage/SideMenu';
import Layout from '../components/layout';
import TrustingBrands from '../components/homePage/TrustingBrands';
import styles from '../styles/Home.module.scss';

function Home(props) {
  const videoRef = useRef<any>(null);
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
  const isDesktop = useMediaQuery('(min-width:900px)');

  return (
    <Layout>
      <div className={styles.pageContainer}>
        {isDesktop && (
        <SideMenu />
        )}
        <Box component={Grid} sm={0} md={12} display={{ xs: 'none', md: 'block' }} className={styles.playerWrapper}>

          <div
            className={`${styles.slogan}`}
          >
            {
            [
              'when security prevails',
              'when fiability is required',
              'My tailor is Rich',
            ].map((text, index) => (
              <h1 key={text}>{text}</h1>
            ))

              }
          </div>
          <ReactPlayer
            ref={videoRef}
            className={styles.reactPlayer}
            url="/homePageBG.mp4"
            playing
            loop
            muted
            width="100vw"
            height="98vh"
          />

          {/* <Button>xxxx</Button> */}
        </Box>
        <Grid
          container
          justifyContent="center"
        >
          <Button className={styles.skipIntroButton} variant="contained">
            Discover SAPEM
          </Button>

        </Grid>
        <TrustingBrands brandsList={props.brandsList} />
        { sectionsToDisply.map((section, index) => <HomePageSection index={index} key={section.title} {...section} />) }

      </div>
    </Layout>
  );
}
export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!);

  const test = path.join(process.cwd(), 'public/logo');

  const brandsList = fs.readdirSync(test);
  return {
    props: {
      brandsList,
      translation,
      // fileList,
      // __dirname,
    },
  };
};
