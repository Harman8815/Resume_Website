import Link from "next/link";
import { profile } from "../data/profile";

const navigation = [
  { href: "/#about", label: "About", vibrantClass: "vibrant-link-1" },
  { href: "/#skills", label: "Skills", vibrantClass: "vibrant-link-2" },
  { href: "/#achievements", label: "Achievements", vibrantClass: "vibrant-link-3" },
  { href: "/#projects", label: "Projects", vibrantClass: "vibrant-link-4" },
  { href: "/#education", label: "Education", vibrantClass: "vibrant-link-5" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Link
          className="wordmark vibrant-link-6"
          href="/"
          aria-label={`${profile.name}, home`}
        >
          {profile.name}
        </Link>
        <nav className="primary-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={item.vibrantClass}>
              {item.label}
            </Link>
          ))}
          <Link
            className="navigation-contact vibrant-btn-2"
            href="/#contact"
          >
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>
    </>
  );
}
