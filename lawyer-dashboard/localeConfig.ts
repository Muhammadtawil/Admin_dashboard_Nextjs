// localeConfig.js

import { lb } from 'date-fns/locale';
import ar from 'date-fns/locale/ar';
import en from 'date-fns/locale/en-US';

export const arLocale = {
  code: 'ar',
  formatDistance: ar,
  formatLong: ar,
  formatRelative: ar,
  localize: ar,
};

export const enLocale = {
  code: 'en',
  formatDistance: en,
  formatLong: en,
  formatRelative: en,
  localize: en,
};
