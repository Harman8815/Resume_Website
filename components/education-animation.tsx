"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type EducationAnimationProps = {
  children: React.ReactNode;
};

export function EducationAnimation({ children }: EducationAnimationProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !listRef.current) {
      return;
    }

    const rows = listRef.current.querySelectorAll<HTMLElement>(".education-row");

    const ctx = gsap.context(() => {
      // Draw connecting line progressively
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
      rows.forEach((row, index) => {
        const marker = row.querySelector<HTMLElement>(
          ".education-marker",
        );
        const result = row.querySelector<HTMLElement>(
          ".education-result",
        );

        ScrollTrigger.create({
          trigger: row,
          start: "top 75%",
          onEnter: () => {
            row.classList.add("is-active");
            if (marker) {
              gsap.to(marker, {
                scale: 1,
                duration: 0.4,
                ease: "back.out(1.4)",
              });
            }
            if (result) {
              gsap.to(result, {
                color: "var(--accent)",
                duration: 0.3,
              });
            }
          },
          onLeave: () => {
            row.classList.remove("is-active");
          },
          onEnterBack: () => {
            row.classList.add("is-active");
            if (marker) {
              gsap.to(marker, {
                scale: 1,
                duration: 0.4,
                ease: "back.out(1.4)",
              });
            }
          },
          onLeaveBack: () => {
            row.classList.remove("is-active");
          },
        });
      });

      // Pre-set initial states
      rows.forEach((row) => {
        const marker = row.querySelector<HTMLElement>(".education-marker");
        if (marker) {
          gsap.set(marker, { scale: 0 });
        }
      });
    }, listRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={listRef} className="education-list">
      <div ref={lineRef} className="education-timeline-line" aria-hidden="true" />
      {children}
    </div>
  );
}