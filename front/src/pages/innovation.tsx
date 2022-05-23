import fs                               from 'fs'
import path                             from 'path'
import axios                            from 'axios'
import type { GetStaticProps }          from 'next'
import Image                            from 'next/image'
import * as React                       from 'react'
import Layout                           from '@components/layout'
import { ProductCard }                  from '@components/mui/ProductCard'
import { i18n }                         from '@lingui/core'
import { t }                            from '@lingui/macro'
import { Button, Card, Divider, Grid }  from '@mui/material'
import Typography                       from '@mui/material/Typography'
import { fetchApi }                     from '@utils/apiHandlers'
import loadTranslation                  from '@utils/loadTranslation'
import { fakeDataProducts }             from '../../fakeDataProducts'
import style                            from '../styles/innovation.module.scss'
import employees                        from './api/employees'

export default function innovation(props) {
  const filteredProducts = []
  const result           = []

  props.fakeDataProducts.forEach(
    (x) =>
      !filteredProducts.includes(x.name) &&
      filteredProducts.push(x.name) &&
      result.push(x)
  )
  return (
    <Layout>
      <div className='.container_component'>
    {JSON.stringify(props.test, undefined, 4)}
      <Typography variant="h2">
        {i18n._(
          /* i18n: InnovationTitle */ t`We Overcome problems with disruptive innovations`
          )}
      </Typography>
      <Divider className="titleDivider" />
      <Grid container direction="row">
      fffffffffff
      </Grid>

      <Grid container direction="row" justifyContent="center">
        {result.map((x, index) => (
          <ProductCard 
          patented={index % 2 === 0} 
          title={x.name} 
          subheader={`${x.family} / ${x.category}`} 
          productImageSrc={`/products/${x.family}.jpeg`} />
          ))}
        <Card>f</Card>
      </Grid>
          </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!)
  const logoList = path.join(process.cwd(), '/public/medias/logo')

  
  const brandsList = fs.readdirSync(logoList)
  return {
    props: {
      brandsList,
      translation,
      fakeDataProducts,
      // test:test
      // fileList,
      // __dirname,
    },
  }
}
