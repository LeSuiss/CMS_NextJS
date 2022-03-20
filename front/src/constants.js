import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';

const navigationStructure = [
  {
    nav: i18n._(/* i18n: nav Home */ t`Home`),
    link: '/',
  },
  {
    nav: i18n._(/* i18n: nav aboutus */ t`about us`),
    link: '/about',
  },
  {
    nav: i18n._(/* i18n: nav contact us */ t`contact us`),
    link: '/contact/tamère',
  },
];

export default navigationStructure;
