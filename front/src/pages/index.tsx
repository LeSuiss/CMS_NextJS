import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { Carousel, SectionBackground } from '../lib'
import {
  WithBackground,
  WithBackgroundColorShape,
} from '../assets/utils/withBackground'
import { useIsMobile, useWindowSize } from '../assets/utils/hooks'

import ConstructionIcon from '@mui/icons-material/Construction'
import EngineeringIcon from '@mui/icons-material/Engineering'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import type { GetStaticProps } from 'next'
import GroupIcon from '@mui/icons-material/Group'
import { HEADER_HEIGHT } from '../config/constants'
import { Head } from '../components/Head/Head'
import Layout from '../components/layout'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import TestimonialCard from '../lib/testimonialCard/TestimonialCard'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import TrustingBrands from '../components/homePage/TrustingBrands'
import { faker } from '@faker-js/faker'
import fs from 'fs'
import { i18n } from '@lingui/core'
import loadTranslation from '../assets/utils/loadTranslation'
import { lorem } from '../assets/lorem'
import path from 'path'
import styles from '../styles/Home.module.scss'
import { t } from '@lingui/macro'
import { use100vh } from 'react-div-100vh'

const Home = ({ brandsList, testimonies }) => {
  const isMobile = useIsMobile()

  return (
    <>
      <Head />
      <Layout titleIsSticky={false}>
        <HomePageFirstLookAt />
        <Container maxWidth="lg">
          <FewNumbersSection />
        </Container>
        {!isMobile && (
          <SectionBackground
            url={'/medias/bgHome.webp'}
            style={{ height: '350px' }}
          />
        )}

        <Container maxWidth="lg">
          <IconPresentation />
        </Container>

        <TrustingBrands brandsList={brandsList} />
        <Testimonies testimonies={testimonies} />
      </Layout>
    </>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale)
  const logoList = path.join(process.cwd(), '/public/medias/logo')
  const brandsList = fs.readdirSync(logoList)
  const testimonies = [...Array(10)].map(() => ({
    name: faker.name.lastName(),
    image: faker.image.avatar(),
    project: faker.commerce.department(),
    content: faker.lorem.paragraph(),
  }))
  return {
    props: {
      brandsList,
      translation,
      testimonies,
    },
  }
}

const HomePageFirstLookAt = () => {
  const isMobile = useIsMobile()
  const height = useWindowSize().height

  const theme = useTheme()

  const scrollToSkipIntro = () => {
    for (let index = 0; index < 100; index++) {
      setTimeout(
        () =>
          window.scrollTo(0, ((height - HEADER_HEIGHT * 0.8) * index) / 100),
        index * 3.5
      )
    }
  }

  return (
    <Box
      className={`${styles.playerWrapper} slickRemove`}
      sx={isMobile && { height: '400px', '& *': { maxHeight: '400px' } }}
    >
      <WithBackground
        url={[
          '/medias/homePageSlider/laser.jpg',
          '/medias/homePageSlider/test.jpg',
          '/medias/homePageSlider/test2.jpg',
        ]}
        opacity={1}
        addedColor="black"
        addedColorOpacity={0.3}
        sx={
          isMobile
            ? { height: '400px', '& *': { height: '400px' } }
            : { height: `calc(100vh - ${HEADER_HEIGHT}px)` }
        }
      />

      <WithBackgroundColorShape
        addedColorOpacity={0.975}
        addedColor={theme.palette.primary.main}
        sx={
          isMobile
            ? { height: '400px', '& *': { height: '400px' } }
            : { height: `calc(100vh - ${HEADER_HEIGHT}px)` }
        }
      />

      <Grid
        container
        sx={{
          zIndex: 9999999999999,
          '& h2': { textShadow: '2px 2px black', fontSize: '50px !important' },
        }}
      >
        <Grid
          item
          md={6}
          container
          padding="3%"
          direction="column"
          justifyContent="center"
          alignItems={isMobile ? 'center' : 'flex-start'}
        >
          <Typography
            variant="h2"
            padding={!isMobile ? 4 : 0}
            sx={{
              color: 'white',
              lineHeight: '1.5em',
              fontWeight: 'bolder !important',
            }}
          >
            {i18n._(/* i18n: Créer */ t`CREER`)}
            <br />
            {i18n._(/* i18n: Développer */ t`DEVELOPPER`)}
            <br />
            {i18n._(/* i18n: Innover */ t`INNOVER`)}
          </Typography>
          <Typography
            paddingLeft={4}
            variant="body1"
            sx={{ color: 'white' }}
            textAlign="center"
          >
            SAPEM <br />
            Solutions de levage & Ingénieurerie
          </Typography>
        </Grid>

        {!isMobile && (
          <Grid
            md={6}
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            paddingBottom={10}
            paddingTop={10}
          >
            <Typography
              variant="h2"
              color="white"
              paddingX={2}
              borderBottom={`solid 5px ${theme.palette.primary.main}`}
              zIndex="999"
            >
              SAPEM
            </Typography>
            <Typography variant="h2" color="white" textAlign="center">
              "quand la sécurité prime"
            </Typography>
          </Grid>
        )}
        {/* <Stack
          position="absolute"
          bottom="0"
          flexGrow={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            sx={{ color: 'white' }}
            size="large"
            onClick={scrollToSkipIntro}
            aria-label="skipHomePageIntro"
          >
            <ExpandCircleDownOutlinedIcon
              sx={{
                height: theme.spacing(8),
                width: theme.spacing(8),
              }}
            />
          </IconButton>
        </Stack> */}
      </Grid>
    </Box>
  )
}

const IconPresentation = () => (
  <Grid
    container
    justifyContent="space-around"
    gridRow="40px"
    paddingY={3}
    spacing={3}
    sx={{
      '&>*:hover': {
        transition: '0.3s',
        transform: 'scale(1.1)',
      },
    }}
  >
    <Grid xs={12} md={4} item alignItems="center">
      <Box textAlign="center" padding={2}>
        <SearchIcon color="primary" sx={{ height: '60px', width: '60px' }} />
      </Box>
      <Typography variant="h4" textAlign="center">
        {i18n._(/* i18n: Analyser */ t`Analyser`)}
      </Typography>
      <Divider />
      <Typography variant="body1" textAlign="justify" padding={3}>
        {i18n._(
          /* i18n: homepage card analayser */ t`Bien comprendre le besoin État de l’art, rédaction du cahier des charges, benchmarking, reverse engineering, analyse fonctionnelle`
        )}
      </Typography>
    </Grid>

    <Grid xs={12} md={4} item alignItems="center">
      <Box textAlign="center" padding={2}>
        <TipsAndUpdatesIcon
          color="primary"
          sx={{ height: '60px', width: '60px' }}
        />
      </Box>
      <Typography variant="h4" textAlign="center">
        {i18n._(/* i18n:  Designer une solution */ t`Designer une solution`)}
      </Typography>
      <Divider />
      <Typography variant="body1" textAlign="justify" padding={3}>
        {i18n._(
          /* i18n:Travailler le produit. Recherches adaptées et optimisées,  */ t`Travailler le produit. Recherches adaptées et optimisées. Adéquation du produits aux exigences de sécurité.`
        )}
      </Typography>
    </Grid>

    <Grid xs={12} md={4} item alignItems="center">
      <Box textAlign="center" padding={2}>
        <GroupIcon color="primary" sx={{ height: '60px', width: '60px' }} />
      </Box>
      <Typography variant="h4" textAlign="center">
        {i18n._(/* i18n: Ergonomie */ t`Ergonomie`)}
      </Typography>
      <Divider />
      <Typography variant="body1" textAlign="justify" padding={3}>
        {i18n._(
          /* i18n: ergonomie blabla */ t`Adapter les produits au mieux des contraintes de l'utilisateur tout en garantissant à tout instant une sécurité optimale`
        )}
      </Typography>
    </Grid>
    <Grid xs={12} md={4} item alignItems="center">
      <Box textAlign="center" padding={2}>
        <EngineeringIcon
          color="primary"
          sx={{ height: '60px', width: '60px' }}
        />
      </Box>
      <Typography variant="h4" textAlign="center">
        {i18n._(
          /* i18n:  Développement technique */ t` Développement technique`
        )}
      </Typography>
      <Divider />
      <Typography variant="body1" textAlign="justify" padding={3}>
        {i18n._(/* i18n: dvpt tech blabla */ t`     Approfondir la conception Intégration de l’électronique, définition du
        procédé de fabrication et des matériaux, modélisation 3D, simulation,
        réduction des coûts de fabrication`)}
      </Typography>
    </Grid>

    <Grid xs={12} md={4} item alignItems="center">
      <Box textAlign="center" padding={2}>
        <ConstructionIcon
          color="primary"
          sx={{ height: '60px', width: '60px' }}
        />
      </Box>
      <Typography variant="h4" textAlign="center">
        {i18n._(/* i18n: prototypage */ t`Prototypage`)}
      </Typography>
      <Divider />
      <Typography variant="body1" textAlign="justify" padding={3}>
        {i18n._(
          /* i18n: prototypage bla bla*/ t`Valider le produit dans ses moindres détails.Toutes les tailles de prototypes, itérations jusqu’à la validation du prototype`
        )}
      </Typography>
    </Grid>

    <Grid xs={12} md={4} item alignItems="center">
      <Box textAlign="center" padding={2}>
        <TaskAltIcon color="primary" sx={{ height: '60px', width: '60px' }} />
      </Box>
      <Typography variant="h4" textAlign="center">
        Industrialisation
      </Typography>
      <Divider />
      <Typography variant="body1" textAlign="justify" padding={3}>
        Accompagner jusqu’à la production industrielle Plans de fabrication,
        notices de montage ou d’utilisation, recherche de fournisseurs,
        accompagnement jusqu’à la pré-série
      </Typography>
    </Grid>
  </Grid>
)

const FewNumbersSection = () => (
  <Grid container justifyContent="center" alignItems="center" paddingY={3}>
    <Grid item container md={12} textAlign="center" justifyContent="center">
      <Box maxWidth="500px">
        <Typography variant="h2" textAlign="center" padding={2}>
          {i18n._(/* i18n: SAPEM en quelques chiffres */ t`Présentation`)}
          <div className="titleDivider" />
        </Typography>
      </Box>
    </Grid>
    <Grid item md={4}>
      <Typography textAlign="justify">
        {i18n._(/* i18n:  */ t`SAPEM est spécialisée dans le design et la conception technique de produits de levage répondant aux exigences de sécurité et de fiabilité de ses partenaires. SAPEM vous aide à concevoir des produits adaptés à vos contraintes. Nous mettons pour cela à votre disposition nos compétences transversales en ingénierie mécanique et design industriel.
         Rigueur, qualité et grande curiosité sont pour nous des motivations clés. Elles nous poussent à acquérir continuellement de nouvelles compétences et à comprendre avec précision les enjeux de votre projet. Nous prêtons également une grande attention à la qualité des relations avec nos clients.`)}
      </Typography>
    </Grid>
    <Grid item md={4} alignItems="center" gap={2}>
      <Typography variant="h2" textAlign="center" color="primary">
        200 +
        <Typography textAlign="center" color="primary">
          {i18n._(/* i18n: projects */ t`projects`)}
        </Typography>
      </Typography>
      <Typography variant="h2" textAlign="center" color="primary">
        30 +
        <Typography textAlign="center" color="primary">
          {i18n._(/* i18n: partners */ t`partners`)}
        </Typography>
      </Typography>

      <Typography variant="h2" textAlign="center" color="primary">
        12
        <Typography textAlign="center" color="primary">
          {i18n._(
            /* i18n: persons searching for disrupting innovations */ t`persons searching for disrupting innovations`
          )}
        </Typography>
      </Typography>
    </Grid>
  </Grid>
)

const Testimonies = ({ testimonies }) => (
  <Stack width="100%" padding={3} marginBottom={5}>
    <Carousel
      settings={{
        pauseOnHover: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
      }}
    >
      {testimonies.map((props) => (
        <Stack width="100%">
          <TestimonialCard {...props} />
        </Stack>
      ))}
    </Carousel>
  </Stack>
)
