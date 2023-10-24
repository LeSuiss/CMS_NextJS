import { FewNumbersSection } from '../components/homePage/FewNumbersSection';
import type { GetStaticProps } from 'next';
import { HomePageFirstLookAt } from '../components/homePage/HomePageFirstLookAt';
import { IconPresentation } from '../components/homePage/IconPresentation';
import Layout from '../components/layout';
import { SectionBackground } from '../lib';
import { Testimonies } from '../components/homePage/Testimonies';
import TrustingBrands from '../components/homePage/TrustingBrands';
import { faker } from '@faker-js/faker';
import { getListOfFilesUrlFromFolder } from '../utils/serverless/fileSystem';
import loadTranslation from '../utils/loadTranslation';
import { useIsMobile } from '../utils/hooks';

const Home = ({ brandsList, testimonies, homePageSlider }) => {
  const isMobile = useIsMobile();

  return (
    <Layout titleIsSticky={false} removeLgContainer>
      <HomePageFirstLookAt homePageSlider={homePageSlider} />
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
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale);
  const brandsList = getListOfFilesUrlFromFolder('medias/logo');
  const homePageSlider = getListOfFilesUrlFromFolder('/medias/homePageSlider');

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
      homePageSlider,
    },
  };
};
