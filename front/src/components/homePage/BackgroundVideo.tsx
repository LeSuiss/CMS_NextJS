import React from 'react';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';
import {
  Box,
  Button,
  Grid,
} from '@mui/material';
import { useWindowSize } from '@utils/hooks';
import styles from '../../styles/Home.module.scss';
import { videoSliderMessages } from './config';
// import Image from 'next/image';
const HEADER_HEIGHT = 70

function BackgroundVideo() {
  const { height } = useWindowSize()

  return (
    <Box item component={Grid} sm={0} md={12} display={{ xs: 'none', md: 'block' }} className={styles.playerWrapper}>
      <video autoPlay muted loop
        style={{ height: `${height - HEADER_HEIGHT}px`, minWidth: "100vw", objectFit: "cover" }} //object-fit:cover
      >
        <source src="/medias/homePageBG.webM" type="video/mp4" />
      </video>
      <div className={`${styles.slogan}`}>
        {videoSliderMessages.map((text) => (<h1 key={text}>{text}</h1>))}
      </div>
      <Button className={styles.skipIntroButton} onClick={() => {
        for (let index = 0; index < 100; index++) {
          setTimeout(() => window.scrollTo(0, (height - HEADER_HEIGHT * 0.8) * index / 100), index * 3.5)
        }
      }
      } variant="contained">
        {i18n._(/* i18n: D */ t`Découvrir SAPEM`)}
      </Button>
    </Box >
  );
}

export default BackgroundVideo;
