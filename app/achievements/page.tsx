import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/site-header";
import { codingAchievements, communityActivities } from "../../data/achievements";
import { profile } from "../../data/profile";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    `Competitive programming and community achievements from ${profile.name}'s resume.`,
  alternates: {
    canonical: "/achievements",
  },
  openGraph: {
    title: `Achievements | ${profile.name}`,
    description:
      `Competitive programming results and community participation provided in the resume.`,
    url: "/achievements",
    type: "website",
  },
};

export default function AchievementsPage() {
  return (
    <>
      <SiteHeader />
      <main
        className="page-shell achievements-page"
        id="main-content"
        tabIndex={-1}
      >
        <p className="eyebrow vibrant-link-1">Resume · selected results</p>
        <h1 className="page-title">Achievements</h1>
        <p className="page-intro">
          Competitive programming results and community participation provided
          in the resume.
        </p>

        <section
          className="archive-section reveal"
          data-reveal
          aria-labelledby="coding-title"
        >
          <h2 id="coding-title">Competitive programming</h2>
          <ul className="profile-list">
            {codingAchievements.map((achievement) => (
              <li className="profile-row" key={achievement.platform}>
                <h3 className="profile-name">
                  <a
                    href={achievement.href}
                    target="_blank"
                    rel="noreferrer"
                    className="vibrant-link-1"
                  >
                    {achievement.platform}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </h3>
                <p>{achievement.result}</p>
              </li>
            ))}
          </ul>
          <p className="data-note">
            Rankings and counts are resume-provided snapshots and are not live
            statistics.
          </p>
        </section>

        <section
          className="archive-section reveal"
          data-reveal
          aria-labelledby="community-title"
        >
          <h2 id="community-title">Hackathons & open source</h2>
          <ul className="community-list">
            {communityActivities.map((activity) => (
              <li key={activity} className="vibrant-link-2">
                {activity}
              </li>
            ))}
          </ul>
          <p className="data-note">
            The resume notes contribution and team-based problem solving.
          </p>
        </section>

        <Link className="back-link vibrant-btn-3" href="/">
          ← Back to portfolio
        </Link>
      </main>
      <footer className="site-footer page-shell">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <Link href="/" className="vibrant-link-4">
          Home
        </Link>
        <a
          href="https://harmandevexp.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="portfolio-ref"
        >
          Portfolio <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </>
  );
}