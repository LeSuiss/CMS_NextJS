/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Button } from '@lesuiss/mui_compo';
import { GetStaticProps } from 'next';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import loadTranslation from '@utils/loadTranslation';
import Layout from '../components/layout';
import navigationStructure from '../constants';
import Switcher from '../components/Switcher';

function Home(props) {
  return (
    <Layout>
      <Button>hi :)</Button>
      <>
        {i18n._(
          /* i18n: The title of detailed order banner on Home page */ t`Detailed order`,
        )}
        {t`Detailed order`}
      </>
      <Switcher />
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
