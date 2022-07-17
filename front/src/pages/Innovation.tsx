import fs from 'fs'
import path from 'path'
import type { GetStaticProps } from 'next'
import * as React from 'react'
import Layout from '@components/layout'
import loadTranslation from '@utils/loadTranslation'
import { fakeDataProducts } from '../../fakeDataProducts'

export default function Innovation(props) {
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
      <div className=".container_component">innovation</div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale)
  const logoList = path.join(process.cwd(), '/public/medias/logo')
  const productsApi = fakeDataProducts

  const filteringStructure = {}

  productsApi.forEach((x) => {
    function addIfNotPresent(category: string) {
      if (!filteringStructure[category]) {
        filteringStructure[category] = {}
      }
      return (
        !Object.keys(filteringStructure).includes(x[category]) &&
        Object.assign(filteringStructure[category], { [x[category]]: true })
      )
    }
    ;['family', 'category'].forEach(addIfNotPresent)
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
