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
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        ...sx,
      }}
    >
      {addedColor && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            margin: negativeMargin ? theme.spacing(negativeMargin) : '',
            zIndex: '1',
            opacity: addedColorOpacity ? addedColorOpacity.toString() : opacity,
            backgroundColor: addedColor,
            ...sx,
          }}
        />
      )}
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
              position: 'relative',
              width: '100dvw',
              height: `calc(100vh - ${HEADER_HEIGHT}px)`,
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

interface WithBackgroundColorShapeProps {
  negativeMargin?: number;
  addedColor?: string;
  addedColorOpacity?: string | number;
  children?: any;
  sx?: any;
}
export const WithBackgroundColorShape = ({
  negativeMargin = 0,
  addedColorOpacity,
  children,
  sx,
}: WithBackgroundColorShapeProps) => {
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          position: 'absolute',
          width: '40%',
          height: '100%',
          left: '0px',
          top: '0px',
          background: `linear-gradient(to top right ,
             ${theme.palette.primary.main} 50%, transparent 50%) `,
          margin: theme.spacing(negativeMargin),
          zIndex: '3000000000',
          opacity: addedColorOpacity ? addedColorOpacity.toString() : 1,
          ...sx,
        }}
      >
        {children}
      </div>
    </>
  );
};
