import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { i18n } from '@lingui/core'
import {
  Box,
  Button,
  Card,
  Divider,
  Modal,
  Typography,
  useMediaQuery,
} from '@mui/material'
import loadTranslation from '@utils/loadTranslation'
import nextConfig from '../../../next.config'
import { LANGUAGES } from '../../constants'

function Switcher() {
  const isMobile = useMediaQuery('(max-width:900px)')
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
    i18n.load(convertedValue, message)
    i18n.activate(convertedValue)
  }

  return (
    <>
      <Button
        sx={{
          marginRight: 7,
          textAlgin: 'left',
          display: 'flex',
          justifyContent: 'start',
          width: !isMobile ? 'auto' : '100%',
          height: !isMobile ? 'auto' : '36px',
          padding: '15px',
          maxHeight: '100%',
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
        <span style={{ margin: 15 }}>{i18n.locale.toUpperCase()}</span>
      </Button>
      <Modal
        open={isModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card>
          <Box
            sx={{
              position: 'absolute' as const,
              top: '50%',
              left: '50%',
              // transform: 'translate(-50%, -50%)',
              display: 'flex',
              justifyContent: 'center',
              alignItem: 'center',
              flexFlow: 'column',
              bgcolor: 'background.paper',
              // border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography sx={{ textAlign: 'center' }} variant="h5">
              Select your Language
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
                    width="40px"
                    height="60px"
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
      </Modal>
    </>
  )
}

export default Switcher
