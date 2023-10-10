import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from '@mui/material';

import type { GetStaticProps } from 'next';
import Layout from '../components/layout';
import { PortraitCard } from '../components/innovation/PortraitCard';
import React from 'react';
import generateEmployees from './api/employees';
import { i18n } from '@lingui/core';
import loadTranslation from '../utils/loadTranslation';
import { t } from '@lingui/macro';
import { useTheme } from '../../node_modules/@mui/material';

function Team({ employees }) {
  const theme = useTheme();
  return (
    <Layout
      title={i18n._(/* i18n: Nos Equipes */ t` Nos Equipes`)}
      backgroundImageUrl="/medias/teamWork.jpg"
    >
      <Container
        maxWidth="lg"
        sx={{
          opacity: 0.98,
          marginTop: '40px',
          marginBottom: '20px',
          '&>*': { marginY: theme.spacing(2) },
        }}
      >
        <Card>
          <Typography variant="body1" padding={2}>
            {i18n._(/* i18n: Contact summary */ t`Notre équipe d'ingénieurs, de compagnons vous accompagne dans vos projets. Prototypage, devis, question technique, Notre équipe vous conseille et vous accompagne pour vous apporter des solutions
          personnalisées.`)}
          </Typography>
        </Card>

        <Card>
          <CardHeader
            title={i18n._(/* i18n: Contact summary */ t`La direction`)}
          />
          <CardContent>
            <Stack
              width="100%"
              display="flex"
              justifyContent="space-around"
              alignItems="baseline"
              spacing={2}
              sx={{ flexFlow: 'wrap' }}
            >
              {employees?.slice(0, 5).map((e, index) => (
                <Stack key={e.email ?? 'employeeN°' + index}>
                  <PortraitCard
                    name={e.firstName + ' ' + e.lastName}
                    description={e.description}
                    job={e.job}
                    image={e.portrait}
                    email={e.email}
                    phone={e.phone}
                  />
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardHeader
            title={i18n._(/* i18n: Contact summary */ t`L'atelier`)}
          />
          <CardContent>
            <Stack
              width="100%"
              display="flex"
              justifyContent="space-around"
              alignItems="baseline"
              spacing={2}
              sx={{ flexFlow: 'wrap' }}
            >
              {employees?.slice(10, 20).map((e, index) => (
                <Stack key={e.email ?? 'employeeN°' + index}>
                  <PortraitCard
                    name={e.firstName + ' ' + e.lastName}
                    description={e.description}
                    job={e.job}
                    image={e.portrait}
                    email={e.email}
                    phone={e.phone}
                  />
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
}
export default Team;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale);
  console.log(generateEmployees[0]);
  return {
    props: {
      translation,
      employees: generateEmployees,
    },
  };
};
