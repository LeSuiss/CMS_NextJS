import { Box, Stack } from '@mui/material';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Home.module.scss';

interface SocialMediasProps {
  urls: string[];
  whiteIcons?: boolean;
}
export function SocialMedias({ urls, whiteIcons = true }: SocialMediasProps) {
  const possibleMedias = {
    linkedin: {
      url: urls?.filter((url) => url.includes('linkedin'))[0],
      displayIcon: () =>
        whiteIcons ? (
          <LinkedIn fontSize="large" className={styles.socialMediaIcons} />
        ) : (
          <img
            src="/medias/logo/linkedinLogoFull.png"
            alt="Logo"
            className={styles.socialMediaIcons}
          />
        ),
    },
    youtube: {
      url: urls?.filter((url) => url.includes('youtube'))[0],
      displayIcon: () =>
        whiteIcons ? (
          <YouTube fontSize="large" className={styles.socialMediaIcons} />
        ) : (
          <img
            src="/medias/logo/youtubeLogoFull.png"
            alt="Logo"
            className={styles.socialMediaIcons}
          />
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
  };

  return (
    <Stack
      direction="row"
      maxHeight="40px"
      sx={{ '& *': { maxHeight: '40px' } }}
    >
      {Object.values(possibleMedias)
        ?.filter(({ url }) => url)
        ?.map(({ url, displayIcon }) => (
          <div key={url}>
            {!!url && (
              <Link key={url} target="_blank" href={url} rel="noreferrer">
                <Box>{displayIcon()}</Box>
              </Link>
            )}
          </div>
        ))}
    </Stack>
  );
}
