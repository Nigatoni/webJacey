import type { Metadata } from 'next'
import { Geist, Geist_Mono, Pinyon_Script, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const pinyonScript = Pinyon_Script({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-script" 
});
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'Jacey Han | Illustration Portfolio',
  description: 'Illustration portfolio of Jacey Han - specializing in semi-realism anime art',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${_geist.variable} ${_geistMono.variable} ${pinyonScript.variable} ${libreBaskerville.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
