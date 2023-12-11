import './globals.css';
import type { Metadata } from 'next';
import { K2D } from 'next/font/google';

const k2d = K2D({ subsets: ['latin'], weight: '400', variable: '--font-k2d' })

export const metadata: Metadata = {
  title: 'HerAcademia',
  description: 'Powered by IEEE WIE ENETCom SAG 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${k2d.variable} font-k2d`}>
        {children}
      </body>
    </html>
  )
}
