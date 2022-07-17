import React, { useEffect } from 'react'
import { NAVIGATION_STRUCTURE } from '../../constants'
import Footer from './Footer'
import Header from './Header'

function Layout({ children, className = '' }) {
  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector('.header-section')
    const scrollTop = window.scrollY

    return scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky')
  }

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  return (
    <div className={`container_GlobalLayoutPage ${className}`}>
      <Header
        navigationStructure={NAVIGATION_STRUCTURE}
        className="header-section"
      />
      <div className="container_component">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
