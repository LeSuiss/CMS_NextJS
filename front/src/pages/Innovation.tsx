import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from '@mui/material';

import { GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import Layout from '../components/layout';
import React from 'react';
import { i18n } from '@lingui/core';
import loadTranslation from '../utils/loadTranslation';
import { t } from '@lingui/macro';
import { useTheme } from '../../node_modules/@mui/material';

export default function Innovation() {
  const theme = useTheme();


  return (
    <Layout 
    title={i18n._(/* i18n: Innovation */ t`Innovation`)}>
      <Stack
        padding={1}
        className="backImage"
        sx={{ backgroundImage: 'url("/medias/bgBE.webp")' }}
      >
        <Container maxWidth="lg" sx={{ opacity: 0.95 }}>
          <Card sx={{ marginY: theme.spacing(5) }}>
            <CardHeader
              title="Présentation"
              sx={{
                borderBottom: `${theme.palette.primary.main} 2px solid`,
              }}
            />
            <CardContent>
              <Typography variant="body1">
                SAPEM est une société de services spécialisée dans l'ingénierie
                industrielle et l'innovation technologique indépendante. SAPEM
                intervient grace à un bureau d'études d'ingénierie industrielle,
                intervenant dans la conduite des affaires en matière
                d'ingénierie: étude des projets techniques, recherche
                industrielle, ainsi que la conception et l'innovation des
                produits et process.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ marginY: theme.spacing(5) }}>
            <CardHeader
              title=" Notre offre"
              sx={{
                marginTop: 1,
                borderBottom: `${theme.palette.primary.main} 2px solid`,
              }}
            />
            <CardContent sx={{ padding: 4 }}>
              <Typography>
                {i18n._(/* i18n:  */ t`BE2i Technologies intervient principalement en mode de
                sous-traitance: Assistance technique, forfait et offshoring.
                Nous assurons un suivi global des projets de la pré-étude
                jusqu'au prototype et pré série. Nous intervenons dans l'étude
                et la conception des projets dans les secteurs: Automobile,
                Aéronautique, Ferroviaire, Industrie Mécanique, Médical,
                Métrologie, Qualité. Nos expert vous accompagnera pour vos
                besoins de formations en qualité et/ou métrologie, conseils ou
                accompagnement pour certification accréditation , mise en place
                de nouveaux procédés, création de nouveaux produits BE2i
                Technologies s'engage à répondre au mieux à tous vos besoins par
                des solutions techniques complètes et innovantes adaptées, ainsi
                qu'un accompagnement personnalisé pour chaque phase de projet.
                Véritable partenaire de confiance nous vous accompagnons et vous
                assurons soutien et conseil dans chaque étape de votre projet.`)}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Stack>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale);

  return {
    props: {
      translation,
    },
  };
};
