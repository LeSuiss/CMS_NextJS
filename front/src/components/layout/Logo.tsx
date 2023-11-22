import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link
      href="/"
      aria-label="navigate to main page"
      passHref={true}
      style={{ height: '100%', display: 'flex', alignItems: 'center' }}
    >
      <Box height={100} width={150} position="relative">
        <Image alt="logoSapem" src={'/assets/logo.svg'} fill />
      </Box>
    </Link>
  );
}

export default Logo;
