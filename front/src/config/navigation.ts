import { I18n, MessageDescriptor } from '@lingui/core';

import { SeoProps } from '../utils/SEO&Co/SeoHead';
import { msg } from '@lingui/macro';
import { t } from '@lingui/macro';

export interface NavigationProps {
  nav: MessageDescriptor;
  link: string;
  seo: Omit<SeoProps, 'url'>;
}

export const getNavigationStructure = (i18n: I18n): any[] => [
  {
    link: '/',
    nav: t(i18n)`Accueil`,
    seo: {
      image: '/',
      type: '',
      title: t(i18n)`SAPEM les professionnels du levage`,
      description: t(
        i18n
      )`Expert du levage depuis 40 ans. Nous accompagnons nos clients dans la construction de solution sur mesures et la resolution de problèmes complexes.',`,
    },
  },
  {
    link: '/Innovation',
    nav: t(i18n)`Innovation`,
    seo: {
      title: t(i18n)`Innovation`,
      description: t(i18n)`Innovation`,
      image: '/',
      type: '',
    },
  },
  {
    link: '/Products',
    nav: t(i18n)`Produits`,
    seo: {
      title: t(i18n)`Produits`,
      description: t(i18n)`Produits`,
      image: '/',
      type: '',
    },
  },
  {
    nav: t(i18n)`Equip`,
    link: '/Team',
    seo: {
      title: t(i18n)`Team`,
      description: t(i18n)`Team`,
      image: '/',
      type: '',
    },
  },
  {
    nav: t(i18n)`Contact`,
    link: '/Contact',
    seo: {
      title: t(i18n)`Contact`,
      description: t(i18n)`Contact`,
      image: '/',
      type: '',
    },
  },
  {
    nav: t(i18n)`FAQ`,
    link: '/FAQ',
    seo: {
      title: t(i18n)`FAQ`,
      description: t(i18n)`FAQ`,
      image: '/',
      type: '',
    },
  },
];
