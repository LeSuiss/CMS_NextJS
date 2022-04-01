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
import { Card } from '@mui/material';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.scss';

function Home() {
  const cardComponentRef = useRef < HTMLDivElement >(null);

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <div className={styles.playerWrapper}>
          <ReactPlayer
            className={styles.reactPlayer}
            url="/homePageBG.mp4"
            playing
            loop
            muted
            width="100vw"
            height="auto"
          />
        </div>

        <section className={styles?.sectionContainer}>

          <div className={styles.contentContainer}>
            <h2>
              {i18n._(/* i18n: MainPageTItle1/2 */ t`Half a century of expertise`)}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a>Learn More</a>
          </div>
          <div className={styles.imageContainer}>
            <Image
              alt="bgHome"
              src="/bgHistory.webp"
              layout="fill"
              className={styles.homeBackground}
            />

          </div>
        </section>

        <section className={styles?.sectionContainer}>
          <div className={styles.imageContainer}>
            <Image
              alt="bgHome"
              src="/bgBE.jpg"
              layout="fill"
              className={styles.homeBackground}
            />
          </div>
          <div className={styles.contentContainer}>
            <h2>
              {i18n._(/* i18n: MainPageTItle1/2 */ t`Half a century of expertise`)}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a>Learn More</a>
          </div>
        </section>

        <section className={styles?.sectionContainer}>

          <div className={styles.contentContainer}>
            <h2>
              {i18n._(/* i18n: MainPageTItle1/2 */ t`Half a century of expertise`)}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a>Learn More</a>
          </div>
          <div className={styles.imageContainer}>
            <Image
              alt="bgHome"
              src="/bgHome.webp"
              layout="fill"
              className={styles.homeBackground}
            />

          </div>
        </section>
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
