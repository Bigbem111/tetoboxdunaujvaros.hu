import './globals.css'

export const metadata = {
  title: 'Tetőbox bérlés Dunaújváros',
  description: 'Tetőbox, tetőcsomagtartó és kerékpárszállító bérlés.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  )
}
