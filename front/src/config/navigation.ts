import { MessageDescriptor } from '@lingui/core';
import { SeoProps } from '../utils/SEO&Co/SeoHead';
import { msg } from '@lingui/macro';

export interface NavigationProps {
  nav: MessageDescriptor;
  link: string;
  seo: Omit<SeoProps, 'url'>;
}

export const NAVIGATION: NavigationProps[] = [
  {
    link: '/',
    nav: msg`Accueil`,
    seo: {
      image: '/',
      type: '',
      title: msg`SAPEM les professionnels du levage`,
      description: msg`Expert du levage depuis 40 ans. Nous accompagnons nos clients dans la construction de solution sur mesures et la resolution de problèmes complexes.',`,
    },
  },
  {
    link: '/Innovation',
    nav: msg`Innovation`,
    seo: {
      title: msg`Innovation`,
      description: msg`Innovation`,
      image: '/',
      type: '',
    },
  },
  {
    link: '/Products',
    nav: msg`Produits`,
    seo: {
      title: msg`Produits`,
      description: msg`Produits`,
      image: '/',
      type: '',
    },
  },
  {
    nav: msg`Equip`,
    link: '/Team',
    seo: {
      title: msg`Team`,
      description: msg`Team`,
      image: '/',
      type: '',
    },
  },
  {
    nav: msg`Contact`,
    link: '/Contact',
    seo: {
      title: msg`Contact`,
      description: msg`Contact`,
      image: '/',
      type: '',
    },
  },
  {
    nav: msg`FAQ`,
    link: '/FAQ',
    seo: {
      title: msg`FAQ`,
      description: msg`FAQ`,
      image: '/',
      type: '',
    },
  },
];
