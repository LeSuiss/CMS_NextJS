import { MessageDescriptor } from '@lingui/core';
import { SeoProps } from '../utils/SEO&Co/SeoHead';
import { defineMessage } from '@lingui/macro';

interface NavigationProps {
  nav: MessageDescriptor;
  link: string;
  seo: Omit<SeoProps, 'url'>;
}

export const NAVIGATION: NavigationProps[] = [
  {
    link: '/',
    nav: defineMessage({ message: 'Accueil' }),
    seo: {
      image: '/',
      type: '',
      title: defineMessage({
        message: 'SAPEM les professionnels du levage',
      }),
      description: defineMessage({
        message:
          'Expert du levage depuis 40 ans. Nous accompagnons nos clients dans la construction de solution sur mesures et la resolution de problèmes complexes.',
      }),
    },
  },
  {
    link: '/Innovation',
    nav: defineMessage({ message: 'Innovation' }),
    seo: { title: '', description: '', image: '/', type: '' },
  },
  {
    link: '/Products',
    nav: defineMessage({ message: 'Produits' }),
    seo: { title: '', description: '', image: '/', type: '' },
  },
  {
    nav: defineMessage({ message: 'Equipe' }),
    link: '/Team',
    seo: { title: '', description: '', image: '/', type: '' },
  },
  {
    nav: defineMessage({ message: 'Contact' }),
    link: '/Contact',
    seo: { title: '', description: '', image: '/', type: '' },
  },
  {
    nav: defineMessage({ message: 'FAQ' }),
    link: '/FAQ',
    seo: { title: '', description: '', image: '/', type: '' },
  },
];
