import './globals.css'
import { Providers } from '@/components/Providers'

export const metadata = {
  title: 'CasinoPlatform - Online Casino & Sports Betting',
  description: 'Online Casino & Sports Betting Platform',
}

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display text-primary-text">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

