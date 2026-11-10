"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AchievementsAnimationProps = {
  children: React.ReactNode;
};

export function AchievementsAnimation({ children }: AchievementsAnimationProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !listRef.current) {
      return;
    }

    const rows = listRef.current.querySelectorAll<HTMLElement>(".profile-row");

    const ctx = gsap.context(() => {
      rows.forEach((row, index) => {
        const heading = row.querySelector<HTMLElement>(".profile-name");
        const text = row.querySelector<HTMLElement>("p");
        const progressBar = row.querySelector<HTMLElement>(
          ".achievement-progress",
        );

        ScrollTrigger.create({
          trigger: row,
          start: "top 80%",
          onEnter: () => {
            row.classList.add("is-active");
            gsap.to(heading, {
              color: "var(--foreground)",
              duration: 0.3,
            });
            gsap.to(text, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            });
            if (progressBar) {
              gsap.to(progressBar, {
                width: "100%",
                duration: 0.8,
                ease: "power2.out",
              });
            }
          },
          onLeave: () => {
            row.classList.remove("is-active");
          },
          onEnterBack: () => {
            row.classList.add("is-active");
            gsap.to(heading, {
              color: "var(--foreground)",
              duration: 0.3,
            });
          },
          onLeaveBack: () => {
            row.classList.remove("is-active");
          },
        });

        // Pre-set
        gsap.set(text, { opacity: 0.6, y: 10 });
      });
    }, listRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <ul ref={listRef} className="profile-list">
      {children}
    </ul>
  );
}