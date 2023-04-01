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
  Switch,
  Typography,
  styled,
} from '@mui/material'
import { Theme, useTheme } from '@mui/material/styles'

import CookieConsent from 'react-cookie-consent'
import React from 'react'
import _ from 'lodash'
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
  locale = 'fr',
  cookies = {
    googleAnalytics: 'this is the explanation of google analytics',
    fb_pixel: 'this is the explanation of fb_pixel',
  },
  overAllMessage = 'This WebSite intend to use Google Analytics cookies for better user experience. ',
  privacyPolicyUrl = '',
}: CookieBannerProps) => {
  const [open, setOpen] = React.useState(false)
  const [status, setStatus] = React.useState('slideInUp')

  const [savedCoookies, setSavedCookies] = React.useState<{
    [key: string]: any
  }>(() => _.mapValues(cookies, () => true))
  const handleClickOpen = () => {
    setOpen(true)
    setStatus('slideInUp')
  }
  const handleClose = () => {
    setOpen(false)
    setStatus('slideInDown')
  }
  const theme: Partial<Theme> = useTheme() as Theme

  return (
    <CookieConsent
      containerClasses={status}
      cookieName={cookieName}
      cookieValue={JSON.stringify(savedCoookies)}
      expires={150}
      debug={process.env !== 'production'}
      hideOnAccept={false}
      hideOnDecline={false}
      onAccept={() => setStatus('slideOutDown')}
      onDecline={() => setStatus('slideOutDown')}
      location="bottom"
      buttonText="accept"
      declineButtonText="decline"
      style={{
        display: 'flex',
        flexFlow: 'column',
        backgroundColor: theme.palette.secondary.light,
      }}
      contentStyle={{ flex: 'none' }}
      flipButtons
      enableDeclineButton
    >
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
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
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
