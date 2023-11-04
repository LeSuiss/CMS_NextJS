import { Box } from '@mui/material';
import { Carousel } from '../lib';
import { HEADER_HEIGHT } from '../config';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '../../node_modules/@mui/material';

interface WithBackgroundProps {
  negativeMargin?: number;
  url?: string[];
  opacity: string | number;
  addedColor?: string;
  addedColorOpacity?: string | number;
  children?: any;
  sx?: any;
}
export const WithBackground = ({
  negativeMargin,
  url,
  opacity,
  addedColor,
  addedColorOpacity,
  children,
  sx,
}: WithBackgroundProps) => {
  const theme = useTheme();

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
