import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';
import { Providers } from '@/providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Modern Landing Page - Next Generation Web Solutions',
    template: '%s | Modern Landing Page'
  },
  description: 'Transform your business with our cutting-edge web solutions. Built with modern technologies for exceptional performance and user experience.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Modern Web', 'PandaCSS', 'Ark UI'],
  authors: [{ name: 'Modern Landing Page Team' }],
  creator: 'Modern Landing Page',
  publisher: 'Modern Landing Page',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://modern-landing-page.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: 'Modern Landing Page - Next Generation Web Solutions',
    description: 'Transform your business with our cutting-edge web solutions.',
    url: 'https://modern-landing-page.com',
    siteName: 'Modern Landing Page',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern Landing Page Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Landing Page - Next Generation Web Solutions',
    description: 'Transform your business with our cutting-edge web solutions.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  
  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}