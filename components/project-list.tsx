"use client";

import { useState } from "react";
import type { Project } from "../data/projects";

type ProjectListProps = {
  projects: readonly Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <ul className="project-list">
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
                <ul className="project-technologies" aria-label="Technologies">
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
            <div className="project-panel" hidden={!isOpen} id={panelId}>
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
  );
}
