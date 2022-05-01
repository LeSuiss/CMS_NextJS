/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';
import {
  Card, Divider, Grid,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import loadTranslation from '@utils/loadTranslation';
import Layout from '@components/layout';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';

export default function innovation() {
  return (
    <Layout>
      <Typography variant="h2">
        {i18n._(/* i18n: InnovationTitle */ t`We Overcome problems with disruptive innovations`)}
      </Typography>
      <Divider className="titleDivider" />
      <Grid container>
        <Card>
          f
        </Card>
      </Grid>

    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!);

  const test = path.join(process.cwd(), 'public/logo');

  const brandsList = fs.readdirSync(test);
  return {
    props: {
      brandsList,
      translation,
      // fileList,
      // __dirname,
    },
  };
};
