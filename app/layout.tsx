import type { Metadata } from "next";
import { ScrollReveal } from "../components/scroll-reveal";
import { SmoothScroll } from "../components/smooth-scroll";
import { profile } from "../data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Software Developer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Harman Deep Singh, featuring software projects, technical skills, education, and coding profiles.",
  metadataBase: new URL("https://harmanportfolio.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} | Software Developer`,
    description:
      "Software projects, technical skills, education, and coding profiles.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <ScrollReveal />
      </body>
    </html>
  );
}