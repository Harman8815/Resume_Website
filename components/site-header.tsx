import Link from "next/link";

const navigation = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Harman Deep Singh, home">
          Harman Deep Singh
        </Link>
        <nav className="primary-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="navigation-contact" href="/#contact">
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>
    </>
  );
}
