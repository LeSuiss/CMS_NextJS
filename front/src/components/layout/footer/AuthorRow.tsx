import { Divider, Grid, Typography } from '@mui/material';

import React from 'react';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';

export function AuthorRow({ theme }: any) {
  return (
    <>
      <Divider
        sx={{
          backgroundColor: 'white',
          width: '100%',
          height: '1px',
        }}
      />
      <Grid
        item
        paddingTop={1}
        container
        md={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{
          backgroundColor: 'darkgrey',
          '& *': {
            color: 'black !important',
            fontWeight: 'bolder',
            fontSize: '10px !important',
            textAlign: 'center',
          },
        }}
      >
        <Typography variant="body2">
          Copyright © Sapem {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2">
          {i18n._(
            /* i18n: site realisé par Alexis ARCHER */ t`site realisé par Alexis ARCHER`
          )}
        </Typography>
        <Typography variant="body1">
          <a href={`mailto:archer.alexis@hotmail.fr`}>email me</a>
          <span> {' / '}</span> <a href="phoneto:0761297272">07 61 29 72 72</a>
        </Typography>
        <Typography>devis sur demande</Typography>
      </Grid>
    </>
  );
}
