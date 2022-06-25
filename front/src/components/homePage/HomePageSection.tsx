import Image                                    from 'next/image'
import React                                    from 'react'
import { i18n }                                 from '@lingui/core'
import { Button, Divider, Grid, useMediaQuery } from '@mui/material'
import Typography                               from '@mui/material/Typography'
import styles                                   from '../../styles/Home.module.scss'

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
  const imageOrder = !isMobile && index % 2 === 0 ? 1 : -1
  return (
    <section >
      <Grid
        style={{ paddingTop: '3%', paddingBottom: '3% ' }}
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
        >

          <Typography variant="h2" style={{ display: 'grid' }}>{i18n._(title).toUpperCase()}
            <div className="titleDivider" />
          </Typography>
          <p> {text} </p>
          <div style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }} >
            <Button onClick={() => alert('hoho')}>Learn More</Button>
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
          <Image alt="bgHome" src={imageSrc} layout="fill" />
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
    </section>
  )
}

export default HomePageSection
