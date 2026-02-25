import '@/styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'Pueblo de Oro - Affordable Housing in Philippines | Pag-IBIG Financing',
  description: 'Premium residential properties in La Aldea Fernandina II. Townhouse from ₱2.4M, Single Attached from ₱3.6M. Flexible Pag-IBIG financing available.',
  keywords: 'affordable housing Philippines, Pag-IBIG financing, townhouse, single attached, La Aldea, Pampanga',
  authors: [{ name: 'Pueblo de Oro' }],
  creator: 'Pueblo de Oro Development',
  publisher: 'Pueblo de Oro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://pueblodeoro.com',
    siteName: 'Pueblo de Oro',
    title: 'Pueblo de Oro - Your Dream Home Awaits',
    description: 'Premium residential properties with flexible Pag-IBIG financing',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1570129477492-45c003d96d4f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Pueblo de Oro Residential Community'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pueblo de Oro - Affordable Housing Philippines',
    description: 'Premium residential properties with Pag-IBIG financing from ₱2.4M',
    images: ['https://images.unsplash.com/photo-1570129477492-45c003d96d4f?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pueblodeoro.com',
  },
  verification: {
    google: 'google-site-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0c1a12" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f6f8f6" media="(prefers-color-scheme: light)" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
