import { Carousel, TestimonyProps } from '../../lib';

import { Grid } from '@mui/material';
import React from 'react';
import TestimonialCard from '../../lib/testimonialCard/TestimonialCard';

interface TestimoniesProps {
  testimonies: TestimonyProps[];
}
export const Testimonies = ({ testimonies }: TestimoniesProps) => (
  <Grid container marginY={1} paddingBottom={8} justifyContent="center">
    <Grid item md={8} sm={11}>
      <Carousel>
        {testimonies.map((props) => (
          // eslint-disable-next-line react/prop-types
          <TestimonialCard key={props.authorTitle} {...props} />
        ))}
      </Carousel>
    </Grid>
  </Grid>
);
