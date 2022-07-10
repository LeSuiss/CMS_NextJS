import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { i18n } from '@lingui/core'
import { Button, Grid, useMediaQuery, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import { NAVIGATION_STRUCTURE } from '../../constants'
import styles from '../../styles/Home.module.scss'

export interface section {
  imageSrc: string
  title: string
  text: string
  index?: number
}
function HomePageSection({
  imageSrc = '',
  title = '',
  text = '',
  index,
}: section) {
  const isMobile = useMediaQuery('(max-width:900px)')
  const theme = useTheme()
  const imageOrder = !isMobile && index % 2 === 0 ? 1 : -1
  return (
    <section >
      <Grid
        sx={{
          paddingTop: `${!isMobile ? '3%' : 0}`,
          paddingBottom: `${!isMobile ? '3%' : 0}`
        }}
        className={styles.sectionContainer}
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          className={styles.contentContainer}
          item
          md={5}
          xs={10}
          alignItems="center"
          sx={{ order: imageOrder === 1 ? 0 : 3 }}
        >

          <Typography variant="h2" style={{ display: 'grid' }}>{i18n._(title).toUpperCase()}
            <div className="titleDivider" />
          </Typography>
          <p> {text} </p>
          <div style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }} >
            <Button variant='contained' sx={{
              '& *': { color: 'white', '&:hover': { color: theme.palette.primary.main, }, textDecoration: 'none' },
              '&:hover': { '& *': { color: theme.palette.primary.main, } }
            }}>
              <Link href={NAVIGATION_STRUCTURE.filter(x => x.link !== '/')[index].link}>Learn More</Link>
            </Button>
          </div>
        </Grid>

        <Grid item md={1} />

        <Grid
          item
          xs={12}
          md={3}
          padding={3}
          className={styles.imageContainer}
          style={{ order: imageOrder, minHeight: '200px' }}
        >
          <Image alt="bgHome" src={imageSrc} layout="fill" objectFit='cover' />
          {!isMobile && (
            <Grid
              item
              style={{
                backgroundColor: 'grey',
                position: 'absolute',
                top: '15px',
                left: '15px',
                zIndex: -9,
                height: '100%',
                width: '100%',
              }}
            />
          )}
        </Grid>
      </Grid>
    </section >
  )
}

export default HomePageSection
