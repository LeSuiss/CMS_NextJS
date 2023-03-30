import { globby } from 'globby'
import pkg from '@next/env'
import prettier from 'prettier'
import { writeFileSync } from 'fs'

async function generate() {

  const siteURL = pkg.loadEnvConfig('./').combinedEnv.WEBSITE_URL
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    './src/pages/*.js',
    './src/pages/*.ts',
    './src/pages/*.tsx',
    './src/data/**/*.mdx',
    './src/!data/*.mdx',
    './src/!pages/_*.js',
    './src/!pages/_*.ts',
    './src/!pages/_*.tsx',
    './src/!pages/api',
    './src/!pages/404.js',
    './src/!pages/404.tsx',
  ])
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
                  <loc>${`${siteURL}/`}</loc>
              </url>
        ${pages
      .map((p) => p.split('/')[3].split('.')[0])
      .filter((p) => !p.startsWith('_') && !p.startsWith('index'))
      .map((page) => {
        return `
              <url>
                  <loc>${`${siteURL}/${page}`}</loc>
              </url>
            `
      })
      .join('')}
     
    </urlset>
    `

  const robotTxt = `User - agent: *
Allow: /
Sitemap: ${siteURL}/sitemap.xml`


  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })
  console.log(robotTxt,)

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted)
  writeFileSync('public/robot.txt', robotTxt)
}

generate()


// if needed put this in pages/sitemap.xml.js 

// import React from 'react';

// const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

// const createSitemap = (posts) => `<? xml version = "1.0" encoding = "UTF-8" ?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//         ${posts
//     .map(({ id }) => {
//       return `
//                 <url>
//                     <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
//                 </url>
//             `;
//     })
//     .join('')}
//     </urlset>
//     `;

// class Sitemap extends React.Component {
//   static async getInitialProps({ res }) {
//     const request = await fetch(EXTERNAL_DATA_URL);
//     const posts = await request.json();

//     res.setHeader('Content-Type', 'text/xml');
//     res.write(createSitemap(posts));
//     res.end();
//   }
// }

// export default Sitemap;

