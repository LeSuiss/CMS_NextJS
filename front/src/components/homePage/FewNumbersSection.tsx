import { Box, Container, Grid, Typography } from '@mui/material';

import React from 'react';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';

export const FewNumbersSection = () => (
  <Container maxWidth="lg">
    <Grid container justifyContent="center" alignItems="stretch" paddingY={3}>
      <Grid item container md={12} textAlign="center" justifyContent="center">
        <Box maxWidth="500px">
          <Typography variant="h2" textAlign="center" paddingBottom={3}>
            {i18n._(/* i18n: SAPEM en quelques chiffres */ t`Présentation`)}
            <div className="titleDivider" />
          </Typography>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Typography textAlign="justify">
          {i18n._(/* i18n:  */ t`SAPEM est spécialisée dans le design et la conception technique de produits de levage répondant aux exigences de sécurité et de fiabilité de ses partenaires. SAPEM vous aide à concevoir des produits adaptés à vos contraintes. Nous mettons pour cela à votre disposition nos compétences transversales en ingénierie mécanique et design industriel.
         Rigueur, qualité et grande curiosité sont pour nous des motivations clés. Elles nous poussent à acquérir continuellement de nouvelles compétences et à comprendre avec précision les enjeux de votre projet. Nous prêtons également une grande attention à la qualité des relations avec nos clients.`)}
        </Typography>
      </Grid>
      <Grid
        item
        md={4}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Typography variant="h2" textAlign="center" color="primary">
          200 +
          <Typography textAlign="center" color="primary">
            {i18n._(/* i18n: projects */ t`projects`)}
          </Typography>
        </Typography>
        <Typography variant="h2" textAlign="center" color="primary">
          30 +
          <Typography textAlign="center" color="primary">
            {i18n._(/* i18n: partners */ t`partners`)}
          </Typography>
        </Typography>

        <Typography variant="h2" textAlign="center" color="primary">
          12
          <Typography textAlign="center" color="primary">
            {i18n._(
              /* i18n: persons searching for disrupting innovations */ t`persons searching for disrupting innovations`
            )}
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  </Container>
);
