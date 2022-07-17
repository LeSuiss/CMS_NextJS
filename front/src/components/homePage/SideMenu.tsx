import React from 'react'
import { i18n } from '@lingui/core'
import { NAVIGATION_STRUCTURE } from '../../constants'
import styles from '../../styles/Home.module.scss'

function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <p>DISCOVER </p>
      {NAVIGATION_STRUCTURE.map((x) => (
        <button type="button" className={styles.sideMenuItem} key="f">
          {i18n._(x.nav)}
        </button>
      ))}
    </div>
  )
}

export default SideMenu
