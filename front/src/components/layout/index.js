/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  return (
    <>
      <Header navigationStructure={props.navigationStructure} />
      {props.children}
      <Footer />
    </>

  );
}

export default Layout;
