import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import React, { Component } from 'react'

import type { GetStaticProps } from 'next'
import Layout from '../components/layout'
import ReactPlayer from 'react-player'
import Slider from 'react-slick'
import dynamic from 'next/dynamic'
import { fakeDataProducts } from '../assets/fakeDataProducts'
import { i18n } from '@lingui/core'
import loadTranslation from '../assets/utils/loadTranslation'
import { lorem } from '../assets/lorem'
import { t } from '@lingui/macro'
import { useIsMobile } from '../assets/utils/hooks'

const Carousel = dynamic(
  import('../lib/carousel/Carousel').then((x) => x.Carousel),
  {
    ssr: false,
  }
)
const products = [
  {
    title: 'le retourneur x300',
    description: lorem,
    img: 'Levage&RetournementPneumatique.jpg',
    video: 'levage&RetournementPneumatique.mp4',
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    img: 'manipulateurMecanique.jpg',
    video: 'manipulateurMecanique.mp4',
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    img: 'MANUTENTION.jpg',
    video: 'palonnierMonopoutre15T.mp4',
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    img: 'tableRotative.jpg',
    video: 'tableRotative.mp4',
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    video: 'bobine.mp4',
    img: 'bobine1.webp',
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    img: 'bobine.mp4',
    // video: 'bobine1.webp',
  },
  {
    title: 'le retourneur x300',
    description: lorem,
    img: 'Levage&RetournementPneumatique.jpg',
  },
]

export default function Products() {
  const theme = useTheme()
  const isMobile = useIsMobile()

  return (
    <Layout
      titleIsSticky
      title={i18n._(/* i18n: Nos Produits> titre */ t` Nos Produits`)}
      stickerToDisplay={
        <Button color="info" variant="contained">
          {i18n._(/* i18n:  */ t`notre catalogue`)}
        </Button>
      }
    >
      <Stack
        sx={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2014/06/17/16/53/blueprint-370588_960_720.jpg")',
        }}
        className="backImage"
        paddingY={6}
      >
        <Container maxWidth="lg">
          <Stack justifyContent="center" className="slickRemove">
            <Grid container gap={3} marginTop={4} marginBottom={10}>
              {products.map(({ img, video, title, description }) => (
                <Card elevation={8} key={title}>
                  <Grid
                    container
                    item
                    padding={!isMobile && 2}
                    paddingBottom={8}
                  >
                    <Grid item xs={12} md={6} padding={isMobile ? 3 : 0}>
                      <Typography
                        variant="h4"
                        marginBottom={2}
                        borderBottom={`${theme.palette.primary.main} 2px solid`}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="justify"
                        padding={1}
                      >
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
                      sx={{
                        '& *': {
                          boxSizing: 'initial !important',
                          maxWidth: '3000% !important',
                          maxHeight: '400px',
                        },
                      }}
                    >
                      <Carousel settings={{ autoplay: false }}>
                        <img alt={title} src={`/medias/products/${img}`} />
                        {video && (
                          <Box display="flex" alignItems="center">
                            <ReactPlayer
                              type="video/mp4"
                              playbackRate={10}
                              controls
                              url={`/medias/products/${video}`}
                              width="100%"
                            />
                          </Box>
                        )}
                      </Carousel>
                    </Grid>
                  </Grid>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Stack>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  i18n.activate(ctx.locale)
  const translation = await loadTranslation(ctx.locale)

  return {
    props: {
      translation,
      fakeDataProducts,
    },
  }
}

export class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
  }
}
