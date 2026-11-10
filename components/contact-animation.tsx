"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../data/profile";

gsap.registerPlugin(ScrollTrigger);

export function ContactAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Typography expansion through letter spacing
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          {
            letterSpacing: "0.1em",
            opacity: 0.5,
          },
          {
            letterSpacing: "-0.08em",
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 20%",
              scrub: 1,
            },
          },
        );
      }


      // Footer divider draws as footer enters view
      if (dividerRef.current) {
        gsap.to(dividerRef.current, {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="contact-section page-shell full-bleed-rule reveal"
      data-reveal
      id="contact"
    >
      <p className="eyebrow">Have a project in mind?</p>
      <div className="contact-heading-block">
        <h2 ref={headingRef}>Have a problem worth solving?</h2>
      </div>
      <a
        className="contact-email"
        href={`mailto:${profile.email}`}
      >
        {profile.email} <span aria-hidden="true">↗</span>
      </a>
      <div className="contact-links">
        <a href={profile.links.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div ref={dividerRef} className="contact-divider" aria-hidden="true" />
    </section>
  );
}