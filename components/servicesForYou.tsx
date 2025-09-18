import Image from "next/image";
export default function ServicesForYou() {
  return (
    <section className="dark:bg-black dark:text-white mb-16">
      <div className="container mx-auto px-6 md:px-20 lg:px-56">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="mt-40">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">Services</h2>
            </div>
            <div className="flex items-center ml-80 mt-5 gap-2">
              <span className=" w-20 h-0.5 bg-black dark:bg-white"></span>
              <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100">For</h3>
            </div>
            <div className="mt-5">
              <span className="block text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
                You.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/HireMe"
              className="inline-flex items-center justify-center rounded-full px-8 md:px-20 h-12 md:h-16 text-base md:text-lg font-semibold text-black dark:text-white bg-gradient-to-r from-fuchsia-600 to-orange-400 hover:scale-105 transition"
            >
              Hire Me
            </a>
            <a
              href="/myServices"
              className="inline-flex items-center justify-center rounded-full px-8 md:px-20 h-12 md:h-16 text-sm md:text-base font-semibold border border-black/20 dark:border-white/20 text-slate-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              See More
            </a>
          </div>
        </div>

        {/* List */}
        <div id="services" className="divide-y divide-black/20 dark:divide-white/20 border-t border-b border-black/20 dark:border-white/20">
          {[
            { title: "Full‑Stack Development", href: "/myServices#fullstack", img: "/imagePcMyServices.png" },
            { title: "IoT & ESP32 Integration", href: "/myServices#iot", img: "/imageCircuitMyServices.png" },
            { title: "APIs & Backend Systems", href: "/myServices#api", img: "/imageAPIMyServices.png" },
            { title: "Mobile Applications", href: "/myServices#mobile", img: "/imageMobileMyServices.png" },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative isolate overflow-visible flex items-center justify-between py-8 md:py-10 rounded-lg px-6 transition bg-transparent hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-orange-400"
            >
              <span className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                {item.title}
              </span>
              <Image
                src={item.img}
                alt={item.title}
                width={288}
                height={176}
                className="pointer-events-none absolute right-32 hidden lg:block top-1/2 -translate-y-1/2 w-56 md:w-72 h-36 md:h-44 object-cover rounded-xl shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition"
              />
              <svg
                className="w-7 h-7 md:w-10 md:h-10 stroke-current text-slate-900 dark:text-slate-100 hover:translate-x-1 hover:-translate-y-1 transition"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
