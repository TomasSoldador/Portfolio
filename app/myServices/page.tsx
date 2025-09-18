'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

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
      <h3 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-4 max-w-xl text-lg leading-6 text-slate-700 dark:text-slate-300">{text}</p>
      <a
        href="/HireMe"
        className="mt-8 inline-block rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95"
      >
        HIRE ME
      </a>
    </div>
    <div>
      <img
        src={img}
        alt={title}
        className="w-full h-72 md:h-96 rounded-3xl object-cover shadow"
        loading="lazy"
      />
    </div>
  </div>
)

export default function ServicesPage() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        {/* Header */}
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
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