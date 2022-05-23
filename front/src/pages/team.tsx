import fs                                                                                       from 'fs'
import path                                                                                     from 'path'
import type { GetStaticProps }                                                                  from 'next'
import Image                                                                                    from 'next/image'
import React                                                                                    from 'react'
import TrustingBrands                                                                           from '@components//homePage/TrustingBrands'
import { Head }                                                                                 from '@components/Head/Head'
import BackgroundVideo                                                                          from '@components/homePage/BackgroundVideo'
import HomePageSection                                                                          from '@components/homePage/HomePageSection'
import { sectionsData }                                                                         from '@components/homePage/config'
import Layout                                                                                   from '@components/layout'
import { ProductCard }                                                                          from '@components/mui/ProductCard'
import { Card, CardActions, CardContent, CardHeader, Divider, Typography, useMediaQuery }       from '@mui/material'
import { fetchApi }                                                                             from '@utils/apiHandlers'
import loadTranslation                                                                          from '@utils/loadTranslation'
function Team({ employees }) {
  const isDesktop = useMediaQuery('(min-width:900px)')

  return (
    <div >
      <Layout>
        { JSON.stringify(employees,undefined,4)}
        {employees?.map(e=> <Card sx={{
      maxWidth: 345, margin: 1.5, position: 'relative',
    }}
    >
      <CardHeader
        avatar={(
<></>
          // (
          //   <Avatar sx={{ bgcolor: red[500], position: 'relative' }} aria-label="recipe">
          //     <Image alt="patented" src="/medias/logoARRIMAGE.jpg" layout="fill" />
          //   </Avatar>
          // )
        )}
        title={e.name}
        subheader={e.fonction}
        action={<div style={{position:'relative', marginTop:'4px', transform:'rotate(35deg)', width:'40px', height:'40px'}}>
        <Image src="/medias/products/label/patented.jpg" layout='fill' />
        </div>
        }
      />

      <Divider />
      {/* <Image src={productImageSrc} height="200px" width="386px" alt={`product${e.ImageAlt}`} layout="intrinsic" /> */}
      {/* <Divider /> */}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {e.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display:'grid', padding:'0 5px 10px 5px', gridTemplateColumns:'1fr auto'}}>
        <div>

    
    </div>
      </CardActions>
    </Card>)}
      </Layout>
    </div>
  )
}
export default Team

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!)

  const logoList   = path.join(process.cwd(), '/public/medias/logo')
  const brandsList = fs.readdirSync(logoList)
  // const employees = await fetchApi('/employees', ctx.locale).then(x=>x.data.map(y=>y.attributes))

  return {
    props: {
      brandsList,
      translation,
      // employees
    },
  }
}
