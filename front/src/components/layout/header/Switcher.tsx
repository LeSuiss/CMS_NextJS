import {
  Box,
  Button,
  Card,
  ClickAwayListener,
  Divider,
  Modal,
  Slide,
  Typography,
} from '@mui/material'

import Image from 'next/image'
import { LANGUAGES } from '../../../config/constants'
import { i18n } from '@lingui/core'
import loadTranslation from '../../../assets/utils/loadTranslation'
import nextConfig from '../../../../next.config.js'
import { t } from '@lingui/macro'
import { useIsMobile } from '../../../assets/utils/hooks'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Switcher() {
  const isMobile = useIsMobile()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const labels = {}
  LANGUAGES.filter((lang) =>
    nextConfig.i18n.locales.includes(lang.locale)
  ).forEach((lang) => Object.assign(labels, { [lang.locale]: lang.locale }))

  const handleSelect = async (choice) => {
    const convertedValue = LANGUAGES.filter((x) => x.locale === choice)[0]
      .locale
    const message = await loadTranslation(convertedValue)
    router.push(router.pathname, {}, { locale: convertedValue })
    await i18n.load(convertedValue, message)
    await i18n.activate(convertedValue)
  }

  return (
    <>
      <Button
        sx={{
          height: '36px',
          padding: '15px',
          maxHeight: '100%',
          marginRight: 7,
          textAlgin: 'left',
          display: 'flex',
          justifyContent: 'start',
          width: !isMobile ? 'auto' : '100%',
        }}
        onClick={() => setIsModalOpen((p) => !p)}
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
      <Modal
        open={isModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Slide direction="down" in={isModalOpen} timeout={400}>
          <Card>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItem: 'center',
                flexFlow: 'column',
                bgcolor: 'background.paper',
                boxShadow: 24,
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
              {Object.keys(i18n._localeData).map((loc, index) => (
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
                      handleSelect(loc)
                      setIsModalOpen(false)
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
                  {index !== Object.keys(i18n._localeData).length - 1 && (
                    <Divider />
                  )}
                </div>
              ))}
            </Box>
          </Card>
        </Slide>
      </Modal>
    </>
  )
}

export default Switcher
