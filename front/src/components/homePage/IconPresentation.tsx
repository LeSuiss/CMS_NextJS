import { Box, Container, Divider, Grid, Typography } from '@mui/material';

import ConstructionIcon from '@mui/icons-material/Construction';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupIcon from '@mui/icons-material/Group';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';

export const IconPresentation = () => (
  <Container maxWidth="lg">
    <Grid
      container
      justifyContent="space-around"
      gridRow="40px"
      paddingY={3}
      spacing={3}
      sx={{
        '&>*:hover': {
          transition: '0.3s',
          transform: 'scale(1.1)',
        },
      }}
    >
      <Grid xs={12} md={4} item alignItems="center">
        <Box textAlign="center" padding={2}>
          <SearchIcon color="primary" sx={{ height: '60px', width: '60px' }} />
        </Box>
        <Typography variant="h4" textAlign="center">
          {i18n._(/* i18n: Analyser */ t`Analyser`)}
        </Typography>
        <Divider />
        <Typography variant="body1" textAlign="justify" padding={3}>
          {i18n._(
            /* i18n: homepage card analayser */ t`Bien comprendre le besoin État de l’art, rédaction du cahier des charges, benchmarking, reverse engineering, analyse fonctionnelle`
          )}
        </Typography>
      </Grid>

      <Grid xs={12} md={4} item alignItems="center">
        <Box textAlign="center" padding={2}>
          <TipsAndUpdatesIcon
            color="primary"
            sx={{ height: '60px', width: '60px' }}
          />
        </Box>
        <Typography variant="h4" textAlign="center">
          {i18n._(/* i18n:  Designer une solution */ t`Designer une solution`)}
        </Typography>
        <Divider />
        <Typography variant="body1" textAlign="justify" padding={3}>
          {i18n._(
            /* i18n:Travailler le produit. Recherches adaptées et optimisées,  */ t`Travailler le produit. Recherches adaptées et optimisées. Adéquation du produits aux exigences de sécurité.`
          )}
        </Typography>
      </Grid>

      <Grid xs={12} md={4} item alignItems="center">
        <Box textAlign="center" padding={2}>
          <GroupIcon color="primary" sx={{ height: '60px', width: '60px' }} />
        </Box>
        <Typography variant="h4" textAlign="center">
          {i18n._(/* i18n: Ergonomie */ t`Ergonomie`)}
        </Typography>
        <Divider />
        <Typography variant="body1" textAlign="justify" padding={3}>
          {i18n._(
            /* i18n: ergonomie blabla */ t`Adapter les produits au mieux des contraintes de l'utilisateur tout en garantissant à tout instant une sécurité optimale`
          )}
        </Typography>
      </Grid>
      <Grid xs={12} md={4} item alignItems="center">
        <Box textAlign="center" padding={2}>
          <EngineeringIcon
            color="primary"
            sx={{ height: '60px', width: '60px' }}
          />
        </Box>
        <Typography variant="h4" textAlign="center">
          {i18n._(
            /* i18n:  Développement technique */ t` Développement technique`
          )}
        </Typography>
        <Divider />
        <Typography variant="body1" textAlign="justify" padding={3}>
          {i18n._(/* i18n: dvpt tech blabla */ t`     Approfondir la conception Intégration de l’électronique, définition du
        procédé de fabrication et des matériaux, modélisation 3D, simulation,
        réduction des coûts de fabrication`)}
        </Typography>
      </Grid>

      <Grid xs={12} md={4} item alignItems="center">
        <Box textAlign="center" padding={2}>
          <ConstructionIcon
            color="primary"
            sx={{ height: '60px', width: '60px' }}
          />
        </Box>
        <Typography variant="h4" textAlign="center">
          {i18n._(/* i18n: prototypage */ t`Prototypage`)}
        </Typography>
        <Divider />
        <Typography variant="body1" textAlign="justify" padding={3}>
          {i18n._(
            /* i18n: prototypage bla bla*/ t`Valider le produit dans ses moindres détails.Toutes les tailles de prototypes, itérations jusqu’à la validation du prototype`
          )}
        </Typography>
      </Grid>

      <Grid xs={12} md={4} item alignItems="center">
        <Box textAlign="center" padding={2}>
          <TaskAltIcon color="primary" sx={{ height: '60px', width: '60px' }} />
        </Box>
        <Typography variant="h4" textAlign="center">
          Industrialisation
        </Typography>
        <Divider />
        <Typography variant="body1" textAlign="justify" padding={3}>
          Accompagner jusqu’à la production industrielle Plans de fabrication,
          notices de montage ou d’utilisation, recherche de fournisseurs,
          accompagnement jusqu’à la pré-série
        </Typography>
      </Grid>
    </Grid>
  </Container>
);
