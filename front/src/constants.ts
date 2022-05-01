/* eslint-disable import/prefer-default-export */
import { t, defineMessage } from '@lingui/macro';
import { i18n } from '@lingui/core';

export const NAVIGATION_STRUCTURE = [
  {
    nav: 'Home',
    link: '/',
  },
  {
    nav: defineMessage({ message: 'Our Innovations' }),
    link: '/innovation',
  },
  {
    nav: defineMessage({ message: 'our products' }),
    link: '/contact/products',
  },
  {
    nav: defineMessage({ message: 'Contact' }),
    link: '/contact',
  },
];

export const LANGUAGES: { flag: string, name: string, locale: string }[] = [
  {
    flag: 'GB',
    name: 'EN',
    locale: 'en',
  },
  {
    flag: 'FR',
    name: 'FR',
    locale: 'fr',
  },
  {
    flag: 'DE',
    name: 'DE',
    locale: 'de',
  },
  {
    flag: 'IT',
    name: 'IT',
    locale: 'it',
  },
  {
    flag: 'ES',
    name: 'ES',
    locale: 'es',
  },
];
