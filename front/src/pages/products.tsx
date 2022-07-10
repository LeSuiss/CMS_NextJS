import fs from 'fs'
import path from 'path'
import type { GetStaticProps } from 'next'
import * as React from 'react'
import Layout from '@components/layout'
import FilteringMenuAccordeon from '@components/mui/FilteringMenu'
import { ProductCard } from '@components/mui/ProductCard'
import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { Divider, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import loadTranslation from '@utils/loadTranslation'
import { fakeDataProducts } from '../../fakeDataProducts'

export default function products(props) {
  const [filters, setFilters] = React.useState(props.filteringStructure)

  return (
    <Layout>
      <div className='.container_component'>
        <Typography variant="h2">
          {i18n._(
          /* i18n: InnovationTitle */ t`A la pointe de l'innovation`
          )}
        </Typography>
        <Divider sx={{ marginBottom: '2em' }} className="titleDivider" />

        <Grid container margin={2}>

          <Grid md={2} xs={12} item container display='flex' justifyContent='center'>
            <FilteringMenuAccordeon
              filteringStructure={props.filteringStructure}
              setFilters={setFilters}
            />

          </Grid>

          <Grid md={9} gap={4} container item direction="row" justifyContent="center">

            {props.fakeDataProducts
              .filter(x =>
                filters.family[x.family]
                && filters.category[x.category]
              )
              .map((x, index) =>
                <ProductCard
                  key={'product_' + x.name + index}
                  title={x.name}
                  subheader={`${x.family} / ${x.category}`}
                  productImageSrc={`/medias/products/${x.family}.jpg`} />
              )}
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
