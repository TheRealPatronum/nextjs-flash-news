import { Nav } from '@/app/components/Nav/Nav'
import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs flash news',
  description: 'Get the latest flash news',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex p-8`}>
        <Nav />
        <div className="px-8 mt-16">{children}</div>
      </body>
    </html>
  )
}
