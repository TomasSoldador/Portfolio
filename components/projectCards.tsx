import React from "react";
import projects from "@/data/projects.json";
import Image from "next/image";

export default function ProjectCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="flex justify-between items-end mb-10 md:mb-14">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6 text-slate-900 dark:text-slate-100">
              My
            </h2>
            <h2 className="text-5xl md:text-6xl pb-2 font-extrabold tracking-tight leading-none bg-gradient-to-r from-fuchsia-600 to-orange-400 bg-clip-text text-transparent">
              My
            </h2>
          </div>
          <p className="mt-4 text-center md:text-left text-black/70 dark:text-slate-400 max-w-2xl">
            Explore my selected projects, showcasing expertise and passion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group block rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 md:p-8 bg-black/5 dark:bg-white/5">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-black/60 dark:text-slate-400">{p.tag}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
