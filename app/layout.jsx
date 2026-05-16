import './globals.css';

export const metadata = {
  title: 'Tetőbox24 | Tetőbox bérlés Dunaújváros',
  description:
    'Tetőbox bérlés Dunaújvárosban és környékén. Gyors foglalás, rugalmas átvétel, felszerelés segítséggel.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
