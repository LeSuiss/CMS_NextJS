import fs from 'fs'
import path from 'path'
import axios from 'axios'
import _, { filter } from 'lodash'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import * as React from 'react'
import Layout from '@components/layout'
import FilteringMenuAccordeon from '@components/mui/FilteringMenu'
import { ProductCard } from '@components/mui/ProductCard'
import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { PropaneSharp } from '@mui/icons-material'
import { Button, Card, Divider, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { fetchApi } from '@utils/apiHandlers'
import loadTranslation from '@utils/loadTranslation'
import { fakeDataProducts } from '../../fakeDataProducts'
import style from '../styles/Products.module.scss'
import employees from './api/employees'
export default function products(props) {
  const [filters, setFilters] = React.useState(props.filteringStructure)

  return (
    <Layout>
      <div className='.container_component'>
        <Typography variant="h2">
          {i18n._(
          /* i18n: InnovationTitle */ t`We Overcome problems with disruptive innovations`
          )}
        </Typography>
        <Divider sx={{ marginBottom: '2em' }} className="titleDivider" />

        <Grid container >

          <Grid md={3} xs={12} item container display='flex' justifyContent='center'>
            <FilteringMenuAccordeon
              filteringStructure={props.filteringStructure}
              setFilters={setFilters}
            />

          </Grid>

          <Grid md={9} gap={4} container item direction="row" justifyContent="center">

            {props.fakeDataProducts
              .filter(x =>
                filters.family[x.family]
                //   // && filters[x.category]
              )
              .map((x, index) =>
                <ProductCard
                  key={'product_' + x.name + index}
                  patented={index % 2 === 0}
                  title={x.name}
                  subheader={`${x.family} / ${x.category}`}
                  productImageSrc={`/products/${x.family}.jpeg`} />
              )}
            <Card>f</Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!)
  const logoList = path.join(process.cwd(), '/public/medias/logo')
  const productsApi = fakeDataProducts



  const filteringStructure = {}

  productsApi.forEach(x => {
    function addIfNotPresent(category: string) {
      if (!filteringStructure[category]) {
        filteringStructure[category] = {}
      }
      !Object.keys(filteringStructure).includes(x[category]) &&
        (
          Object.assign(filteringStructure[category], { [x[category]]: true })

        )

    }
    ['family', 'category'].forEach(addIfNotPresent)

  })


  const brandsList = fs.readdirSync(logoList)
  return {
    props: {
      brandsList,
      translation,
      fakeDataProducts,
      filteringStructure,
      // test:test
      // fileList,
      // __dirname,
    },
  }
}
