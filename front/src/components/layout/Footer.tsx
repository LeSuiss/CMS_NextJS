import React from 'react'
import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Grid, Link, Typography } from '@mui/material'
import styles from '../../styles/Home.module.scss'

function Footer() {
  return (
    <footer className={`${styles.container_Footer}`}>
      <Grid
        justifyContent="center"
        container
        className={styles.container_FooterContent}
      >
        <Grid
          md={3}
          item
          container
          direction="column"
          alignItems="stretch"
          className={styles.cards}
        >
          <Typography variant="h3" style={{ paddingBottom: '30px' }}>
            {i18n._(
              /* i18n: Footer>SiteInformation>InformationTitle> */ t`INFORMATION`
            )}
          </Typography>
          <Grid item container direction="column">
            <Link href="http://www.google.com">
              {i18n._(
                /* i18n: Footer>SiteInformation>LegalNotices */ t`Information légales`
              )}
            </Link>
            <Link>
              {i18n._(/* i18n: Footer>SiteInformation>Cookies */ t`COOKIES`)}
            </Link>
          </Grid>
        </Grid>
        <Grid md={3} item justifyContent="center" className={styles.cards}>
          <Typography variant="h3">
            {i18n._(
              /* i18n: Footer>SiteInformation>ContactTitle> */ t`CONTACT`
            )}
          </Typography>
          <Grid
            item
            container
            alignItems="center"
            direction="column"
            className={styles.container_socialMediaRow}
          >
            <a
              className={styles.container_socialMediaRow}
              href="tel: 01882461290"
            >
              <PhoneIphoneIcon
                className={styles.socialMediaIcons}
                fontSize="medium"
              />
              01882461290
            </a>

            <a
              className={styles.container_socialMediaRow}
              href="mailto: archer.alexis@hotmail.fr"
            >
              <MailOutlineIcon
                className={styles.socialMediaIcons}
                fontSize="medium"
              />
              {i18n._(
                /* i18n: Footer>SiteInformation>Mail Contact */ t`Nous contacter`
              )}
            </a>
          </Grid>
        </Grid>

        <Grid md={3} item container justifyContent="center">
          <Grid item justifyContent="center" container md={12}>
            <Typography variant="h3" style={{ textAlign: 'center' }}>
              {i18n._(
                /* i18n: Footer>SiteInformation>TrackActivityTitle> */ t`Retrouvez nous`
              )}
            </Typography>
          </Grid>
          <Grid item container justifyContent="space-around" md={7}>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/sapem-sa/"
              rel="noreferrer"
            >
              <FacebookIcon
                className={styles.socialMediaIcons}
                fontSize="large"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/sapem-sa/"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCWNZviGlFwJzJkWHlDiSuhQ"
              rel="noreferrer"
            >
              <YouTubeIcon fontSize="large" />
            </a>
          </Grid>
        </Grid>
      </Grid>

      <div className={styles.container_copyright}>
        Copyright © Sapem.
        {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
