import type { I18n } from '@lingui/core';
import { en, fr } from 'make-plural/plurals';

function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    en: { plurals: en },
    fr: { plurals: fr },
  });
}
export default initTranslation;
