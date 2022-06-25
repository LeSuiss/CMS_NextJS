import React, { useEffect, useState } from 'react';
import { NAVIGATION_STRUCTURE } from '../../constants';
import Footer from './Footer';
import Header from './Header';

function Layout({ children, className = '' }) {
  const [headerHeight, setheaderHeight] = useState(70)

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });


  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;

    scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

  return (
    <div className={`container_GlobalLayoutPage ${className}`}>
      <Header navigationStructure={NAVIGATION_STRUCTURE} className='header-section' />
      <div className="container_component">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
