import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Switch,
  Typography,
  styled,
} from '@mui/material'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'
import React, { useContext } from 'react'
import { Theme, useTheme } from '@mui/material/styles'

import _ from 'lodash'
import { rootContext } from '../../pages/_app'
import { setContrastedBackground } from '../utils'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
  sx?: any
}
interface CookieBannerProps {
  cookieName?: string
  overAllMessage: string
  locale?: string
  cookies?: object
  privacyPolicyUrl?: string
}
export const CookieBanner = ({
  cookieName = 'sapemCookie',
  cookies = {
    googleAnalytics: 'this is the explanation of google analytics',
    fb_pixel: 'this is the explanation of fb_pixel',
  },
  overAllMessage = 'This WebSite intend to use Google Analytics cookies for better user experience. ',
  privacyPolicyUrl = '',
}: CookieBannerProps) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  const { context, dispatchContext } = React.useContext(rootContext)

  const [savedCoookies, setSavedCookies] = React.useState<{
    [key: string]: any
  }>(() => _.mapValues(cookies, () => true))

  const handleClickOpen = () => {
    setModalIsOpen(true)
    dispatchContext({ displayCookieBanner: true })
  }

  const handleClose = () => {
    setModalIsOpen(false)
    dispatchContext({ displayCookieBanner: false })
  }

  const theme: Partial<Theme> = useTheme() as Theme
  console.log(
    getCookieConsentValue(cookieName),
    getCookieConsentValue(cookieName) !== undefined,
    context.displayCookieBanner === undefined
  )
  return (
    <CookieConsent
      containerClasses={
        context.displayCookieBanner === true
          ? 'slideInUp'
          : context.displayCookieBanner === false
          ? 'slideOutDown'
          : ''
      }
      visible={
        context.displayCookieBanner === undefined ? 'byCookieValue' : 'visible'
      }
      cookieName={cookieName}
      cookieValue={JSON.stringify(savedCoookies)}
      expires={150}
      hideOnAccept={false}
      hideOnDecline={false}
      onAccept={() => dispatchContext({ displayCookieBanner: false })}
      onDecline={() => dispatchContext({ displayCookieBanner: false })}
      location="bottom"
      buttonText="accept"
      declineButtonText="decline"
      style={{
        flexFlow: 'column',
        backgroundColor: 'teal',
      }}
      contentStyle={{ flex: 'none', width: '100%', padding: theme.spacing(0) }}
      ButtonComponent={Button}
      flipButtons
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
        {Object.entries(cookies)?.map(([key, explanation]) => (
          <>
            <BootstrapDialogTitle
              key={key}
              sx={{
                ...setContrastedBackground(`${theme.palette?.primary.main}`),
              }}
              id="customized-dialog-title"
              onClose={handleClose}
            >
              {key}
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography variant="body1" gutterBottom>
                {explanation}
              </Typography>
              <Typography variant="body2" style={{ textAlign: 'center' }}>
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
            </DialogContent>
          </>
        ))}
        <DialogActions sx={{ alignSelf: 'flex-end' }}>
          <Button
            color="primary"
            variant="contained"
            sx={{ padding: '6px' }}
            onClick={handleClose}
          >
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </CookieConsent>
  )
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, sx, ...other } = props

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
        >
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}
