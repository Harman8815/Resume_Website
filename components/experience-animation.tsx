"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ExperienceAnimationProps = {
  children: React.ReactNode;
};

export function ExperienceAnimation({ children }: ExperienceAnimationProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !listRef.current) {
      return;
    }

    const entries = listRef.current.querySelectorAll<HTMLElement>(
      ".experience-entry",
    );

    const ctx = gsap.context(() => {
      // Draw timeline progressively
      if (lineRef.current) {
        gsap.to(lineRef.current, {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
          },
        });
      }

      // Activate markers sequentially
      entries.forEach((entry, index) => {
        const marker = entry.querySelector(".experience-marker");
        const heading = entry.querySelector(".experience-heading h3");
        const achievements = entry.querySelectorAll(".experience-highlights li");

        ScrollTrigger.create({
          trigger: entry,
          start: "top 75%",
          onEnter: () => {
            entry.classList.add("is-active");
            gsap.to(marker, {
              scale: 1,
              duration: 0.4,
              ease: "back.out(1.4)",
            });
            gsap.to(heading, {
              color: "var(--foreground)",
              duration: 0.3,
            });
            gsap.to(achievements, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            entry.classList.remove("is-active");
          },
          onEnterBack: () => {
            entry.classList.add("is-active");
            gsap.to(marker, {
              scale: 1,
              duration: 0.4,
              ease: "back.out(1.4)",
            });
          },
          onLeaveBack: () => {
            entry.classList.remove("is-active");
          },
        });
      });

      // Pre-set achievements
      entries.forEach((entry) => {
        const achievements = entry.querySelectorAll(".experience-highlights li");
        gsap.set(achievements, { opacity: 0.4, y: 10 });
      });
    }, listRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={timelineRef} className="experience-list">
      <div ref={lineRef} className="experience-timeline-line" aria-hidden="true" />
      {children}
    </div>
  );
}