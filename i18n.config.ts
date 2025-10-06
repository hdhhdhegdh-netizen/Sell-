import { Pathnames } from 'next-intl/navigation';
import { locales } from './lib/i18n';

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'always';