import type { GetStaticProps } from 'next'
import React from 'react'
import Layout from '@components/layout'
import { PortraitCard } from '@components/mui/PortraitCard'
import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { Divider, Grid, Typography } from '@mui/material'
import { getEmployees } from '@utils/apiHandlers'
import loadTranslation from '@utils/loadTranslation'

function team({ employees }) {
  // const isDesktop = useMediaQuery('(min-width:900px)')

  return (
    <div>
      <Layout>
        <Typography variant="h2">
          {i18n._(/* i18n: Nos Equipes */ t``)}
        </Typography>
        <Divider className="titleDivider" />
        <Grid
          container
          justifyContent="center"
          alignItems="stretch"
          padding={4}
        >
          {employees
            // .filter((x, i) => i === 0)
            ?.map((e, index) => (
              <Grid
                key={e.email ?? 'employeeNÂ°' + index}
                item
                md={3}
                sx={{ minWidth: '345px' }}
              >
                <PortraitCard
                  name={e.email}
                  description={e.description}
                  functions={e.fonction}
                  image={e.portait}
                  email={e.email}
                  phone={e.phone}
                />
              </Grid>
            ))}
        </Grid>
      </Layout>
    </div>
  )
}
export default team

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale)

  const employees = (await getEmployees(ctx.locale)) ?? []

  return {
    props: {
      translation,
      employees,
    },
  }
}
