'use client'
import { PropsWithChildren, useEffect } from 'react'

export default function ArticlesLayout({
  children,
}: Readonly<PropsWithChildren>) {
  useEffect(() => {
    console.log('*** LAYOUT MOUNTED')
  }, [])
  return <>{children}</>
}
