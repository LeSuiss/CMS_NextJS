import { Box, Grid, Typography } from '@mui/material';
import {
  WithBackground,
  WithBackgroundColorShape,
} from '../../utils/withBackground';
import { useIsMobile, useWindowSize } from '../../utils/hooks';

import { HEADER_HEIGHT } from '../../config/constants';
import React from 'react';
import { i18n } from '@lingui/core';
import styles from '../../styles/Home.module.scss';
import { t } from '@lingui/macro';
import { useTheme } from '../../../node_modules/@mui/material';

export const HomePageFirstLookAt = () => {
  const isMobile = useIsMobile();
  const height = useWindowSize().height;

  const theme = useTheme();
  const backgroundSliders = [
    '/medias/homePageSlider/laser.jpg',
    '/medias/homePageSlider/test.jpg',
    '/medias/homePageSlider/test2.jpg',
  ];

  return (
    <Box
      className={`${styles.playerWrapper} slickRemove`}
      sx={isMobile && { height: '400px', '& *': { maxHeight: '400px' } }}
    >
      <WithBackground
        url={backgroundSliders}
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
            padding="2rem"
            sx={{
              textAlign: isMobile && 'center',
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
      </Grid>
    </Box>
  );
};
