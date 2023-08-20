import { Stack } from '@mui/material';
import { Carousel } from '../../lib';
import React from 'react';
import TestimonialCard from '../../lib/testimonialCard/TestimonialCard';

export const Testimonies = ({ testimonies }) => (
  <Stack width="100%" paddingY={2}>
    <Carousel
      settings={{
        pauseOnHover: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
      }}
    >
      {testimonies.map((props) => (
        <Stack width="100%">
          <TestimonialCard {...props} />
        </Stack>
      ))}
    </Carousel>
  </Stack>
);
