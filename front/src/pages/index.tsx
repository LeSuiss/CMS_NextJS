/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Button } from '@lesuiss/mui_compo';
import { GetStaticProps } from 'next';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import loadTranslation from '@utils/loadTranslation';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import Layout from '../components/layout';
import bgHome from '../assets/bgHome.webp';
import styles from '../styles/Home.module.scss';

function Home() {
  return (
    <Layout>
      <Image
        alt="bgHome"
        src={bgHome}
        layout="fill"
        className={styles.homeBackground}
      />
      <div style={{ backgroundColor: 'black', border: 'solid red 5px', opacity: 10 }}>

        <section style={{ backgroundColor: 'red', zIndex: 40  }}>
          tradaaaaffffffzzz
        </section>
      </div>

      this is Home
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
