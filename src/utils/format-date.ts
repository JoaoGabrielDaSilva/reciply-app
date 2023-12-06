import { format } from 'date-fns';
import * as Locales from 'date-fns/locale';
import i18next from 'i18next';

export function formatDate(date: Date, locale?: string) {
  return format(date, 'P', { locale: Locales[locale || i18next.language] });
}
