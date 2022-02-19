import i18next from 'i18next';
import { NativeModules, Platform } from 'react-native';

import * as langs from './translations/index';

void i18next.init(
  {
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
    lng: Platform.OS === 'ios' ?
      'pt' :
      NativeModules.I18nManager.localeIdentifier.slice(0, 2),
    fallbackLng: Object.keys(langs),
    load: 'currentOnly',
    resources: {
      'en': {
        translation: langs.en,
      },
      'pt': {
        translation: langs.pt,
      },
    },
    nsSeparator: '::',
  },
);

export const i18n = i18next;

export default i18next;
