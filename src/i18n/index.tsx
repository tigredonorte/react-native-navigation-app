import i18next from 'i18next';
import { NativeModules, Platform } from 'react-native';

import lang_pt from './pt-br.lang';
import lang_en from './en.lang';

void i18next.init(
  {
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
    lng: Platform.OS === 'ios' ?
      'pt' :
      NativeModules.I18nManager.localeIdentifier.slice(0, 2),
    fallbackLng: [ 'en', 'pt' ],
    load: 'currentOnly',
    resources: {
      'en': {
        translation: lang_en,
      },
      'pt': {
        translation: lang_pt,
      },
    },
    nsSeparator: '::',
  },
);

export const i18n = i18next;

export default i18next;
