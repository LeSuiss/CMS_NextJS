import { Grid, Paper, Stack, Typography } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { i18n } from '@lingui/core';
import styles from '../../styles/Home.module.scss';
import { useIsMobile } from '../../utils/hooks';

export interface Section {
  imageSrc: string;
  title: string;
  text: any;
  linkText: string;
  linkHref: string;
  index?: number;
}
function HomePageSection({
  imageSrc = '',
  title,
  text = '',
  linkText = '',
  linkHref,
  index,
}: Section) {
  const isMobile = useIsMobile();
  const imageOrder = !isMobile && index % 2 === 0 ? -10 : 10;
  const contentOrder = !isMobile && index % 2 === 0 ? 10 : -10;

  return (
    <section className={styles.test}>
      <Grid container justifyContent="center" padding={2}>
        <Typography variant="h2" style={{ display: 'grid' }}>
          {i18n._(title).toUpperCase()}
          <div className="titleDivider" />
        </Typography>
      </Grid>
      <Grid
        sx={{
          paddingTop: `${!isMobile ? '3%' : 0}`,
          paddingBottom: `${!isMobile ? '3%' : 0}`,
          border: 'solid blue 5px',
        }}
        className={styles.sectionContainer}
        container
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid
          className={styles.contentContainer}
          item
          md={5}
          xs={10}
          display="flex"
          alignItems="space-around"
          sx={{ order: contentOrder }}
        >
          <div>{text}</div>

          <Stack paddingTop={5} sx={{ textAlign: 'right', width: '100%' }}>
            <Link href={linkHref}>{linkText}</Link>
          </Stack>
        </Grid>

        <Grid item md={1} sx={{ order: 2 }} />

        <Grid
          item
          xs={12}
          md={3}
          className={styles.imageContainer}
          justifyContent="center"
          alignItems="center"
          sx={{ order: imageOrder, border: 'solid green 5px' }}
        >
          <Paper
            style={isMobile ? { height: '150px' } : { paddingTop: '100%' }}
          >
            <Image style={{ zIndex: 3 }} alt="bgHome" src={imageSrc} />
          </Paper>
          {!isMobile && (
            <Grid
              item
              style={{
                backgroundColor: 'grey',
                position: 'absolute',
                top: '15px',
                left: '15px',
                zIndex: 1,
                height: '100%',
                width: '100%',
              }}
            />
          )}
        </Grid>
      </Grid>
    </section>
  );
}

export default HomePageSection;
