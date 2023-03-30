import { defineMessage } from '@lingui/macro'

export const NAVIGATION_STRUCTURE = [
  { nav: defineMessage({ message: 'Accueil' }), link: '/' },
  {
    nav: defineMessage({ message: 'Innovation' }),
    link: '/Innovation',
  },
  {
    nav: defineMessage({ message: 'Produits' }),
    link: '/Products',
  },
  {
    nav: defineMessage({ message: 'Notre Equipe' }),
    link: '/Team',
  },
  {
    nav: defineMessage({ message: 'Contact' }),
    link: '/Contact',
  },
]
