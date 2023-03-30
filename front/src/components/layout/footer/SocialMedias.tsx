import { Box, Stack } from '@mui/material'
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material'

import React from 'react'
import styles from '../../../styles/Home.module.scss'

export function SocialMedias({ urls = ['toto'] }) {
  const possibleMedias = {
    linkedin: {
      url: urls?.filter((url) => url.includes('linkedin'))[0],
      displayIcon: () => (
        <LinkedIn fontSize="large" className={styles.socialMediaIcons} />
      ),
    },
    youtube: {
      url: urls?.filter((url) => url.includes('youtube'))[0],
      displayIcon: () => (
        <YouTube fontSize="large" className={styles.socialMediaIcons} />
      ),
    },
    facebook: {
      url: urls?.filter((url) => url.includes('facebook'))[0],
      displayIcon: () => (
        <Facebook fontSize="large" className={styles.socialMediaIcons} />
      ),
    },
    instagram: {
      url: urls?.filter((url) => url.includes('instagram'))[0],
      displayIcon: () => (
        <Instagram fontSize="large" className={styles.socialMediaIcons} />
      ),
    },
  }

  return (
    <Stack direction="row">
      {Object.values(possibleMedias)
        .filter(({ url }) => url)
        .map(({ url, displayIcon }) => (
          <div key={url}>
            {!!url && (
              <a key={url} target="_blank" href={url} rel="noreferrer">
                <Box sx={{ '& svg': { width: '35px', height: '35px' } }}>
                  {displayIcon()}
                </Box>
              </a>
            )}
          </div>
        ))}
    </Stack>
  )
}
