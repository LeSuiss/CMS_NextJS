import Logo from '../layout/Logo'
import NextHead from 'next/head'

interface Props {
  title?: string
  description?: string
  keywords?: string
  author?: string
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string
  ogImage?: any
}

export function Head({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogImage,
  ogDescription,
}: Props) {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="shortcut icon" href="/logoHead.png" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={ogUrl} /> */}

      {/* {ogImage && <meta property="og:image" content={ogImage} />} */}
      <meta name="robots" content="follow, index" />
    </NextHead>
  )
}

Head.defaultProps = {
  author: 'YOUR_NAME',
  description:
    'A highly opinionated and complete starter for Next.js projects ready to production. Includes Typescript, Styled Components, Prettier, ESLint, Husky, SEO, and more.',
  keywords:
    'next, starter, typescript, styled components, prettier, eslint, husky, seo',
  ogDescription:
    'A highly opinionated and complete starter for Next.js projects ready to production. Includes Typescript, Styled Components, Prettier, ESLint, Husky, SEO, and more.',
  ogImage: 'https://next-starter-ebon.vercel.app/images/og.png',
  ogTitle: 'Next Starter ⚡️: Ready to production',
  // ogUrl: 'https://next-starter-ebon.vercel.app/',
  title: 'Sapem, Les professionnels du levage',
}
