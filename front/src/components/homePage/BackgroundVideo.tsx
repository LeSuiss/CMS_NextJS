import React, { useLayoutEffect, useRef } from 'react';
import {
  Box, Button, Card, Fade, Grid, useMediaQuery,
} from '@mui/material';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import ReactPlayer from 'react-player';
import styles from '../../styles/Home.module.scss';
import { videoSliderMessages } from './config';
// import Image from 'next/image';

function BackgroundVideo() {
  const videoRef = useRef<any>(null);
  return (
    <Box component={Grid} sm={0} md={12} display={{ xs: 'none', md: 'block' }} className={styles.playerWrapper}>
      <ReactPlayer
        ref={videoRef}
        className={styles.reactPlayer}
        url="/homePageBG.mp4"
        playing
        loop
        muted
        width="100vw"
        height="auto"
      />
      <div className={`${styles.slogan}`}>
        { videoSliderMessages.map((text) => (<h1 key={text}>{text}</h1>)) }
      </div>
      <Button className={styles.skipIntroButton} onClick={() => console.log('hoho')} variant="contained">
        {i18n._(/* i18n: D */ t`Discover SAPEM`)}
      </Button>
    </Box>
  );
}

export default BackgroundVideo;
