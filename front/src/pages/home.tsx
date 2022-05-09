/* eslint-disable no-shadow */
/* eslint-disable max-len */
import React from 'react';
import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import loadTranslation from '@utils/loadTranslation';
import { useMediaQuery } from '@mui/material';
import { sectionsData } from '@components/homePage/config';
import HomePageSection from '@components/homePage/HomePageSection';
import BackgroundVideo from '@components/homePage/BackgroundVideo';
import TrustingBrands from '@components//homePage/TrustingBrands';
import Layout from '@components/layout';

function Home({ brandsList }) {
  const isDesktop = useMediaQuery('(min-width:900px)');

  return (
    <>
      {isDesktop && <BackgroundVideo />}
      <Layout>
        {sectionsData.map((section, index) => <HomePageSection index={index} key={section.title} {...section} />) }
        <TrustingBrands brandsList={brandsList} />
      </Layout>
    </>
  );
}
export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!);

  const logoList = path.join(process.cwd(), 'public/logo');
  const brandsList = fs.readdirSync(logoList);

  return {
    props: {
      brandsList,
      translation,
    },
  };
};
