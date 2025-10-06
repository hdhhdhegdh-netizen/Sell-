import type { Metadata } from 'next';
import type { Locale } from './i18n';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  locale: Locale;
  path?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  locale,
  path = '',
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://modern-landing-page.com';
  const url = `${siteUrl}${locale === 'en' ? '' : `/${locale}`}${path}`;
  
  const defaultKeywords = [
    'Next.js',
    'React',
    'TypeScript',
    'Modern Web',
    'PandaCSS',
    'Ark UI',
    'Web Development',
    'Frontend',
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: 'Modern Landing Page Team' }],
    creator: 'Modern Landing Page',
    publisher: 'Modern Landing Page',
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages: {
        'en': `${siteUrl}${path}`,
        'ar': `${siteUrl}/ar${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Modern Landing Page',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
    verification: {
      google: 'google-site-verification-code',
    },
  };
}

export const defaultMetadata: Metadata = {
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