import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Online Taxi Landing Page',
  description: 'A modern taxi booking landing page built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>
          {`@import url("https://fonts.googleapis.com/css?family=Sora:700,600,400");`}
        </style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 