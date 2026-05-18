import './globals.css';

export const metadata = {
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
    icon: '/favicon.ico',
    apple: '/favicon-180x180.png',
  },
  openGraph: {
    title: 'Tetőbox bérlés Dunaújváros',
    description:
      'Tetőbox, tetőcsomagtartó és kerékpárszállító bérlés Dunaújvárosban.',
    url: 'https://tetoboxdunaujvaros.hu',
    siteName: 'Tetőbox bérlés Dunaújváros',
    locale: 'hu_HU',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
