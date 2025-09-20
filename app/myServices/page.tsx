'use client'

import React from 'react'
import Image from "next/image"
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useReveal } from '@/hooks/useReveal'

// Base animation classes to evitar repetição
const REVEAL = 'reveal opacity-0 translate-y-4 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform will-change-opacity motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none'
const withDelay = (ms: number) => `${REVEAL} [transition-delay:${ms}ms]`

const Section = ({
  title,
  text,
  img,
  reverse,
  id,
}: {
  title: string
  text: string
  img: string
  reverse?: boolean
  id?: string
}) => (
  <div id={id} className={`grid items-center gap-10 py-16 md:grid-cols-2 ${reverse ? 'md:[&>div:first-child]:order-2' : ''}`}>
    <div>
      <h3 className={`${REVEAL} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100`}>{title}</h3>
      <p className={`${withDelay(120)} mt-2 sm:mt-3 md:mt-4 max-w-xl text-sm sm:text-base md:text-lg leading-6 text-slate-700 dark:text-slate-300`}>{text}</p>
      <a
        href="/HireMe"
        className={`${withDelay(220)} mt-4 sm:mt-6 md:mt-8 inline-block rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-semibold text-white shadow hover:opacity-95`}
      >
        HIRE ME
      </a>
    </div>
    <div>
      <Image
        src={img}
        alt={title}
        width={800}
        height={400}
        className={`${withDelay(320)} w-full h-40 sm:h-56 md:h-72 lg:h-96 rounded-2xl md:rounded-3xl object-cover shadow`}
      />
    </div>
  </div>
)

export default function ServicesPage() {
  useReveal({ threshold: 0.25, rootMargin: '0px 0px -10% 0px' })

  return (
    <main className="w-full">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        {/* Header */}
        <h1 className={`${REVEAL} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100`}>
          My <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">Services</span>
        </h1>

        {/* Full‑Stack Development */}
        <Section
          id="fullstack"
          title="Full‑Stack Development"
          text="I build secure and scalable applications using React Native, Next.js, Node.js, TypeScript, and Python. From backend APIs to mobile apps, I deliver complete solutions."
          img="/imagePcMyServices.png"
        />

        {/* IoT & ESP32 Integration */}
        <Section
          id="iot"
          title="IoT & ESP32 Integration"
          text="I connect software with hardware, creating IoT systems using ESP32, MQTT, and secure token flows. Ideal for access control, automation, and real‑time monitoring."
          img="/imageCircuitMyServices.png"
          reverse
        />

        {/* APIs & Backend Systems */}
        <Section
          id="api"
          title="APIs & Backend Systems"
          text="I design and implement backend architectures with Node.js, Express, and PostgreSQL. I focus on performance, security, and clear API documentation."
          img="/imageAPIMyServices.png"
        />

        {/* Mobile Applications */}
        <Section
          id="mobile"
          title="Mobile Applications"
          text="I develop high‑quality mobile apps with React Native (Expo), delivering smooth experiences for both iOS and Android with modern UI/UX."
          img="/imageMobileMyServices.png"
          reverse
        />
      </section>
      <Footer />
    </main>
  )
}