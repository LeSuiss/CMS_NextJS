import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import type { GetStaticProps } from 'next';
import Layout from '../components/layout';
import React from 'react';
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';
import { fakeDataProducts } from '../assets/fakeDataProducts';
import { i18n } from '@lingui/core';
import loadTranslation from '../utils/loadTranslation';
import { lorem } from '../assets/lorem';
import { t } from '@lingui/macro';
import { useIsMobile } from '../utils/hooks';
import { useTheme } from '../../node_modules/@mui/material';

const Carousel = dynamic(
  import('../lib/carousel/Carousel').then((x) => x.Carousel),
  {
    ssr: false,
  }
);

export default function Products() {
  const theme = useTheme();
  const isMobile = useIsMobile();

  return (
    <Layout
      titleIsSticky
      title={i18n._(/* i18n: Nos Produits> titre */ t` Nos Produits`)}
      backgroundImageUrl="https://cdn.pixabay.com/photo/2014/06/17/16/53/blueprint-370588_960_720.jpg"
      stickerToDisplay={
        <a
          href={'/documents/catalogueProduits.pdf'}
          target={'_blank'}
          rel="noreferrer"
        >
          <Button color="info" variant="contained">
            {i18n._(/* i18n:  */ t`notre catalogue`)}
          </Button>
        </a>
      }
    >
      <Container maxWidth="lg">
        <Grid
          className="slickRemove"
          container
          gap={5}
          marginTop={4}
          marginBottom={10}
        >
          {products.map(({ imgs, title, description }) => (
            <Card elevation={8} key={title}>
              <Grid container item padding={!isMobile && 2}>
                <Typography
                  variant="h4"
                  padding={1.5}
                  width="100%"
                  marginBottom={2}
                  borderBottom={`${theme.palette.primary.main} 2px solid`}
                >
                  {title}
                </Typography>
                <Grid item xs={12} md={6} padding={isMobile ? 3 : 1}>
                  <Typography variant="body1" textAlign="justify" padding={1}>
                    {description}
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  minHeight="400px"
                  justifyContent="center"
                  padding={2}
                  alignItems="center"
                >
                  <Paper sx={{ p: 1, backgroundColor: 'whitesmoke' }}>
                    <Carousel
                      settings={{
                        pauseOnHover: true,
                        dotsClass: 'slick-dots slick-thumb',
                        customPaging: (i) => (
                          <a>
                            <img
                              alt={imgs[i]}
                              src={
                                imgs[i].endsWith('mp4')
                                  ? '/medias/logo/logoVideos.jpg'
                                  : `/medias/products/${imgs[i]}`
                              }
                            />
                          </a>
                        ),
                      }}
                    >
                      {imgs.map((img) => (
                        <Stack display="flex" alignItems="flex-end" key={img}>
                          {img.endsWith('mp4') ? (
                            <Box display="flex" alignItems="center">
                              <ReactPlayer
                                controls
                                url={`/medias/products/${img}`}
                                type="video/mp4"
                                playbackRate={10}
                                maxWidth="100%"
                              />
                            </Box>
                          ) : (
                            <img
                              alt={title}
                              src={`/medias/products/${img}`}
                              style={{
                                minHeight: '300px',
                                maxHeight: '300px',
                                maxWidth: '100%',
                                width: '100%',
                                objectFit: 'contain',
                              }}
                            />
                          )}
                        </Stack>
                      ))}
                    </Carousel>
                  </Paper>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  i18n.activate(ctx.locale);
  const translation = await loadTranslation(ctx.locale);

  return { props: { translation, fakeDataProducts } };
};

const products = [
  {
    title: 'le retourneur x300',
    description: lorem,
    imgs: [
      'Levage&RetournementPneumatique.jpg',
      'levage&RetournementPneumatique.mp4',
    ],
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    imgs: ['manipulateurMecanique.jpg', 'manipulateurMecanique.mp4'],
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    imgs: ['MANUTENTION.jpg', 'palonnierMonopoutre15T.mp4'],
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    imgs: ['tableRotative.jpg', 'MANUTENTION.jpg', 'tableRotative.mp4'],
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    video: 'bobine.mp4',
    imgs: ['bobine1.webp'],
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    imgs: ['bobine.mp4', 'bobine1.webp'],
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    imgs: ['Levage&RetournementPneumatique.jpg'],
  },
];
