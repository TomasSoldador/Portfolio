// hooks/useReveal.ts
import { useEffect } from "react"

export function useReveal(options?: IntersectionObserverInit) {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Respeita preferências do utilizador
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const els = document.querySelectorAll<HTMLElement>(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add("opacity-100", "translate-y-0")
            el.classList.remove("opacity-0", "translate-y-4")
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px",
        ...options,
      }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [options])
}