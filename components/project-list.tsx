"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

type ProjectListProps = {
  projects: readonly Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !listRef.current) {
      return;
    }

    const headers = listRef.current.querySelectorAll<HTMLElement>(
      ".project-row-header",
    );

    const ctx = gsap.context(() => {
      // Progress indicator tracks current project
      headers.forEach((header, index) => {
        ScrollTrigger.create({
          trigger: header,
          start: "top 60%",
          onEnter: () => {
            const progress = ((index + 1) / headers.length) * 100;
            gsap.to(progressRef.current, {
              width: `${progress}%`,
              duration: 0.4,
              ease: "power2.out",
            });
          },
        });
      });

      // Subtle scale transition for project rows
      headers.forEach((header) => {
        const row = header.closest<HTMLElement>(".project-row");
        if (!row) return;

        ScrollTrigger.create({
          trigger: header,
          start: "top 70%",
          onEnter: () => {
            gsap.to(row, {
              scale: 1.005,
              duration: 0.4,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            gsap.to(row, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          },
          onEnterBack: () => {
            gsap.to(row, {
              scale: 1.005,
              duration: 0.4,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(row, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          },
        });
      });
    }, listRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="project-list-wrapper">
      <div ref={progressRef} className="project-progress" aria-hidden="true" />
      <ul ref={listRef} className="project-list">
        {projects.map((project, index) => {
          const isOpen = openProject === index;
          const panelId = `project-details-${index}`;

          return (
            <li
              className="project-row reveal"
              data-reveal
              key={project.name}
            >
              <div className="project-row-header">
                <span className="project-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="project-copy">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul
                    className="project-technologies"
                    aria-label="Technologies"
                  >
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
                <span className="project-date">{project.date}</span>
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="project-trigger"
                  onClick={() => setOpenProject(isOpen ? null : index)}
                  type="button"
                >
                  {isOpen ? "Close details" : "Explore case study"}
                  <span className="project-chevron" aria-hidden="true">
                    ↗
                  </span>
                </button>
              </div>
              <div
                className="project-panel"
                hidden={!isOpen}
                id={panelId}
              >
                <p className="project-meta">Project highlights</p>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {project.reportedOutcome ? (
                  <p className="project-outcome">{project.reportedOutcome}</p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}