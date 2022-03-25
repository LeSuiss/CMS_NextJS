/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Button } from '@lesuiss/mui_compo';
import { GetStaticProps } from 'next';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import loadTranslation from '@utils/loadTranslation';
import Layout from '../components/layout';

function Home() {
  return (
    <Layout>
      trad

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
