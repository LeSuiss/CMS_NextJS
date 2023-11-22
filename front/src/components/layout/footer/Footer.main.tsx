// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import { Box, Stack } from '@mui/material';
import { Divider, Grid, Typography } from '@mui/material';
import { MAILING_DESTINATARY, SOCIAL_MEDIAS_LINKS } from '../../../config';

import { AuthorRow } from './AuthorRow';
import { GridSection } from './GridSection';
import Logo from '../Logo';
import React from 'react';
import { SocialMedias } from './SocialMedias';
import { i18n } from '@lingui/core';
import styles from '../../../styles/Home.module.scss';
import { t } from '@lingui/macro';
import { useRootContext } from '../../../pages/_app';
import { useTheme } from '../../../../node_modules/@mui/material';

const Footer = () => {
  const { dispatchContext } = useRootContext();
  const footerLinks = [
    {
      title: i18n._(/* i18n:  */ t`Mentions Légales`),
      links: '/Legal',
    },
    {
      title: i18n._(t`Conditions générales `),
      links: '/CGV.pdf',
      isBlank: true,
    },
    {
      title: i18n._(t`Catalogue Produit`),
      links: '/documents/catalogueProduits.pdf',
      isBlank: true,
    },
    {
      title: i18n._(t`Gérer les cookies`),
      links: '/',
      cb: (e) => dispatchContext({ displayCookieBanner: true }),
    },
  ];

  const theme: any = useTheme();

  return (
    <footer
      className={`${styles.container_Footer}`}
      style={{
        color: theme.palette.secondary.contrastText,
        position: 'relative',
      }}
    >
      <Grid
        container
        md={9}
        xs={12}
        marginY={2}
        justifyContent="center"
        alignItems="center"
        letterSpacing="1px"
        rowGap={2}
        width="100%"
      >
        <Grid xs={12} lg={4} display="flex" justifyContent="center">
          <Logo />
        </Grid>
        <Grid xs={12} lg={4} display="flex" justifyContent="center">
          <SocialMedias urls={SOCIAL_MEDIAS_LINKS} />
        </Grid>

        <Grid
          xs={12}
          lg={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body1" textAlign="center">
            {i18n._(
              /* i18n: Footer>SiteInformation>horaires d'ouverture */ t`Du lundi au vendredi de 8h à 17h`
            )}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography variant="body2">
              <a
                className={styles.container_socialMediaRow}
                href="tel: 01 88 24 61 90"
              >
                01882461290
              </a>
            </Typography>
            <Box component="span" margin={1}>
              ou
            </Box>
            <Typography variant="subtitle1">
              <a
                className={styles.container_socialMediaRow}
                href={`mailto:${MAILING_DESTINATARY}`}
              >
                {i18n._(
                  /* i18n: Footer>SiteInformation>par mail */ t`par mail`
                )}
              </a>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider
        sx={{
          margin: theme.spacing(1),
          width: `${(8 / 12) * 100}%`,
          backgroundColor: theme.palette.primary.contrastText,
          height: '2px',
        }}
      />
      <Grid
        container
        xs={12}
        md={8}
        marginY={2}
        className={styles.container_FooterContent}
        justifyContent="center"
        alignItems="center"
      >
        {footerLinks.map((x, i) => (
          <GridSection key={'footgrid' + i} {...x} />
        ))}
      </Grid>

      <AuthorRow theme={theme} />
    </footer>
  );
};

export default Footer;
