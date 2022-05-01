import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';
import React from 'react';
import { Divider, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styles from '../../styles/Home.module.scss';

function Footer() {
  return (
    <footer className={`${styles.container_Footer}`}>
      <div className={styles.container_FooterContent}>
        <div className={styles.cards}>
          <h3>{i18n._(/* i18n: Footer>SiteInformation>InformationTitle> */ t`INFORMATION`)}</h3>
          <Link>{i18n._(/* i18n: Footer>SiteInformation>LegalNotices */ t`LEGAL NOTICE`)}</Link>
          <Link>{i18n._(/* i18n: Footer>SiteInformation>Cookies */ t`COOKIES`)}</Link>
        </div>

        <Divider orientation="vertical" style={{ color: 'red' }} />

        <div className={styles.cards}>
          <h3>{i18n._(/* i18n: Footer>SiteInformation>ContactTitle> */ t`CONTACT`)}</h3>
          <div className={styles.container_socialMediaRow}>
            <PhoneIphoneIcon className={styles.socialMediaIcons} fontSize="medium" />
            {i18n._(/* i18n: Footer>SiteInformation>PhoneTel */ t`0188246590`)}
          </div>

          <a className={styles.container_socialMediaRow} href="mailto: archer.alexis@hotmail.fr">
            <MailOutlineIcon className={styles.socialMediaIcons} fontSize="medium" />
            {i18n._(/* i18n: Footer>SiteInformation>Mail Contact */ t`CONTACT US BY MAIL`)}
          </a>
        </div>

        <Divider orientation="vertical" style={{ color: 'red' }} />

        <div className={styles.container_socialmedias}>
          <h3>{i18n._(/* i18n: Footer>SiteInformation>TrackActivityTitle> */ t`TRACK OUR ACTIVITY`)}</h3>
          <a target="_blank" href="https://www.linkedin.com/company/sapem-sa/" rel="noreferrer">
            <FacebookIcon className={styles.socialMediaIcons} fontSize="large" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/sapem-sa/" rel="noreferrer">
            <LinkedInIcon fontSize="large" />
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UCWNZviGlFwJzJkWHlDiSuhQ" rel="noreferrer">
            <YouTubeIcon fontSize="large" />
          </a>
        </div>
      </div>

      <div className={styles.container_copyright}>
        Copyright © Sapem.
        {new Date().getFullYear()}
      </div>

    </footer>
  );
}

export default Footer;
