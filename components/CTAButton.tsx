import Link from 'next/link'
import { ReactNode } from 'react'
import clsx from 'classnames'

export default function CTAButton({ href='/contact', children='Get a Fast Quote', className }: { href?: string, children?: ReactNode, className?: string }) {
  return (
    <Link href={href} className={clsx(
      'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold',
      'btn-cta shadow-accent',
      'transition duration-200 hover:-translate-y-0.5 hover:shadow-accentLg active:translate-y-0',
      className)}>
      {children}
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
    </Link>
  )
}
