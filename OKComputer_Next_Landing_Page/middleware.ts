import createMiddleware from 'next-intl/middleware';
import { locales } from './lib/i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always',
});

export const config = {
  matcher: [
    '/',
    '/(ar|en)/:path*',
    '/((?!_next|_vercel|.*\..*).*)',
  ],
};