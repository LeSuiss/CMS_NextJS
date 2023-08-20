import { faker } from '@faker-js/faker';
import fs from 'fs';
import type { GetStaticProps } from 'next';
import path from 'path';
import { Head } from '../components/Head/Head';
import { FewNumbersSection } from '../components/homePage/FewNumbersSection';
import { HomePageFirstLookAt } from '../components/homePage/HomePageFirstLookAt';
import { IconPresentation } from '../components/homePage/IconPresentation';
import { Testimonies } from '../components/homePage/Testimonies';
import TrustingBrands from '../components/homePage/TrustingBrands';
import Layout from '../components/layout';
import { SectionBackground } from '../lib';
import { useIsMobile } from '../utils/hooks';
import loadTranslation from '../utils/loadTranslation';

const Home = ({ brandsList, testimonies }) => {
  const isMobile = useIsMobile();

  return (
    <>
      <Head />
      <Layout titleIsSticky={false}>
        <HomePageFirstLookAt />
        <FewNumbersSection />
        {!isMobile && (
          <SectionBackground
            url={'/medias/bgHome.webp'}
            style={{ height: '350px' }}
          />
        )}
        <IconPresentation />
        <TrustingBrands brandsList={brandsList} />
        <Testimonies testimonies={testimonies} />
      </Layout>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale);
  const logoList = path.join(process.cwd(), '/public/medias/logo');
  const brandsList = fs.readdirSync(logoList);
  const testimonies = [...Array(10)].map(() => ({
    name: faker.name.lastName(),
    image: faker.image.avatar(),
    project: faker.commerce.department(),
    content: faker.lorem.paragraph(),
  }));

  return {
    props: {
      brandsList,
      translation,
      testimonies,
    },
  };
};
