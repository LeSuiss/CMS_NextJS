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

const useStyles = makeStyles((theme) => ({
  background: {
    // position: 'absolute',
    zIndex: '-10',
    opacity: '0.6',
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Image alt="bgHome" src={bgHome} className={classes.background} layout="fill"  />
      <section style={{  position: 'relative' }}>
        trad
      </section>

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
