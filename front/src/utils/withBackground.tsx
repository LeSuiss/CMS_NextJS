import { Box } from '@mui/material';
import { Carousel } from '../lib';
import Image from 'next/image';
import React from 'react';

interface WithBackgroundProps {
  url?: string[];
  sx?: any;
}
export const WithBackground = ({ url, sx }: WithBackgroundProps) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        overflow: 'hidden',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
      }}
    >
      <Carousel
        settings={{
          dots: false,
          fade: true,
          speed: 3500,
          autoplaySpeed: 5500,
        }}
      >
        {url?.map((x, i) => (
          <Box
            key={x}
            sx={{
              ...sx,
            }}
          >
            <Image
              priority={i === 1}
              style={{
                objectFit: 'cover',
              }}
              fill
              alt={x}
              src={x}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
