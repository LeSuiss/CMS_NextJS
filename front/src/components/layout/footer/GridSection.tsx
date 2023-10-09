import { Grid, Link, Typography } from '@mui/material';

import React from 'react';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';

export function GridSection({ title, links, isBlank = false, cb = null }) {
  return (
    <Grid item xs={12} md={2} container textAlign="center">
      <Typography variant="subtitle2" flex={1}>
        {typeof links === 'object' &&
          i18n._(
            /* i18n: Footer>SiteInformation>InformationTitle> */ t`${title}`
          )}
        {typeof links !== 'object' && cb ? (
          <a href="#" onClick={cb}>
            {i18n._(title)}
          </a>
        ) : (
          <a href={links} target={isBlank && '_blank'}>
            {i18n._(title)}
          </a>
        )}
      </Typography>
      <Grid xs={12} item container direction="column" marginTop={1}>
        {typeof links === 'object' &&
          links.map(({ url, content, isBlank: _isBlank }) =>
            url.includes('http') ? (
              <a href={url} target={isBlank && '_blank'}>
                {i18n._(content)}
              </a>
            ) : (
              <Link target={_isBlank && '_blank'} href={url}>
                {i18n._(content)}
              </Link>
            )
          )}
      </Grid>
    </Grid>
  );
}
