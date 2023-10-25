import { Grid, Stack } from '@mui/material';

import { Carousel } from '../../lib';
import React from 'react';
import TestimonialCard from '../../lib/testimonialCard/TestimonialCard';

export const Testimonies = ({ testimonies }) => (
  <Grid container marginY={1} paddingBottom={8} justifyContent="center">
    <Grid item md={8} sm={11}>
      <Carousel
        settings={{
          pauseOnHover: true,
          pauseOnDotsHover: true,
          pauseOnFocus: true,
        }}
      >
        {testimonies.map((props) => (
          <TestimonialCard {...props} />
        ))}
      </Carousel>
    </Grid>
  </Grid>
);
