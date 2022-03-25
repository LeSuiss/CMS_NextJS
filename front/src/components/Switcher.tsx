/* eslint-disable max-len */
/* eslint-disable no-eval */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
// src/components/Switcher.tsx

import { useContext } from 'react';
import { i18n } from '@lingui/core';
import loadTranslation from '@utils/loadTranslation';
import { useRouter } from 'next/router';
import { t } from '@lingui/macro';
import flags from '@assets/flags';
import Image from 'next/image';
import ReactFlagSelect from 'react-flags-select';
import { rootContext } from '../pages/_app';

function Switcher() {
  const router                       = useRouter();
  return (

    <ReactFlagSelect
      countries={['GB', 'FR', 'DE', 'IT']}
      selected={router.locale.toUpperCase()}
      customLabels={{
        GB: 'EN', FR: 'FR', DE: 'DE', IT: 'IT',
      }}
      placeholder="Select Language"
      onSelect={async (choice) => {
        const message = await loadTranslation(choice.toLowerCase());
        router.push(router.pathname, {}, { locale: choice });
        i18n.load(choice, message);
        i18n.activate(choice);
      }}
    />

  );
}

export default Switcher;
