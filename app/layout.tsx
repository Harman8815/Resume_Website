import type { Metadata } from "next";
import { ScrollReveal } from "../components/scroll-reveal";
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
      <body>{children}</body>
      <ScrollReveal />
    </html>
  );
}
