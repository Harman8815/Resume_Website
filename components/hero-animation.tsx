"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HeroAnimationProps = {
  children: React.ReactNode;
};

export function HeroAnimation({ children }: HeroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLSpanElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const cornerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const headingLines = containerRef.current?.querySelectorAll<HTMLElement>(
        ".hero-mask-line > span",
      );
      const divider = dividerRef.current;
      const bgText = bgTextRef.current;
      const heading = containerRef.current?.querySelector<HTMLElement>(
        ".hero-mask",
      );
      const bottom = containerRef.current?.querySelector<HTMLElement>(
        ".hero-bottom",
      );

      // Initial load: reveal heading through clipping mask (reverse - from bottom)
      if (headingLines) {
        gsap.fromTo(
          headingLines,
          { y: "100%", opacity: 0, skewY: 5 },
          {
            y: "0%",
            opacity: 1,
            skewY: 0,
            duration: 1.3,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)",
            stagger: 0.1,
            delay: 0.2,
          },
        );
      }

      // Background typography parallax (slower)
      if (bgText) {
        gsap.to(bgText, {
          y: "-50%",
          opacity: 0.15,
          duration: 2,
          ease: "power2.out",
          delay: 0.5,
        });
      }

      // Corner typography fade-in
      if (cornerRef.current) {
        const cornerSpans = cornerRef.current.querySelectorAll("span, a");
        gsap.fromTo(
          cornerSpans,
          { opacity: 0, x: 20 },
          {
            opacity: 0.6,
            x: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.8,
          },
        );
      }

      // Bottom divider draws across
      if (divider) {
        gsap.to(divider, {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.7,
        });
      }

      // Scroll parallax: heading and summary move at different rates
      if (bottom && heading) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (heading) {
              gsap.set(heading, {
                y: progress * 60,
                opacity: 1 - progress * 0.6,
                scale: 1 - progress * 0.02,
              });
            }
            if (bgText) {
              gsap.set(bgText, {
                y: -50 + progress * -40,
                opacity: 0.5 - progress * 0.4,
              });
            }
            if (bottom) {
              gsap.set(bottom, {
                y: progress * 40,
                opacity: 1 - progress * 0.4,
              });
            }
          },
        });
      }

      // Reverse animation on scroll up
      if (headingLines) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onLeave: () => {
            gsap.to(headingLines, {
              y: "-100%",
              opacity: 0,
              duration: 0.6,
              ease: "power2.in",
            });
          },
          onEnterBack: () => {
            gsap.to(headingLines, {
              y: "0%",
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            });
          },
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="hero">
      <span ref={bgTextRef} className="hero-bg-text" aria-hidden="true">
        Building
      </span>
      <div ref={cornerRef} className="hero-typo-corner">
        <span>Harman Deep Singh</span>
        <span>Full-stack Developer</span>
        <a
          href="https://harmandevexp.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="hero-corner-link"
        >
          harmandevexp.netlify.app <span aria-hidden="true">↗</span>
        </a>
      </div>
      {children}
      <div ref={dividerRef} className="hero-divider" aria-hidden="true" />
    </div>
  );
}