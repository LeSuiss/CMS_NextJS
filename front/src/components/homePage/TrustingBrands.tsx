import { Box, Grid, Stack, Typography } from '@mui/material';

import Image from 'next/legacy/image';
import React from 'react';
import { i18n } from '@lingui/core';
import { styled } from '../../../node_modules/@mui/material';
import styles from '../../styles/Home.module.scss';
import { t } from '@lingui/macro';

const GridWithStyle = styled(Grid)(({ theme }) => ({
  '& img': {
    objectFit: 'contain',
    mixBlendMode: 'darken',
    aspectRatio: '1/1',
    height: '70px',
    width: '70px',
  },
}));

// www.lejdc.fr/nevers-58000/actualites/dix-huit-entreprises-de-la-nievre-a-l-honneur-aux-5es-trophees-des-reussites_13996541/
function TrustingBrands(props: any) {
  return (
    <GridWithStyle
      container
      justifyContent="center"
      className={`${styles.sectionContainer} ${styles.trustingBrands}`}
      gap={2}
      padding={4}
    >
      <Grid md={12} item container justifyContent="center" gap={2}>
        <Box maxWidth="500px">
          <Typography variant="h2" textAlign="center" margin={2}>
            <Stack>
              {i18n._(
                /* i18n: trustingBrands Title */ t`Ils nous font confiance`
              )}
              <div className="titleDivider" />
            </Stack>
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        container
        gap={2}
        md={8}
        justifyContent="center"
        paddingTop={3}
        spacing={2}
      >
        {props?.brandsList?.map((x) => (
          <Grid item key={`logo${x}`} textAlign="center">
            <img style={{}} alt={`logo${x}`} src={x} />
          </Grid>
        ))}
      </Grid>
    </GridWithStyle>
  );
}

export default TrustingBrands;
