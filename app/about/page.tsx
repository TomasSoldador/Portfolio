'use client'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn, FaGlobe } from 'react-icons/fa'
import Image from "next/image"

const calculateYears = (start: Date) => {
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  const m = now.getMonth() - start.getMonth()
  if (m < 0 || (m === 0 && now.getDate() < start.getDate())) {
    years--
  }
  return years < 1 ? '<1' : years.toString()
}

const yearsExperience = calculateYears(new Date('2024-03-01'))
const projectsCount = process.env.NEXT_PUBLIC_PROJECTS_COUNT || '0'
const clientsCount = process.env.NEXT_PUBLIC_CLIENTS_COUNT || '0'

const socialLinks = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '#',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
  github: process.env.NEXT_PUBLIC_GITHUB_URL || '#',
  website: process.env.NEXT_PUBLIC_WEBSITE_URL || '#',
}

const Ribbon = () => (
  <div className="my-12 -mx-6 md:-mx-12">
    <div className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 p-[1px]">
      <div className="relative -rotate-2 bg-black px-6 py-4 text-white md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8 text-lg font-semibold">
          <span>Build</span>
          <span>Innovate</span>
          <span>Build</span>
          <span>Innovate</span>
          <span>Build</span>
        </div>
      </div>
    </div>
  </div>
)

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="text-5xl font-extrabold leading-none">
      <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">{value}</span>
    </div>
    <p className="text-center text-sm text-slate-600 dark:text-slate-400">{label}</p>
  </div>
)

export default function AboutPage() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        {/* HERO: title on left, about text + social on right */}
        <div className="grid items-start gap-6 md:gap-10 grid-cols-1 md:grid-cols-[1fr_520px] lg:grid-cols-[1fr_600px]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hi, I am
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">Tomás Soldador</span>
          </h1>
          <div className="flex flex-col gap-5">
            <p className="text-sm sm:text-base leading-7 text-slate-700 dark:text-slate-300">
              I&apos;m a full‑stack developer specialized in React Native, Next.js, Node.js, TypeScript, Python, and IoT integrations with ESP32. I build secure, scalable apps and systems that connect mobile, backend, and hardware.
            </p>
            <div className="flex items-center gap-3">
              <a className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white" href={socialLinks.github}><FaGithub size={14} /></a>
              <a className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white" href={socialLinks.linkedin}><FaLinkedinIn size={14} /></a>
              <a className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white" href={socialLinks.instagram}><FaInstagram size={14} /></a>
            </div>
          </div>
        </div>

        {/* IMAGES: two tall images + right column split in two */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Image
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop"
            alt="work1"
            width={1400}
            height={900}
            className="w-full rounded-3xl object-cover h-56 sm:h-72 md:h-full lg:row-span-2"
          />
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
            alt="work2"
            width={1400}
            height={900}
            className="w-full rounded-3xl object-cover h-56 sm:h-72 md:h-full lg:row-span-2"
          />
          <div className="grid gap-4 sm:gap-6">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
              alt="work3"
              width={1400}
              height={900}
              className="h-40 sm:h-56 md:h-64 w-full rounded-3xl object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1522199670076-2852f80289c7?q=80&w=1400&auto=format&fit=crop"
              alt="work4"
              width={1400}
              height={900}
              className="h-40 sm:h-56 md:h-64 w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-3">
          <Stat value={`${yearsExperience}+`} label="Years of Experience in Software Development" />
          <Stat value={`${projectsCount}+`} label="Projects Completed" />
          <Stat value={`${clientsCount}+`} label="Clients & Collaborations" />
        </div>
      </section>

      <Ribbon />

      {/* EDUCATION + EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-6 pb-14 md:px-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 bg-clip-text text-4xl font-extrabold text-transparent">Education</h2>
            <ul className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
              <li className="flex items-center justify-between py-5">
                <div>
                  <p className="font-semibold">EPAD — Escola Profissional de Artes, Tecnologias e Desporto</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Professional Course in Systems Management and Programming (3 years)</p>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">2019–2022</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 bg-clip-text text-4xl font-extrabold text-transparent">Work Experience</h2>
            <ul className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
              <li className="flex items-center justify-between py-5">
                <div>
                  <p className="font-semibold">Visionants</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Full‑stack Developer</p>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">Sep 2024–Present</span>
              </li>
              <li className="flex items-center justify-between py-5">
                <div>
                  <p className="font-semibold">ASP Solucions (Italy)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Full‑stack Developer — 3 months onsite (Italy) + 3 months remote (Portugal→Italy)</p>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">Mar–Sep 2024</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Companies */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-extrabold"><span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">Companies</span> I&apos;ve Worked with</h2>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 rounded-2xl bg-slate-100 dark:bg-slate-800 p-6 sm:p-8">
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 py-4 text-sm text-slate-600 dark:text-slate-300 shadow-sm">Visionants</div>
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 py-4 text-sm text-slate-600 dark:text-slate-300 shadow-sm">ASP Solucions (Italy)</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <Image
            src="https://github.com/TomasSoldador.png"
            alt="portrait"
            width={600}
            height={600}
            className="w-full h-120 sm:h-80 md:h-[420px] lg:h-[460px] rounded-2xl object-cover"
          />
          <div className="rounded-2xl bg-[#171717] p-6 sm:p-8 text-white shadow-xl">
            <h3 className="text-2xl font-extrabold">
              <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">Follow me</span>
            </h3>
            <p className="mt-3 text-sm text-slate-300 dark:text-slate-400">
              I&apos;m Tomás Soldador, a full‑stack developer passionate about building apps, IoT systems, and exploring AI integrations.
            </p>
            <hr className="my-5 border-slate-700" />
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <a href={socialLinks.instagram} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white"><FaInstagram /></a>
              <a href={socialLinks.linkedin} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white"><FaLinkedinIn /></a>
              <a href={socialLinks.website} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white"><FaGlobe /></a>
              <a href={socialLinks.github} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white"><FaGithub /></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
