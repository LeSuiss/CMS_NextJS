import { defineMessage } from '@lingui/macro'

export const NAVIGATION_STRUCTURE = [
  { nav: 'Home', link: '/' },
  {
    nav: defineMessage({ message: 'Innovation' }),
    link: '/innovation',
  },
  {
    nav: defineMessage({ message: 'Products' }),
    link: '/products',
  },
  {
    nav: defineMessage({ message: 'Our team' }),
    link: '/team',
  },
  {
    nav: defineMessage({ message: 'Contact' }),
    link: '/contact',
  },
]

export const LANGUAGES: { name: string; locale: string }[] = [
  {
    name: 'EN',
    locale: 'en',
  },
  {
    name: 'FR',
    locale: 'fr',
  },
]
