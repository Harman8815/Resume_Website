"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FooterAnimationProps = {
  children: React.ReactNode;
};

export function FooterAnimation({ children }: FooterAnimationProps) {
  const footerRef = useRef<HTMLElement>(null);
  const decoration1Ref = useRef<HTMLDivElement>(null);
  const decoration2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !footerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Parallax depth: footer elements move at different scroll speeds
      if (decoration1Ref.current) {
        gsap.to(decoration1Ref.current, {
          y: -30,
          rotation: 45,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (decoration2Ref.current) {
        gsap.to(decoration2Ref.current, {
          y: 30,
          rotation: -30,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, footerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <footer ref={footerRef} className="site-footer page-shell footer-parallax">
      <div
        ref={decoration1Ref}
        className="footer-decoration one"
        aria-hidden="true"
      />
      <div
        ref={decoration2Ref}
        className="footer-decoration two"
        aria-hidden="true"
      />
      {children}
    </footer>
  );
}