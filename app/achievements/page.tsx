import type { Metadata } from "next";
import Link from "next/link";
import certificateCatalog from "../../achievements/certificates.json";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Coding profiles, badges, and certificates listed in Harman's portfolio.",
  alternates: {
    canonical: "/achievements",
  },
  openGraph: {
    title: "Achievements | Harman Deep Singh",
    description: "Coding profiles, badges, and certificates listed in Harman's portfolio.",
    url: "/achievements",
    type: "website",
  },
};

const codingProfiles = [
  {
    name: "LeetCode",
    href: "https://leetcode.com/Harman_deep_singh/",
    details: ["Global rank 59,000", "Contest rank 4,000", "600+ questions", "15 badges"],
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/harman88157?hr_r=1",
    details: ["5-star Java coder", "200+ questions", "2 badges"],
  },
  {
    name: "GeeksforGeeks",
    href: "https://auth.geeksforgeeks.org/user/harman88157/practice",
    details: ["Institute rank 7", "320+ questions", "Coding score 1,000+"],
  },
  {
    name: "InterviewBit",
    href: "https://www.interviewbit.com/profile/harman-deep-singh_937/",
    details: ["Global rank 16,000", "250+ questions", "2 badges"],
  },
];

function certificateLabel(path: string) {
  const filename = path.split("/").at(-1)?.replace(/\.[^.]+$/, "") ?? "Certificate";
  if (/^[\da-f-]{36}$/i.test(filename)) {
    return "Additional certificate";
  }

  return filename
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

const certificateNames = certificateCatalog.images.map(certificateLabel);

export default function AchievementsPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell achievements-page" id="main-content" tabIndex={-1}>
        <p className="eyebrow">Portfolio archive</p>
        <h1 className="page-title">Achievements</h1>
        <p className="page-intro">
          Competitive programming profiles and certificate titles preserved
          from the existing portfolio.
        </p>

        <section
          className="archive-section reveal"
          data-reveal
          aria-labelledby="profiles-title"
        >
          <h2 id="profiles-title">Coding profiles</h2>
          <ul className="profile-list">
            {codingProfiles.map((profile) => (
              <li className="profile-row" key={profile.name}>
                <h3 className="profile-name">
                  <a href={profile.href} target="_blank" rel="noreferrer">
                    {profile.name} <span aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p>{profile.details.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="archive-section reveal"
          data-reveal
          aria-labelledby="certificates-title"
        >
          <h2 id="certificates-title">Certificates</h2>
          <ul className="certificate-list">
            {certificateNames.map((name, index) => (
              <li key={`${name}-${index}`}>{name}</li>
            ))}
          </ul>
          <p className="data-note">
            Certificate image files are referenced in the legacy data but were
            not included in this repository.
          </p>
        </section>
        <Link className="text-link back-link" href="/">
          ← Back to portfolio
        </Link>
      </main>
      <footer className="site-footer page-shell">
        <span>© {new Date().getFullYear()} Harman Deep Singh</span>
        <Link href="/">Home</Link>
      </footer>
    </>
  );
}
