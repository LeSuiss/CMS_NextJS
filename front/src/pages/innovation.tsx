import fs from 'fs'
import path from 'path'
import axios from 'axios'
import filter from 'lodash/filter'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import * as React from 'react'
import Layout from '@components/layout'
import FilteringMenuAccordeon from '@components/mui/FilteringMenu'
import { ProductCard } from '@components/mui/ProductCard'
import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { Button, Card, Divider, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { fetchApi } from '@utils/apiHandlers'
import loadTranslation from '@utils/loadTranslation'
import { fakeDataProducts } from '../../fakeDataProducts'
import style from '../styles/Products.module.scss'
import employees from './api/employees'

export default function innovation(props) {
  const filteredProducts = []
  const result = []



  props.fakeDataProducts?.forEach(
    (x) =>
      !filteredProducts.includes(x.name) &&
      filteredProducts.push(x.name) &&
      result.push(x)
  )


  return (
    <Layout>
      <div className='.container_component'>
        innovation
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


