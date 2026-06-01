import './globals.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.tetoboxdunaujvaros.hu'),
  title: 'Tetőbox bérlés Dunaújváros | Tetőbox, tetőcsomagtartó, kerékpárszállító',
  description:
    'Tetőbox bérlés Dunaújvárosban kedvező áron. Tetőcsomagtartó és kerékpárszállító bérlés, segítség a felszerelésben, gyors foglalás.',
  keywords: [
    'tetőbox bérlés Dunaújváros',
    'tetőbox kölcsönzés Dunaújváros',
    'tetőcsomagtartó bérlés',
    'kerékpárszállító bérlés',
    'tetőbox Dunaújváros',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Tetőbox bérlés Dunaújváros',
    description:
      'Tetőbox, tetőcsomagtartó és kerékpárszállító bérlés Dunaújvárosban.',
    url: 'https://www.tetoboxdunaujvaros.hu',
    siteName: 'Tetőbox bérlés Dunaújváros',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: '/tetobox-logo.png',
        width: 1024,
        height: 1024,
        alt: 'Tetőbox bérlés Dunaújváros logó',
      },
    ],
  },
};

export const viewport = {
  themeColor: '#0f172a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18171418169"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18171418169');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
