'use client'

import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

import { useReveal } from '@/hooks/useReveal'

const REVEAL = 'reveal opacity-0 translate-y-4 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform will-change-opacity motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none'
const withDelay = (ms: number) => `${REVEAL} [transition-delay:${ms}ms]`

export default function Footer() {
  useReveal({ threshold: 0.2, rootMargin: '0px 0px -10% 0px' })

  const year = new Date().getFullYear()

  const socialLink = (
    href: string,
    label: string,
    Icon: React.ComponentType<{ size?: number }>
  ) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pink-400 text-pink-500 hover:bg-pink-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 dark:border-pink-400/50 dark:hover:bg-pink-500/10"
    >
      <Icon size={18} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </a>
  )

  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Top area: brand, nav, socials */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className={`${REVEAL} text-lg sm:text-xl md:text-2xl font-bold`}>Tomás Portfolio</h3>
            <p className={`${withDelay(120)} mt-2 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400`}>
              © {year} Designed by Tomás Soldador
            </p>
          </div>

          {/* Nav */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] font-medium text-slate-700 dark:text-slate-300 md:justify-center"
          >
            <Link href="/" className={`${withDelay(0)} hover:text-slate-900 dark:hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded px-1 py-1`}>
              Home
            </Link>
            <Link href="/myServices" className={`${withDelay(100)} hover:text-slate-900 dark:hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded px-1 py-1`}>
              My Services
            </Link>
            <Link href="/about" className={`${withDelay(200)} hover:text-slate-900 dark:hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded px-1 py-1`}>
              About
            </Link>
            <Link href="/HireMe" className={`${withDelay(300)} hover:text-slate-900 dark:hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded px-1 py-1`}>
              Contact
            </Link>
          </nav>

          {/* Socials + back to top */}
          <div className="flex flex-col items-center justify-center gap-4 md:items-end">
            <div className={`${REVEAL} flex gap-3`}>
              {socialLink('https://github.com/zgravityy', 'GitHub', FaGithub)}
              {socialLink('https://instagram.com/teu_instagram', 'Instagram', FaInstagram)}
              {socialLink('https://linkedin.com/in/teu_linkedin', 'LinkedIn', FaLinkedin)}
            </div>
            <a
              href="#top"
              className={`${withDelay(200)} text-xs sm:text-sm text-slate-600 underline underline-offset-4 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 dark:text-slate-400 dark:hover:text-slate-100 rounded px-1 py-1`}
            >
              Back to top
            </a>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6 text-center">
          <p className={`${REVEAL} text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-400`}>
            Built with Next.js · Optimized for mobile, tablet and desktop
          </p>
        </div>
      </div>
    </footer>
  )
}
