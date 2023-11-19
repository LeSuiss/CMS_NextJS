import Slider, { Settings } from 'react-slick';

import { Box } from '@mui/material';
import React from 'react';

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

  const enhancedSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    arrows: false,
    swipeToSlide: true,
    useTransform: false,
    ...settings,
  } satisfies Settings;

  return (
    <Box
      className="slick-slider"
      onMouseEnter={pause}
      onMouseLeave={play}
      onTouchStart={pause}
      // center image/video on slick
      sx={{ "& *:is(.slick-list) *[class^='slick-']": { marginY: 'auto' } }}
    >
      <Slider {...enhancedSettings} ref={(slider) => (sliderRef = slider)}>
        {children}
      </Slider>
    </Box>
  );
};
