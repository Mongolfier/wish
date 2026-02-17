import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import './layout.css'

export const metadata: Metadata = {
  title: 'wish',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <nav className="appNav">
            <Link href="/">Главная</Link>
            <Link href="/auth">Войти</Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
