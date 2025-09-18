'use client'

import React, { useState } from 'react'

const faqs = [
  {
    q: 'What kind of projects do you specialise in?',
    a: 'End‑to‑end web and mobile apps. I build React Native (Expo) apps for iOS/Android, Next.js websites, and Node/Express APIs with PostgreSQL/Prisma and Supabase.'
  },
  {
    q: 'Do you work with IoT and hardware?',
    a: 'Yes. I integrate ESP32 devices over MQTT (HiveMQ/Mosquitto), secure token workflows (HMAC/JWT), and real‑time control for use cases like door access and smart lighting.'
  },
  {
    q: 'What is your core tech stack?',
    a: 'React, React Native (Expo), TypeScript, Next.js, Node.js/Express, PostgreSQL/Prisma, Supabase, Docker, MQTT, and CI/CD (Vercel, EAS, Fastlane/TestFlight).'
  },
  {
    q: 'How do you handle security and data privacy?',
    a: 'I follow OWASP and GDPR best practices, enforce HTTPS/TLS, use rate‑limiting and Helmet, apply scoped tokens, and review auth flows (JWT refresh, short‑lived session tokens).'
  },
  {
    q: 'What does your delivery process look like?',
    a: 'Kickoff → scoped roadmap → iterations in weekly sprints. You get GitHub access, regular demos, and a staging environment. I ship to TestFlight/Play Internal and Vercel.'
  },
  {
    q: 'Do you provide testing and performance optimisation?',
    a: 'Yes. Unit and integration tests, basic E2E where needed, profiling for app start time and bundle size, Lighthouse targets on web, and crash/error monitoring.'
  },
  {
    q: 'How do you price your work?',
    a: 'Fixed‑scope or hourly, depending on uncertainty and speed needed. We start with a short discovery call and a written proposal with milestones.'
  },
  {
    q: 'Where are you based and what is your availability?',
    a: 'Lisbon time (UTC+1, Europe/Lisbon). Remote‑first. I work with clients in Portugal and abroad and adapt to overlapping hours.'
  },
  {
    q: 'Do you offer maintenance after launch?',
    a: 'Yes. Optional monthly maintenance that covers monitoring, security updates, minor improvements, and store submissions when needed.'
  },
  {
    q: 'How do we get started?',
    a: 'Send me a message with your goals and constraints. I will respond with next steps and propose a lean MVP path.'
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faqs" className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm px-6 py-12 md:px-12">
        <div className="grid items-start gap-10 grid-cols-1 md:grid-cols-[340px_1fr]">
          {/* Left */}
          <div className="flex flex-col items-start gap-5 mt-12">
            <h2 className="text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-fuchsia-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">FAQ&apos;s</span>
            </h2>
            <p className="text-lg text-black/70 dark:text-slate-400 mb-5">Answers to common questions.</p>
            <a
              href="/HireMe"
              className="rounded-full px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-orange-400 shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              Contact Me
            </a>
          </div>

          {/* Right */}
          <div className="p-2">
            {faqs.map((item, idx) => {
              const open = openIndex === idx
              return (
                <div key={idx}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => setOpenIndex(open ? null : idx)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{item.q}</span>
                    <svg
                      className={`h-12 w-12 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                    </svg>
                  </button>

                  <div
                    id={`faq-panel-${idx}`}
                    aria-hidden={!open}
                    className={`${open ? 'block' : 'hidden'}`}
                  >
                    <div className="pb-5 pr-8 text-slate-700 dark:text-slate-300">
                      {item.a}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
