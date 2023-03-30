const logo = require('../../assets/logo.svg')

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/" passHref={true} style={{ height: '100%' }}>
      <Image alt="logoSapem" src={logo} style={{ maxHeight: '100%' }} />
    </Link>
  )
}

export default Logo
