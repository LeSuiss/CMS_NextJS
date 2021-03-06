import fs from 'fs'
import path from 'path'
import type { GetStaticProps } from 'next'
import React from 'react'
// import TrustingBrands          from '@components//homePage/TrustingBrands'
import { Head } from '@components/Head/Head'
import BackgroundVideo from '@components/homePage/BackgroundVideo'
import HomePageSection from '@components/homePage/HomePageSection'
import { sectionsData } from '@components/homePage/config'
import Layout from '@components/layout'
import { useMediaQuery } from '@mui/material'
import loadTranslation from '@utils/loadTranslation'

function Home({ brandsList }) {
  const isDesktop = useMediaQuery('(min-width:900px)')
  // eslint-disable-next-line no-console
  console.log(brandsList)
  return (
    <div>
      <Head />
      <Layout>
        {isDesktop && <BackgroundVideo />}
        {sectionsData?.map((section, index) => (
          // <Slide direction={index % 2 === 0 ? 'left' : 'right'} in appear mountOnEnter unmountOnExit >
          <HomePageSection index={index} key={section.title} {...section} />
          // </Slide>
        ))}
        {/* <TrustingBrands brandsList={brandsList} /> */}
      </Layout>
    </div>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale)

  const logoList = path.join(process.cwd(), '/public/medias/logo')
  const brandsList = fs.readdirSync(logoList)

  return {
    props: {
      brandsList,
      translation,
    },
  }
}
