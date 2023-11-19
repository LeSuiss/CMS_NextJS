import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/logo.svg';

function Logo() {
  return (
    <Link
      href="/"
      aria-label="navigate to main page"
      passHref={true}
      style={{ height: '100%', display: 'flex', alignItems: 'center' }}
    >
      <Image alt="logoSapem" src={logo} style={{ maxHeight: '100%' }} />
    </Link>
  );
}

export default Logo;
