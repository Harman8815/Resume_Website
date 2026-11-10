"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SkillsAnimationProps = {
  children: React.ReactNode;
};

export function SkillsAnimation({ children }: SkillsAnimationProps) {
  const listRef = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !listRef.current) {
      return;
    }

    const rows = listRef.current.querySelectorAll<HTMLElement>(".skill-row");

    const ctx = gsap.context(() => {
      rows.forEach((row, index) => {
        const dt = row.querySelector<HTMLElement>("dt");
        const dd = row.querySelector<HTMLElement>("dd");

        ScrollTrigger.create({
          trigger: row,
          start: "top 80%",
          onEnter: () => {
            gsap.to(dt, {
              color: "var(--foreground)",
              duration: 0.3,
            });
            gsap.to(dd, {
              color: "var(--foreground)",
              opacity: 1,
              duration: 0.5,
              stagger: 0.05,
            });
            gsap.fromTo(
              row,
              { backgroundColor: "transparent" },
              {
                backgroundColor: "rgb(49 92 232 / 0.04)",
                duration: 0.4,
                ease: "power2.out",
              },
            );
          },
          onLeave: () => {
            gsap.to(dt, { color: "var(--foreground)", duration: 0.3 });
            gsap.to(dd, { color: "var(--muted)", duration: 0.3 });
            gsap.to(row, { backgroundColor: "transparent", duration: 0.3 });
          },
          onEnterBack: () => {
            gsap.to(dt, {
              color: "var(--foreground)",
              duration: 0.3,
            });
            gsap.to(dd, {
              color: "var(--foreground)",
              opacity: 1,
              duration: 0.5,
            });
          },
          onLeaveBack: () => {
            gsap.to(dt, { color: "var(--foreground)", duration: 0.3 });
            gsap.to(dd, { color: "var(--muted)", duration: 0.3 });
          },
        });

        // Pre-set
        gsap.set(dd, { opacity: 0.6 });
      });
    }, listRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <dl ref={listRef} className="skill-list">
      {children}
    </dl>
  );
}