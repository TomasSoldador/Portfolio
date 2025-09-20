'use client'

import Image from "next/image";

import { useReveal } from '@/hooks/useReveal'

const REVEAL = 'reveal opacity-0 translate-y-4 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform will-change-opacity motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none'
const withDelay = (ms: number) => `${REVEAL} [transition-delay:${ms}ms]`

export default function Hero() {
  useReveal({ threshold: 0.25, rootMargin: '0px 0px -10% 0px' })

  return (
    <div className="bg-[#ECECEC] dark:bg-slate-950 flex flex-col items-center justify-center text-center pt-20 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-40 lg:pb-56">
      <Image
        src="https://github.com/TomasSoldador.png"
        width={240}
        height={240}
        alt="Profile avatar"
        className={`${withDelay(100)} w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full object-cover bg-white mt-10 sm:mt-14 md:mt-20`}
      />
      <h1 className={`${withDelay(300)} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold w-11/12 sm:w-10/12 md:w-9/12 lg:w-6/12 mt-8 sm:mt-12 md:mt-16 text-slate-900 dark:text-slate-100 px-4 sm:px-6`}>
        Hello, I'm Tomás, Software
      </h1>
      <p className={`${withDelay(500)} text-base sm:text-lg text-gray-600 dark:text-slate-300 mt-6 sm:mt-10 md:mt-16 max-w-2xl px-4 sm:px-6`}>
        Crafting elegant solutions with code, one project at a time.
      </p>
    </div>
  );
}
