import Link from "next/link";
import projectCatalog from "../data.json";
import { SiteHeader } from "../components/site-header";
import { ProjectList } from "../components/project-list";

const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Web development",
    items: ["React", "Node.js", "MERN", "Bootstrap", "WordPress"],
  },
  {
    category: "Data",
    items: ["MySQL"],
  },
  {
    category: "Tools",
    items: ["GitHub"],
  },
];

const profiles = [
  {
    name: "LeetCode",
    href: "https://leetcode.com/Harman_deep_singh/",
    details: ["Global rank 59,000", "Contest rank 4,000", "600+ solved", "15 badges"],
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/harman88157?hr_r=1",
    details: ["5-star Java coder", "200+ solved", "2 badges"],
  },
  {
    name: "GeeksforGeeks",
    href: "https://auth.geeksforgeeks.org/user/harman88157/practice",
    details: ["Institute rank 7", "320+ solved", "Coding score 1,000+"],
  },
  {
    name: "InterviewBit",
    href: "https://www.interviewbit.com/profile/harman-deep-singh_937/",
    details: ["Global rank 16,000", "250+ solved", "2 badges"],
  },
  {
    name: "CodeChef",
    href: "",
    details: ["Global rank 80,000", "Country rank 75,000", "50 solved"],
  },
];

const education = [
  { institution: "RGPV", qualification: "B.Tech (Computer Science)", dates: "2021–2025" },
  { institution: "CBSE", qualification: "Class 12 — PCM", dates: "2019–2020" },
  { institution: "ICSE", qualification: "Class 10", dates: "2017–2018" },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="hero page-shell" aria-labelledby="intro-title" id="top">
          <p className="eyebrow">Software engineer · India</p>
          <h1 id="intro-title">
            Building
            <br />
            thoughtful software
            <br />
            <span>for the web.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-summary">
              I&apos;m Harman Deep Singh, a computer science graduate with a
              foundation in Java and a growing focus on full-stack web
              development.
            </p>
            <a className="text-link" href="mailto:harman88157@gmail.com">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>PORTFOLIO</span>
            <span>01 — 06</span>
          </div>
        </section>

        <section className="content-section page-shell" id="about">
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2>About</h2>
          </div>
          <div className="section-content about-content reveal" data-reveal>
            <p>
              My work spans Java software, web development, and competitive
              programming. I&apos;m building on that foundation through
              full-stack projects, with a focus on practical features and
              maintainable code.
            </p>
            <a
              className="text-link"
              href="https://github.com/Harman8815"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="content-section page-shell" id="skills">
          <div className="section-heading">
            <span className="section-number">02</span>
            <h2>Skills</h2>
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

        <section className="content-section page-shell" id="achievements">
          <div className="section-heading">
            <span className="section-number">03</span>
            <h2>Coding profiles</h2>
          </div>
          <div className="section-content reveal" data-reveal>
            <ul className="profile-list">
              {profiles.map((profile) => (
                <li className="profile-row" key={profile.name}>
                  <h3 className="profile-name">
                    {profile.href ? (
                      <a href={profile.href} target="_blank" rel="noreferrer">
                        {profile.name} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span>{profile.name}</span>
                    )}
                  </h3>
                  <p>{profile.details.join(" · ")}</p>
                </li>
              ))}
            </ul>
            <Link className="text-link section-link" href="/achievements">
              More achievements <span aria-hidden="true">↗</span>
            </Link>
            <p className="data-note">
              Platform figures are historical snapshots from the existing
              portfolio and may have changed.
            </p>
          </div>
        </section>

        <section className="content-section page-shell" id="projects">
          <div className="section-heading">
            <span className="section-number">04</span>
            <h2>Projects</h2>
          </div>
          <div className="section-content reveal" data-reveal>
            <p className="section-intro">
              Selected work from the existing project archive. Open a project
              for its recorded summary and available link.
            </p>
            <ProjectList projects={projectCatalog.projects} />
          </div>
        </section>

        <section className="content-section page-shell" id="education">
          <div className="section-heading">
            <span className="section-number">05</span>
            <h2>Education</h2>
          </div>
          <div className="section-content reveal" data-reveal>
            <ul className="education-list">
              {education.map((item) => (
                <li className="education-row" key={item.institution}>
                  <div>
                    <h3>{item.institution}</h3>
                    <p>{item.qualification}</p>
                  </div>
                  <span>{item.dates}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="contact-section page-shell reveal"
          data-reveal
          id="contact"
        >
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Have a problem worth solving?</h2>
          <a className="contact-email" href="mailto:harman88157@gmail.com">
            harman88157@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/harman-deep-singh-5a3b3823b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/Harman8815"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer page-shell">
        <span>© {new Date().getFullYear()} Harman Deep Singh</span>
        <Link href="/#top">
          Back to top ↑
        </Link>
      </footer>
    </>
  );
}
