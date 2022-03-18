import type { I18n } from '@lingui/core';
import { en, es, sr } from 'make-plural/plurals';

function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    en: { plurals: en },
    sr: { plurals: sr },
    es: { plurals: es },
    pseudo: { plurals: en },
  });
}
export default initTranslation;
