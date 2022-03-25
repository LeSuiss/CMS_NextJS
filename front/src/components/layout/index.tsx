import {
  Card, Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, {
  FunctionComponent, useLayoutEffect, useRef, useState,
} from 'react';
import zIndex from '@mui/material/styles/zIndex';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';

import { navigationStructure } from '../../constants';
import Header  from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({

  container_GlobalLayoutPage: {
    position: 'relative',
    width: '100vw',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto auto',
    gridTemplateAreas: `
  'header header header' 
  'mainPage mainPage mainPage'
  'appAdvertiser appAdvertiser appAdvertiser'
  'footer footer footer'
  `,

    '& >*': {
      maxWidth: '100vw',
    },
    // header
    '& >:nth-child(1)': {
      gridArea: 'header',
      position: 'sticky',
      top: 0,
    },
    // mainPage
    '&>:nth-child(2)': {
      gridArea: 'mainPage',
      display: 'flex',
      flexFlow: 'column',
    },

    // footer
    ' &>:last-child': {
      gridArea: 'footer',
      width: '100vw',
      bottom: 0,
    },
  },
  container_component: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& >*': {
      textAlign: 'center',
      color: 'white',
    },
  },

  cardComponent: {
    margin: '4%',
    maxWidth: '1000px',
    minWidth: '70vw',
  },
  appAdvertiserContainer: {

  },
  appAdvertiserCard: {
    gridArea: 'appAdvertiserContainer',
    display: 'flex',
    backgroundColor: 'white',
    minWidth: '100vw',
    '& >*': {
      width: '50%',
      padding: '0 10%',
    },
    '& img': { margin: '5px' },
  },
  logo_phone: {
    position: 'absolute',
    left: 'Calc(10vw)',
    top: '5%',
    maxHeight: '140%',
    maxWidth: '100%',
  },
}));

function Layout({ children }) {
  const classes = useStyles();
  const cardComponentRef = useRef < HTMLDivElement >(null);
  const [advertiserWidth, setAdvertiserWidth] = useState < number >(0);
  const theme = useTheme();
  const isOnSmarthPhoneDevice = useMediaQuery(theme.breakpoints.down('sm'));

  useLayoutEffect(() => {
    if (cardComponentRef.current) {
      setAdvertiserWidth(cardComponentRef.current.getBoundingClientRect().width ?? 0);
    }
  }, []);

  return (
    <div className={classes.container_GlobalLayoutPage}>
      <Header navigationStructure={navigationStructure} />
      <Grid
        container
        className={classes.container_component}
        // style={{
        //   backgroundImage: `url(${mainPage_background})`,
        //   backgroundPosition: 'top',
        //   backgroundRepeat: 'no-repeat',
        // }}
      >
        <h2>
          {i18n._(/* i18n: MainPageTItle1/2 */ t`Pressing and Laundry`)}
          {' '}
          <br />
          {i18n._(/* i18n: MainPageTItle2/2 */ t`at Home`)}
          {' '}
        </h2>
        <Card
          ref={cardComponentRef}
          className={classes.cardComponent}
        >

          {children}

        </Card>
      </Grid>

      <Footer />
    </div>
  );
}

export default Layout;
