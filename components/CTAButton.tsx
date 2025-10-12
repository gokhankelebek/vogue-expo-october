'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import clsx from 'classnames'

export default function CTAButton({ href='/contact', children='Get a Fast Quote', className }: { href?: string, children?: ReactNode, className?: string }) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link href={href} className={clsx('inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium shadow-soft transition hover:opacity-90',
      isActive ? 'bg-brand-accent text-black' : 'bg-brand-accent text-black', className)}>
      {children}
    </Link>
  )
}
