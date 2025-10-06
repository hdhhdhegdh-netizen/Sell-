import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { locales } from '../../../lib/i18n';

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((l) => l === locale);
  if (!isValidLocale) notFound();

  return children;
}