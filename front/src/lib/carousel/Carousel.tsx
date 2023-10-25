import React, { Component } from 'react';
import Slider, { Settings } from 'react-slick';

import { Box } from '@mui/material';

interface CarouselProps {
  settings?: Settings;
  children: any;
}

/** for examples: https://react-slick.neostack.com/docs/example/custom-paging */
export const Carousel = ({ settings, children }: CarouselProps) => {
  let sliderRef: any = React.useRef(null);

  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const _settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    arrows: false,

    ...settings,
  };

  return (
    <Box className="slick-slider" onMouseEnter={pause} onMouseLeave={play}>
      <Slider {..._settings} ref={(slider) => (sliderRef = slider)}>
        {children}
      </Slider>
    </Box>
  );
};
