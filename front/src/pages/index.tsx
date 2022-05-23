import fs                      from 'fs'
import path                    from 'path'
import type { GetStaticProps } from 'next'
import React                   from 'react'
// import TrustingBrands          from '@components//homePage/TrustingBrands'
import { Head }                from '@components/Head/Head'
import BackgroundVideo         from '@components/homePage/BackgroundVideo'
import HomePageSection         from '@components/homePage/HomePageSection'
import { sectionsData }        from '@components/homePage/config'
import Layout                  from '@components/layout'
import { useMediaQuery }       from '@mui/material'
import loadTranslation         from '@utils/loadTranslation'
function Home({ brandsList }) {
  const isDesktop = useMediaQuery('(min-width:900px)')

  return (
    <div >
      <Head />
      {isDesktop && <BackgroundVideo />}
      <Layout>
        {sectionsData.map((section, index) => (
          <HomePageSection index={index} key={section.title} {...section} />
        ))}
        {/* <TrustingBrands brandsList={brandsList} /> */}
      </Layout>
    </div>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!)

  const logoList   = path.join(process.cwd(), '/public/medias/logo')
  const brandsList = fs.readdirSync(logoList)

  return {
    props: {
      brandsList,
      translation,
    },
  }
}
