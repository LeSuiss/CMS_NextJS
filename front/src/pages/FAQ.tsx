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
import { FAQ } from '../lib/faq/FAQ';

const FAQitems = [
  {
    question: i18n._(/* i18n:  Foire Aux Questions */ t`Foire Aux Questions`),
    answer: i18n._(/* i18n:  réponse */ t`réponse`),
  },
  {
    question: i18n._(/* i18n:  Foire Aux Questions */ t`Foire Aux Questions`),
    answer: i18n._(/* i18n:  réponse */ t`réponse`),
  },
  {
    question: i18n._(/* i18n:  Foire Aux Questions */ t`Foire Aux Questions`),
    answer: i18n._(/* i18n:  réponse */ t`réponse`),
  },
];

export default function Legal() {
  const isMobile = useIsMobile();

  const layoutPadding = !isMobile ? 8 : 3;

  return (
    <Layout title={i18n._(/* i18n: FAQ */ t`FAQ`)}>
      <Stack
        padding={layoutPadding}
        sx={{ backgroundImage: 'url("/medias/FAQ.jpg")' }}
        className="backImage"
      >
        <Container maxWidth="lg">
          <Card sx={{ minHeight: '50vh' }}>
            <CardHeader
              title={i18n._(
                /* i18n: Les réponses à vos questions */ t`Les réponses à vos questions`
              )}
            />
            <Divider />

            <CardContent>
              <FAQ faqList={FAQitems} />
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
