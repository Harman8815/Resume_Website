import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { ProjectList } from "../components/project-list";
import {
  interests,
  languages,
  softSkills,
  volunteerExperience,
} from "../data/additional";
import { codingAchievements, communityActivities } from "../data/achievements";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section
          className="hero page-shell"
          aria-labelledby="intro-title"
          id="top"
        >
          <p className="eyebrow">
            {profile.headline} · {profile.location}
          </p>
          <h1 id="intro-title">
            Building
            <br />
            thoughtful software
            <br />
            <span>for the web.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="text-link" href={`mailto:${profile.email}`}>
                Get in touch <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>
          </div>
          <div className="hero-index full-bleed-rule" aria-hidden="true">
            <span>{profile.name}</span>
            <span>Resume · {new Date().getFullYear()}</span>
          </div>
        </section>

        <section
          className="content-section page-shell full-bleed-rule"
          id="about"
        >
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2>Profile</h2>
          </div>
          <div className="section-content about-content reveal" data-reveal>
            <p>{profile.objective}</p>
            <div className="inline-links">
              <a href={profile.links.linkedIn} target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </section>

        <section
          className="content-section page-shell full-bleed-rule"
          id="experience"
        >
          <div className="section-heading">
            <span className="section-number">02</span>
            <h2>Experience</h2>
          </div>
          <div className="section-content reveal" data-reveal>
            <ul className="experience-list">
              {experience.map((entry) => (
                <li className="experience-entry" key={entry.organization}>
                  <div className="experience-heading">
                    <div>
                      <h3>
                        {entry.role}
                        {entry.employmentType
                          ? ` · ${entry.employmentType}`
                          : ""}
                      </h3>
                      <p>
                        {entry.organization}
                      </p>
                    </div>
                    <div className="experience-meta">
                      <span>{entry.dates}</span>
                      <span>{entry.location}</span>
                    </div>
                  </div>
                  <ul className="experience-highlights">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="content-section page-shell full-bleed-rule"
          id="education"
        >
          <div className="section-heading">
            <span className="section-number">03</span>
            <h2>Education</h2>
          </div>
          <div className="section-content reveal" data-reveal>
            <ul className="education-list">
              {education.map((item) => (
                <li className="education-row" key={item.institution}>
                  <div>
                    <h3>{item.institution}</h3>
                    <p>{item.qualification}</p>
                    <p>
                      {item.affiliation} · {item.location}
                    </p>
                  </div>
                  <div className="education-meta">
                    <span>{item.dates}</span>
                    <span>{item.result}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="content-section page-shell full-bleed-rule"
          id="skills"
        >
          <div className="section-heading">
            <span className="section-number">04</span>
            <h2>Technical skills</h2>
          </div>
          <div className="section-content reveal" data-reveal>
            <dl className="skill-list">
              {skills.map((group) => (
                <div className="skill-row" key={group.category}>
                  <dt>{group.category}</dt>
                  <dd>{group.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          className="content-section page-shell full-bleed-rule"
          id="projects"
        >
          <div className="section-heading">
            <span className="section-number">05</span>
            <h2>Selected projects</h2>
          </div>
          <div className="section-content reveal" data-reveal>
            <p className="section-intro">
              Projects and implementation details from the supplied resume.
            </p>
            <ProjectList projects={projects} />
          </div>
        </section>

        <section
          className="content-section page-shell full-bleed-rule"
          id="achievements"
        >
          <div className="section-heading">
            <span className="section-number">06</span>
            <h2>Achievements</h2>
          </div>
          <div className="section-content reveal" data-reveal>
            <ul className="profile-list">
              {codingAchievements.map((achievement) => (
                <li className="profile-row" key={achievement.platform}>
                  <h3 className="profile-name">
                    <a
                      href={achievement.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {achievement.platform}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  </h3>
                  <p>{achievement.result}</p>
                </li>
              ))}
            </ul>
            <div className="achievement-extras">
              <h3>Hackathons & open source</h3>
              <p>{communityActivities.join(" · ")}</p>
              <p className="data-note">
                Participation and contribution details are resume-provided.
              </p>
            </div>
            <Link className="text-link section-link" href="/achievements">
              More achievements <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section
          className="content-section page-shell full-bleed-rule"
          id="additional"
        >
          <div className="section-heading">
            <span className="section-number">07</span>
            <h2>Beyond work</h2>
          </div>
          <div className="section-content reveal" data-reveal>
            <ul className="volunteer-list">
              {volunteerExperience.map((entry) => (
                <li className="volunteer-entry" key={entry.organization}>
                  <div>
                    <h3>{entry.role} · {entry.organization}</h3>
                    <p>{entry.description}</p>
                  </div>
                  <span>{entry.dates}</span>
                </li>
              ))}
            </ul>
            <dl className="skill-list personal-details">
              <div className="skill-row">
                <dt>Languages</dt>
                <dd>
                  {languages
                    .map((language) => `${language.name} — ${language.proficiency}`)
                    .join(" · ")}
                </dd>
              </div>
              <div className="skill-row">
                <dt>Interests</dt>
                <dd>{interests.join(" · ")}</dd>
              </div>
              <div className="skill-row">
                <dt>Soft skills</dt>
                <dd>{softSkills.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          className="contact-section page-shell full-bleed-rule reveal"
          data-reveal
          id="contact"
        >
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Have a problem worth solving?</h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
          <a className="contact-phone" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
          <div className="contact-links">
            <a href={profile.links.linkedIn} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer page-shell">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <Link href="/#top">Back to top ↑</Link>
      </footer>
    </>
  );
}
