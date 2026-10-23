"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      root.classList.remove("reveal-ready");
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    let observer: IntersectionObserver;

    try {
      observer = new IntersectionObserver(
        (entries, currentObserver) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              currentObserver.unobserve(entry.target);
            }
          }
        },
        {
          rootMargin: "0px 0px -56px 0px",
          threshold: 0.05,
        },
      );

      for (const element of elements) {
        observer.observe(element);
      }

      root.classList.add("reveal-ready");
    } catch (error) {
      root.classList.remove("reveal-ready");
      console.error("Scroll reveal could not be initialized.", error);
      return;
    }

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, [pathname]);

  return null;
}
