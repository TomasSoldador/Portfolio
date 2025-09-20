'use client'


import React from 'react'
import Image from "next/image"

import { useReveal } from '@/hooks/useReveal'

const REVEAL = 'reveal opacity-0 translate-y-4 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform will-change-opacity motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none'
const withDelay = (ms: number) => `${REVEAL} [transition-delay:${ms}ms]`

const calculateYears = (start: Date) => {
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  const m = now.getMonth() - start.getMonth()
  if (m < 0 || (m === 0 && now.getDate() < start.getDate())) {
    years--
  }
  return years < 1 ? '<1' : years.toString()
}


const yearsExperience = calculateYears(new Date('2023-07-15'))
const projectsCount = process.env.NEXT_PUBLIC_PROJECTS_COUNT || '0'
const clientsCount = process.env.NEXT_PUBLIC_CLIENTS_COUNT || '0'

const stats = [
  { value: `${projectsCount}+`, label: 'Projects' },
  { value: `${clientsCount}+`, label: 'Clients' },
  { value: `${yearsExperience}+`, label: 'Years of experience' },
]

export default function AboutMe() {
  useReveal({ threshold: 0.25, rootMargin: '0px 0px -10% 0px' })

  return (
    <section id="about-me" className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
        {/* Top row: Name + two columns of copy */}
        <div className="grid items-start gap-10 grid-cols-1 md:grid-cols-[280px_1fr_1fr]">
          <h1 className={`${REVEAL} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100`}>Tomás</h1>
          <p className={`${withDelay(120)} text-sm sm:text-base md:text-lg leading-6 text-slate-700 dark:text-slate-300`}>Driven by curiosity, I am a software engineer.</p>
          <p className={`${withDelay(240)} text-sm sm:text-base md:text-lg leading-6 text-slate-700 dark:text-slate-300`}>With a passion for innovation, I thrive on challenges.</p>
        </div>

        <div className="mt-6 sm:ml-20 md:ml-40 lg:ml-72 grid grid-cols-3 gap-4 sm:gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className={REVEAL} style={{ transitionDelay: `${i * 100 + 200}ms` }}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none text-slate-900 dark:text-slate-100">
                <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                  {s.value}
                </span>
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm mt-1 text-slate-600 dark:text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Image grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Image
            alt="code"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop"
            width={1400}
            height={933}
            className="h-full w-full rounded-3xl object-cover lg:row-span-2"
          />
          <Image
            alt="people"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
            width={1400}
            height={933}
            className="h-full w-full rounded-3xl object-cover lg:row-span-2"
          />
          <div className="grid gap-6">
            <Image
              alt="desk"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
              width={1400}
              height={933}
              className="h-70 w-full rounded-3xl object-cover"
            />
            <Image
              alt="monitor"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
              width={1400}
              height={933}
              className="h-70 w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="mt-16 rounded-b-4xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 py-20 text-center">
          <h2 className={`${REVEAL} text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white`}>Let&apos;s Connect</h2>
          <a
            href="#cv"
            className={`${withDelay(120)} mt-6 sm:mt-8 inline-block rounded-full bg-black px-6 sm:px-8 md:px-9 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold text-white shadow hover:bg-slate-700 dark:hover:bg-slate-200 dark:hover:text-black`}
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  )
}
