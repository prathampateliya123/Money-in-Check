import Script from 'next/script';

export const metadata = {
  title: 'Money in Check — A novel by Óscar Pérez',
  description:
    'Not a finance textbook. Not just a novel. A story that teaches you how money really works. Money in Check, a novel by Óscar Pérez.',
  openGraph: {
    type: 'website',
    title: 'Money in Check — A novel by Óscar Pérez',
    description:
      'Not a finance textbook. Not just a novel. A story that teaches you how money really works.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money in Check — A novel by Óscar Pérez',
    description:
      'Not a finance textbook. Not just a novel. A story that teaches you how money really works.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  themeColor: '#e9e9e9',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Original site stylesheet */}
        <link rel="stylesheet" href="/assets/index-DkOBDRn4.css" />

        {/* LCP + critical fonts */}
        <link
          rel="preload"
          href="/img/horse.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/LiuJianMaoCao-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PPEditorialOld-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PPEditorialOld-Ultralight.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PPEditorialOld-UltralightItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </head>
      <body>
        {/* Mount point for original site engine */}
        <div id="app" suppressHydrationWarning />
        {children}

        {/* Privacy analytics (local copy of Umami) */}
        <Script
          src="/vendor/umami.js"
          data-website-id="03bd2cb9-14e7-42fe-a420-7b79665bf2da"
          strategy="afterInteractive"
        />

        {/* Original app: templates + i18n + motion engine */}
        <Script
          src="/assets/index-BYAKky6a.js"
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
