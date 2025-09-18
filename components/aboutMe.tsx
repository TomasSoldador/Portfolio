'use client'


import React from 'react'

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
  return (
    <section id="about-me" className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
        {/* Top row: Name + two columns of copy */}
        <div className="grid items-start gap-10 grid-cols-1 md:grid-cols-[280px_1fr_1fr]">
          <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">Tomás</h1>
          <p className="text-lg leading-6 text-slate-700 dark:text-slate-300">Driven by curiosity, I am a software engineer.</p>
          <p className="text-lg leading-6 text-slate-700 dark:text-slate-300">With a passion for innovation, I thrive on challenges.</p>
        </div>

        <div className="mt-6 ml-72 grid grid-cols-3 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-extrabold leading-none text-slate-900 dark:text-slate-100">
                <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                  {s.value}
                </span>
              </div>
              <div className="text-xs mt-1 text-slate-600 dark:text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Image grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <img
            alt="code"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop"
            className="h-full w-full rounded-3xl object-cover lg:row-span-2"
          />
          <img
            alt="people"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
            className="h-full w-full rounded-3xl object-cover lg:row-span-2"
          />
          <div className="grid gap-6">
            <img
              alt="desk"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
              className="h-70 w-full rounded-3xl object-cover"
            />
            <img
              alt="monitor"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
              className="h-70 w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="mt-16 rounded-b-4xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 py-20 text-center">
          <h2 className="text-8xl font-extrabold text-white">Let's Connect</h2>
          <a
            href="#cv"
            className="mt-8 inline-block rounded-full bg-black px-9 py-4 text-lg font-semibold text-white shadow hover:bg-slate-700 dark:hover:bg-slate-200 dark:hover:text-black"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  )
}
