/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
// src/components/Switcher.tsx

import { useContext } from 'react';
import { i18n } from '@lingui/core';
import loadTranslation from '@utils/loadTranslation';
import { rootContext } from '../pages/_app';

function Switcher() {
  const { context, dispatchContext } = useContext(rootContext);
  return (
    <>
      <p>{JSON.stringify(context)}</p>
      <p>
        swithcer
      </p>

      <select
        value={context.selected}
        onChange={async (evt) => {
          const choice = evt.target.value;
          const message = await loadTranslation(choice);
          dispatchContext({ payload: { selected: choice, message } });
        }}
      >
        {Object.keys(context).filter((key) => key !== 'selected').map((locale) => (
          <option value={locale} key={locale}>
            {context[locale]}
          </option>
        ))}
      </select>
    </>
  );
}

export default Switcher;
