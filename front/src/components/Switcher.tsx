/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-eval */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
// src/components/Switcher.tsx

import { i18n } from '@lingui/core';
import loadTranslation from '@utils/loadTranslation';
import { useRouter } from 'next/router';
import ReactFlagSelect from 'react-flags-select';
import nextConfig from 'next.config';
import { LANGUAGES } from '../constants';

function Switcher() {
  const router                       = useRouter();
  const labels = {};
  LANGUAGES
    .filter((lang) =>  nextConfig.i18n.locales.includes(lang.locale))
    .forEach((lang) => Object.assign(labels, { [lang.flag]: lang.locale }));

  const countries = LANGUAGES
    .filter((lang) => Object.keys(labels).includes(lang.flag))
    .map((x) => x.flag);

  const selected = LANGUAGES
    .filter((lang) => router.locale === lang.locale)
    .map((x) => x.flag)[0];

  const handleSelect = async (choice) => {
    const convertedValue = LANGUAGES.filter((x) => x.flag === choice)[0].locale;
    const message = await loadTranslation(convertedValue);
    router.push(router.pathname, {}, { locale: convertedValue });
    i18n.load(convertedValue, message);
    i18n.activate(convertedValue);
  };

  return (

    <ReactFlagSelect
      countries={countries}
      selected={selected}
      customLabels={labels}
      onSelect={handleSelect}
    />

  );
}

export default Switcher;
