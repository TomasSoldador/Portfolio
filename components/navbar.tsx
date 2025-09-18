'use client'

import Link from 'next/link'
import { useEffect, useState, useMemo } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when resizing to desktop and on route change
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false) // lg breakpoint
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    // lock body scroll when menu is open (mobile only)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    // close menu when path changes
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (!pathname) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  const linkBase = 'text-[16px] px-1 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500'
  const linkHover = 'hover:text-slate-900 dark:hover:text-slate-100'

  const navItem = (href: string, label: string) => {
    const active = isActive(href)
    const activeCls = active ? 'text-slate-900 dark:text-white underline decoration-pink-400 underline-offset-4' : ''
    return (
      <Link href={href} aria-current={active ? 'page' : undefined} className={`${linkBase} ${linkHover} ${activeCls}`}>
        {label}
      </Link>
    )
  }

  const toggle = () => setOpen(v => !v)
  const closeOnEsc = (e: React.KeyboardEvent<HTMLDivElement>) => { if (e.key === 'Escape') setOpen(false) }

  return (
    <>
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:bg-pink-600 focus:px-3 focus:py-2 focus:text-white">Skip to content</a>

      <header className="supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-slate-900/80 bg-white dark:bg-slate-900 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4 text-slate-900 dark:text-slate-100">
          {/* Brand + desktop nav */}
          <div className="flex items-center gap-6 md:gap-10 lg:gap-16 min-w-0">
            <span className="text-xl sm:text-2xl xl:text-3xl font-bold select-none truncate">Tomás Portfolio</span>
            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary">
              {navItem('/', 'Home')}
              {navItem('/myServices', 'My Services')}
              {navItem('/about', 'About')}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/HireMe"
              className="text-[16px] bg-[#ff9e4f] text-white rounded-full px-6 md:px-8 lg:px-10 py-3 h-12 hover:bg-[#ff8a2f] transition font-semibold dark:bg-[#ff8a2f] dark:hover:bg-[#ff9e4f] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={toggle}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-slate-300 dark:ring-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
          >
            {/* Icon */}
            <svg
              className={`h-6 w-6 motion-safe:transition-transform ${open ? 'rotate-90' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu - use max-height transition for broader browser support */}
        <div
          id="mobile-menu"
          onKeyDown={closeOnEsc}
          aria-hidden={!open}
          className={`${open ? 'max-h-[70vh]' : 'max-h-0'} overflow-hidden transition-[max-height] duration-300 lg:hidden`}
        >
          <div className="px-4 sm:px-6 lg:px-8 pb-4">
            <nav className="flex flex-col gap-1 py-3" aria-label="Mobile Primary">
              {navItem('/', 'Home')}
              {navItem('/myServices', 'My Services')}
              {navItem('/about', 'About')}
            </nav>
            <Link
              href="/HireMe"
              className="mb-3 inline-flex w-full items-center justify-center rounded-full bg-[#ff9e4f] text-white px-6 py-3 font-semibold hover:bg-[#ff8a2f] transition dark:bg-[#ff8a2f] dark:hover:bg-[#ff9e4f] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
