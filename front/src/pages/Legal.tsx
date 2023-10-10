import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

import type { GetStaticProps } from 'next';
import Layout from '../components/layout';
import React from 'react';
import { i18n } from '@lingui/core';
import loadTranslation from '../utils/loadTranslation';
import { t } from '@lingui/macro';
import { useIsMobile } from '../utils/hooks';

export default function Legal() {
  const isMobile = useIsMobile();

  const layoutPadding = !isMobile ? 8 : 3;

  return (
    <Layout
      title={i18n._(/* i18n: Mentions Légales */ t`Mentions Légales`)}
      backgroundImageUrl="/medias/legalBG.jpg"
    >
      <Container maxWidth="md" sx={{ opacity: 0.95 }}>
        <Card sx={{ minHeight: '50vh' }}>
          <CardHeader
            title={i18n._(
              /* i18n:   SAPEM: Société d'applications éléctriques et mécaniques. */ t` SAPEM: Société d'applications éléctriques et mécaniques.`
            )}
          />
          <Divider />

          <CardContent>
            <Typography
              paddingTop={2}
              variant="body1"
              maxWidth="800px"
              textAlign="justify"
              margin="auto"
            >
              {i18n._(/* i18n: société anonyme bla bla  */ t`Société anonyme à conseil d'administration, au capital social de
                203 062,09 €, dont le siège social est situé au LE BOURG, 58270
                CIZELY, immatriculée au Registre du Commerce et des Sociétés de
                Nevers sous le numéro 549 879 096 représentée par M Joel ARCHER
                agissant et ayant les pouvoirs nécessaires en tant que président
                du conseil d'administration.`)}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale);
  return { props: { translation } };
};
