// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import { Box, Button, Stack }        from '@mui/material';
import { Divider, Grid, Typography } from '@mui/material';
import { defineMessage, t }          from '@lingui/macro';

import { AuthorRow }                 from './AuthorRow';
import { GridSection }               from './GridSection';
import Logo                          from '../Logo';
import React                         from 'react';
import { SOCIAL_MEDIAS_LINKS }       from '../../../config';
import { SocialMedias }              from './SocialMedias';
import { i18n }                      from '@lingui/core';
import { rootContext }               from '../../../pages/_app';
import styles                        from '../../../styles/Home.module.scss';
import { useTheme }                  from '../../../../node_modules/@mui/material';

const Footer = () => {
  const { dispatchContext } = React.useContext(rootContext);
  const footerLinks = [
    {
      title: defineMessage({
        message: 'Mentions Légales',
      }),
      links: '/Legal',
    },
    {
      title: defineMessage({ message: 'Conditions générales ' }),
      links: '/CGV.pdf',
      isBlank: true,
    },
    {
      title: defineMessage({ message: 'Catalogue Produit' }),
      links: '/documents/catalogueProduits.pdf',
      isBlank: true,
    },
    {
      title: defineMessage({ message: 'Gérer les cookies' }),
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
        item
        md={9}
        sm={12}
        padding={2}
        margin={0}
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
        letterSpacing="1px"
        width="100%"
      >
        <Grid xs={12} md={4} display="flex" justifyContent="center">
          <Logo />
        </Grid>

        <SocialMedias
          urls={SOCIAL_MEDIAS_LINKS}
        />

        <Grid item container md={4} sm={12}>
          <Grid
            item
            container
            md={12}
            alignItems="center"
            flexDirection="column"
            whiteSpace="nowrap"
          >
            <Typography variant="h6" padding={0} textAlign="center">
              {i18n._(
                /* i18n: Footer>SiteInformation>horaires d'ouverture */ t`Du lundi au vendredi de 8h à 17h`
              )}
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ paddingBottom: '0px' }}>
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
              <Typography variant="h6">
                <a
                  className={styles.container_socialMediaRow}
                  href="mailto: archer.alexis@hotmail.fr"
                >
                  {i18n._(
                    /* i18n: Footer>SiteInformation>par mail */ t`par mail`
                  )}
                </a>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Divider
        sx={{
          width: `${(8 / 12) * 100}%`,
          backgroundColor: theme.palette.primary.contrastText,
          height: '2px',
          border: 'solid white 1px',
        }}
      />
      <Grid
        container
        item
        md={8}
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
