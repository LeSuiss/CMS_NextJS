import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@assets/logo.svg'
import { i18n } from '@lingui/core'
import { Tab, Tabs, useMediaQuery } from '@mui/material'
import styles from '../../styles/Home.module.scss'
import CustomMenu from './CustomMenu'
import Switcher from './Switcher'

function Header({ navigationStructure, style = {}, className }) {
  const isMobile = useMediaQuery('(max-width:800px)')

  return (
    <header className={`mainContainerHeader ${className}`} style={style}>
      <div
        style={{
          marginLeft: `${isMobile ? '0' : '5px'}`,
          cursor: 'pointer',
          height: '70px',
          width: '200px',
          position: 'relative',
        }}
      >
        <Link href="/" passHref={true}>
          <Image
            className={styles.logo}
            alt="logoSapem"
            src={logo}
            layout="fill"
          />
        </Link>
      </div>
      {isMobile ? (
        <CustomMenu isMobile={isMobile} linksToDisplay={navigationStructure} />
      ) : (
        <Tabs value={0} style={{ height: '100%' }}>
          {navigationStructure.map((page) => (
            <Link
              passHref={true}
              key={page.nav.id ?? page.nav}
              href={page.link}
            >
              <Tab style={{ height: '100%' }} label={i18n._(page.nav)} />
            </Link>
          ))}
        </Tabs>
      )}
      {!isMobile && <Switcher />}
    </header>
  )
}

export default Header
