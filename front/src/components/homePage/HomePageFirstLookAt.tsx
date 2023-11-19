import { Box, Grid, Slide, Typography } from '@mui/material';

import { HEADER_HEIGHT } from '../../config/constants';
import React from 'react';
import { WithBackground } from '../../utils/withBackground';
import { i18n } from '@lingui/core';
import { isMobile } from '../../utils/hooks';
import styles from '../../styles/Home.module.scss';
import { t } from '@lingui/macro';
import { useTheme } from '../../../node_modules/@mui/material';

export const HomePageFirstLookAt = ({ homePageSlider }: any) => {
  const theme = useTheme();

  return (
    <Box
      className={`${styles.playerWrapper} slickRemove`}
      sx={isMobile() && { height: '400px', '& *': { maxHeight: '400px' } }}
    >
      <WithBackground
        url={homePageSlider}
        sx={
          isMobile()
            ? { height: '400px', '& *': { height: '400px' } }
            : { height: `calc(100vh - ${HEADER_HEIGHT}px)` }
        }
      />

      <Grid
        container
        sx={{
          zIndex: 9999999999999,
          '& h2': { textShadow: '2px 2px black', fontSize: '3rem !important' },
        }}
      >
        <Grid
          item
          md={6}
          container
          padding="3%"
          direction="column"
          justifyContent="center"
          alignItems={isMobile() ? 'center' : 'flex-start'}
        >
          <Typography
            variant="h2"
            fontWeight="bolder"
            lineHeight="1.5em"
            color="white"
            textAlign={isMobile() ? 'center' : 'left'}
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
        {!isMobile() && (
          <Grid
            md={6}
            padding="3%"
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
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
              {i18n._(
                /* i18n: quand la sécurité prime*/ t`quand la sécurité prime`
              )}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
