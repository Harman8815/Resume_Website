import Link from "next/link";
import { SiteHeader } from "../components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell not-found" id="main-content" tabIndex={-1}>
        <p className="eyebrow">404 · Page not found</p>
        <h1>That page doesn&apos;t exist.</h1>
        <Link className="text-link" href="/">
          Return to the portfolio <span aria-hidden="true">↗</span>
        </Link>
      </main>
    </>
  );
}
