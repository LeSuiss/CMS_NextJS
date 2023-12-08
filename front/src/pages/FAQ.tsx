import { Card, CardContent, CardHeader, Divider } from '@mui/material';

import { FAQ } from '../lib/faq/FAQ';
import type { GetStaticProps } from 'next';
import Layout from '../components/layout';
import React from 'react';
import { i18n } from '@lingui/core';
import loadTranslation from '../utils/loadTranslation';
import { lorem } from '../utils/lorem';
import { t } from '@lingui/macro';

interface FaqProps {
  FAQitems: {
    question: string;
    answer: string;
  };
}
export default function Faq({ FAQitems }: FaqProps) {
  return (
    <Layout
      title={i18n._(/* i18n: FAQ */ t`FAQ`)}
      backgroundImageUrl="/medias/FAQ.jpg"
    >
      <Card>
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
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const FAQitems = [
    {
      question: i18n._(/* i18n:  Foire Aux Questions */ t`${lorem}`),
      answer: i18n._(
        /* i18n:  Foire Aux Questions */ t`${lorem + lorem + lorem}`
      ),
    },
    {
      question: i18n._(/* i18n:  Foire Aux Questions */ t`${lorem}`),
      answer: i18n._(
        /* i18n:  Foire Aux Questions */ t`${lorem + lorem + lorem}`
      ),
    },
    {
      question: i18n._(/* i18n:  Foire Aux Questions */ t`${lorem}`),
      answer: i18n._(
        /* i18n:  Foire Aux Questions */ t`${lorem + lorem + lorem}`
      ),
    },
  ];

  const translation = await loadTranslation(ctx.locale);

  return {
    props: {
      translation,
      FAQitems,
    },
  };
};
