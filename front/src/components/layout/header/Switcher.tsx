import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Divider,
  Slide,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import Image from 'next/image';
import { LANGUAGES } from '../../../config/company-config';
import { TransitionProps } from '@mui/material/transitions';
import { i18n } from '@lingui/core';
import { isMobile } from '../../../utils/hooks';
import loadTranslation from '../../../utils/loadTranslation';
import nextConfig from '../../../../next.config.js';
import { t } from '@lingui/macro';
import { useRouter } from 'next/router';

const TransitionComponent = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" timeout={400} ref={ref} {...props} />;
});

function Switcher() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const labels = {};
  LANGUAGES.filter((lang) =>
    nextConfig.i18n.locales.includes(lang.locale)
  ).forEach((lang) => Object.assign(labels, { [lang.locale]: lang.locale }));

  const handleSelect = async (choice) => {
    const convertedValue = LANGUAGES.find((x) => x.locale === choice)?.locale;
    if (convertedValue) {
      const message = await loadTranslation(convertedValue);
      router.push(router.pathname, {}, { locale: convertedValue });
      await i18n.load(convertedValue, message);
      await i18n.activate(convertedValue);
    }
  };

  return (
    <>
      <Button
        fullWidth={isMobile()}
        sx={{
          height: '36px',
          padding: '15px',
          maxHeight: '100%',
          marginRight: 7,
          textAlgin: 'left',
          display: 'flex',
          justifyContent: 'start',
        }}
        onClick={() => setIsDialogOpen((p) => !p)}
      >
        <Image
          defaultValue={i18n.locale}
          width={20}
          height={30}
          alt="selectedLang"
          src={`/flags/${i18n.locale}.svg`}
        />
        <Typography variant="body1" style={{ margin: 15 }}>
          {i18n.locale.toUpperCase()}
        </Typography>
      </Button>
      <Dialog
        keepMounted
        open={isDialogOpen}
        TransitionComponent={TransitionComponent}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
            flexFlow: 'column',
            p: 4,
          }}
        >
          <Typography
            sx={{ textAlign: 'center', paddingBottom: '20px' }}
            variant="h5"
          >
            {i18n._(
              /* i18n: select your language */ t`Choisissez votre langue`
            )}
          </Typography>
          {Object.keys((i18n as any)._localeData).map((loc, index) => (
            <div key={'localeIs' + loc}>
              <Button
                sx={{
                  marginTop: 1,
                  marginBottom: 1,
                  width: '100%',
                  left: '0',
                  border: 'none !important',
                }}
                variant="outlined"
                onClick={() => {
                  handleSelect(loc);
                  setIsDialogOpen(false);
                }}
              >
                <Image
                  defaultValue={i18n.locale}
                  width={40}
                  height={60}
                  alt="selectedLang"
                  src={`/flags/${loc}.svg`}
                />
              </Button>
              {index !== Object.keys((i18n as any)._localeData).length - 1 && (
                <Divider />
              )}
            </div>
          ))}
        </Box>
        <DialogActions>
          <Button
            onClick={() => setIsDialogOpen(false)}
            sx={{ marginRight: 'auto' }}
            color="error"
          >
            {i18n._(/* i18n: select your language */ t`Annuler`)}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Switcher;
