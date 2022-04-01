import React from 'react';

import { NAVIGATION_STRUCTURE } from '../../constants';
import Header  from './Header';
import Footer from './Footer';

function Layout({ children, className = '' }) {
  return (
    <div className={`container_GlobalLayoutPage ${className}`}>
      <Header navigationStructure={NAVIGATION_STRUCTURE} />
      <div className="container_component">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
