import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
import React from 'react';
import Layout from '@components/layout'
import { PortraitCard } from '@components/mui/PortraitCard'
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';
import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { fetchApi, getEmployees } from '@utils/apiHandlers'
import loadTranslation from '@utils/loadTranslation'

function team({ employees }) {
  const isDesktop = useMediaQuery('(min-width:900px)')

  return (
    <div>
      <Layout>
        <Typography variant="h2">
          {i18n._(/* i18n: Nos Equipes */ t`Nos Equipes`)}
        </Typography>
        <Divider className="titleDivider" />
        <Grid container justifyContent="center" alignItems="stretch" padding={4}>

          {employees
            // .filter((x, i) => i === 0)
            ?.map((e, index) => (
              <Grid key={e.email ?? 'employeeN°' + index} item md={3} sx={{ minWidth: '345px' }}>
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
          {JSON.stringify(employees[0], undefined, 6)}
        </Grid>
      </Layout>
    </div>
  )
}
export default team

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!)

  const logoList = path.join(process.cwd(), '/public/medias/logo')
  const brandsList = fs.readdirSync(logoList)
  const employees = await getEmployees(ctx.locale)

  return {
    props: {
      brandsList,
      translation,
      employees,
    },
  }
}
