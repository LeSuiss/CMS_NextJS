/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
// src/components/Switcher.tsx

import { useContext } from 'react';
import { rootContext } from '../pages/_app';

type LOCALES = 'en' | 'sr' | 'es' | 'pseudo'

function Switcher() {
  const { context, dispatchContext } = useContext(rootContext);
  return (
    <>
      {JSON.stringify(context)}

      <select
        value={context.selected}
        onChange={(evt) => dispatchContext({ payload: evt.target.value })}
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
