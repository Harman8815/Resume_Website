"use client";

import { useState } from "react";

type Project = {
  name: string;
  desc: string;
  btnLink: string;
};

type ProjectListProps = {
  projects: Project[];
};

function getTeaser(description: string) {
  return description.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? description;
}

function hasUsableProjectLink(href: string) {
  return href.startsWith("https://") && !href.includes("example.com");
}

export function ProjectList({ projects }: ProjectListProps) {
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <ul className="project-list">
      {projects.map((project, index) => {
        const isOpen = openProject === index;
        const panelId = `project-details-${index}`;

        return (
          <li className="project-row reveal" data-reveal key={`${project.name}-${index}`}>
            <div className="project-row-header">
              <span className="project-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="project-copy">
                <h3>{project.name}</h3>
                <p>{getTeaser(project.desc)}</p>
              </div>
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
              <p className="project-meta">Available project information</p>
              <p>{project.desc}</p>
              {hasUsableProjectLink(project.btnLink) ? (
                <a
                  className="project-panel-link"
                  href={project.btnLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  {project.btnLink.includes("github.com")
                    ? `View ${project.name} on GitHub`
                    : `Visit the ${project.name} website`}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              <p className="project-documentation-note">
                Architecture, technologies, and implementation notes are not
                included in the available project record.
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
