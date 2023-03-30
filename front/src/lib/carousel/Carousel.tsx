import React, { Component } from 'react'
import Slider, { Settings } from 'react-slick'

import { Box } from '@mui/material'

interface CarouselProps {
  settings?: Settings
}

/** for examples: https://react-slick.neostack.com/docs/example/custom-paging */
export class Carousel extends Component<CarouselProps> {
  settings: any

  constructor(props: CarouselProps) {
    super(props)
    this.settings = this.props.settings
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,

      ...this.settings,
    }
    return (
      <Box className="slick-slider">
        <Slider {...settings}>{this.props.children}</Slider>
      </Box>
    )
  }
}
