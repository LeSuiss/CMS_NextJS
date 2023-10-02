import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import React, { useContext } from 'react';
import { Theme, useTheme } from '@mui/material/styles';

import _ from 'lodash';
import { i18n } from '@lingui/core';
import { setContrastedBackground } from '../utils';
import { styled } from '../../../node_modules/@mui/material';
import { t } from '@lingui/macro';
import { useRootContext } from '../../pages/_app';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
  sx?: any;
}
interface CookieBannerProps {
  cookieName?: string;
  overAllMessage?: string;
  locale?: string;
  cookies?: object;
  privacyPolicyUrl?: string;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, sx, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, ...sx }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        ></IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const CookieBanner = ({
  cookieName = 'sapemCookie',
  cookies = {
    googleAnalytics: 'this is the explanation of google analytics',
    fb_pixel: 'this is the explanation of fb_pixel',
  },
  overAllMessage = 'This WebSite intend to use Google Analytics cookies for better user experience. ',
  privacyPolicyUrl = '',
}: CookieBannerProps) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const { context, dispatchContext } = useRootContext();

  const [savedCoookies, setSavedCookies] = React.useState<{
    [key: string]: any;
  }>(() => _.mapValues(cookies, () => true));

  const handleClickOpen = () => {
    setModalIsOpen(true);
  };

  const handleClose = () => {
    setModalIsOpen(false);
    dispatchContext({ displayCookieBanner: false });
  };

  const theme: Partial<Theme> = useTheme() as Theme;

  return (
    <CookieConsent
      cookieName={cookieName}
      cookieValue={JSON.stringify(savedCoookies)}
      expires={150}
      hideOnAccept={false}
      hideOnDecline={false}
      containerClasses={
        context.displayCookieBanner === true
          ? 'slideInUp'
          : context.displayCookieBanner === false
          ? 'slideOutDown'
          : ''
      }
      style={{
        flexFlow: 'column',
        backgroundColor: 'darkblue',
        paddingLeft: '20px',
      }}
      visible={
        context.displayCookieBanner === undefined ? 'byCookieValue' : 'visible'
      }
      onAccept={() => dispatchContext({ displayCookieBanner: false })}
      onDecline={() => dispatchContext({ displayCookieBanner: false })}
      location="bottom"
      ButtonComponent={Button}
      disableButtonStyles
      buttonStyle={{ margin: '20px' }}
      buttonText="accept"
      declineButtonText="decline"
      customButtonProps={{ color: 'info', variant: 'contained', margin: 2 }}
      customDeclineButtonProps={{
        color: 'error',
        variant: 'contained',
      }}
      contentStyle={{
        flex: 'none',
        width: '100%',
        marginLeft: '-10px',
      }}
      enableDeclineButton
    >
      <Stack width="100%">
        <Typography variant="h6"> COOKIES</Typography>
        <Divider sx={{ color: 'white', borderTop: 'solid 1px white' }} />
        <p>{overAllMessage}</p>
        <ul style={{ listStyleType: 'disclosure-closed' }}>
          {privacyPolicyUrl && (
            <li>
              <a
                style={{ color: theme.palette?.primary.contrastText }}
                href={privacyPolicyUrl}
              >
                discover our cookie policy
              </a>
            </li>
          )}
          <li
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={handleClickOpen}
          >
            set Cookies
          </li>
        </ul>
      </Stack>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={modalIsOpen}
      >
        <BootstrapDialogTitle
          sx={{
            ...setContrastedBackground(`${theme.palette?.primary.main}`),
            margin: 0,
          }}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {i18n._(/* i18n: Customize your cookies */ t`Customize your cookies`)}
        </BootstrapDialogTitle>
        <DialogContent>
          {Object.entries(cookies)?.map(([key, explanation]) => (
            <Stack paddingBottom={2}>
              <Typography variant="body1" gutterBottom paddingTop={3}>
                {explanation}
              </Typography>
              <Typography
                marginTop={2}
                variant="body2"
                style={{ textAlign: 'right' }}
              >
                Activate {key} cookie:
                <Switch
                  color="info"
                  onChange={() =>
                    setSavedCookies((oldS) => ({
                      ...oldS,
                      [key]: !oldS[key],
                    }))
                  }
                />
              </Typography>
              <Divider />
            </Stack>
          ))}
        </DialogContent>
        <DialogActions sx={{ alignSelf: 'flex-end', padding: 2 }}>
          <Button variant="outlined" onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </CookieConsent>
  );
};
