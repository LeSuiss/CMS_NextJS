import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';
import React from 'react';
import { Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const useStyles = makeStyles((theme) => ({
  cards: {
    textAlign: 'left',
    display: 'flex',
    flexFlow: 'column',
    ' & h3': {
      textAlign: 'center',
      width: '100%',
      marginBottom: '15px',
    },
  },
  socialMediaIcons: {
    marginRight: '5px',
    color: 'white',
  },
  container_Footer: {
    display: 'grid',
    gridTemplateColumns: '1fr repeat(3,auto) 2fr',
    '& *:not(svg)': {
      fontSize: '10px',
      color: 'white',
    },
  },

  container_FooterContent: {
    gridColumn: '2/5',
    display: 'flex',
    zIndex: 10,
    '& >*': {
      margin: '15px',
    },

    // [theme.breakpoints.down('sm')]: {
    //   flexFlow: 'column',
    //   gridColumn: '1/6',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   textAlign: 'center',
    //   '&>*': {
    //     width: '100%',
    //     alignItems: 'center',
    //   },
    // },
  },
  container_socialMediaRow: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  container_socialmedias: {
    display: 'grid',
    gridTemplateAreas: '\'title title\' \'icon icon\'',
    justifyContent: 'center',

    '& >*': {
      justifySelf: 'center',
    },

    '& h3': {
      gridArea: 'title',
      backgroundColor: 'red',
    },
  },
  container_copyright: {
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: '10px',
    gridColumn: '1 / 6',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.container_Footer}>
      <div className={classes.container_FooterContent}>
        <div className={classes.cards}>
          <h3>{i18n._(/* i18n: Footer>SiteInformation>InformationTitle> */ t`INFORMATION`)}</h3>
          <Link>{i18n._(/* i18n: Footer>SiteInformation>LegalNotices */ t`LEGAL NOTICE`)}</Link>
          <Link>{i18n._(/* i18n: Footer>SiteInformation>Cookies */ t`COOKIES`)}</Link>
        </div>

        <div className={classes.cards}>
          <h3>{i18n._(/* i18n: Footer>SiteInformation>ContactTitle> */ t`CONTACT`)}</h3>
          <div className={classes.container_socialMediaRow}>
            <PhoneIphoneIcon className={classes.socialMediaIcons} fontSize="medium" />
            {i18n._(/* i18n: Footer>SiteInformation>PhoneTel */ t`0188246590`)}
          </div>
          <div className={classes.container_socialMediaRow}>
            <MailOutlineIcon className={classes.socialMediaIcons} fontSize="medium" />
            {i18n._(/* i18n: Footer>SiteInformation>Mail Contact */ t`CONTACT US BY MAIL`)}
          </div>
        </div>

        <div className={classes.container_socialmedias}>
          <h3>{i18n._(/* i18n: Footer>SiteInformation>TrackActivityTitle> */ t`TRACK OUR ACTIVITY`)}</h3>
          <FacebookIcon className={classes.socialMediaIcons} fontSize="large" />
          <LinkedInIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
        </div>
      </div>
      <div className={classes.container_copyright}>
        {i18n._(/* Copyright text in footer */t`Copyright © 5aSec-Services ${new Date().getFullYear()}.`)}
      </div>

    </div>
  );
}

export default Footer;
