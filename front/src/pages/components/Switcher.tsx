// src/components/Switcher.tsx

import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import { t } from '@lingui/macro'
import { rootContext } from '../_app'
type LOCALES = 'en' | 'sr' | 'es' | 'pseudo'

export function Switcher() {
  const {context, dispatchContext} =  useContext(rootContext)
  return (
<>
      {JSON.stringify(context)}

    <select
      value={context.selected}
      onChange={(evt) => dispatchContext({payload: evt.target.value})}
    >
      {Object.keys(context).filter(key=>key!=='selected').map((locale) => {
        return (
          <option value={locale} key={locale}>
            {context[locale]}
          </option>
        )
      })}
    </select>
        </>
  )
}