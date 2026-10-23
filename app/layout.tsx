import type { Metadata } from "next";
import { ScrollReveal } from "../components/scroll-reveal";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Harman Deep Singh | Software Developer",
    template: "%s | Harman Deep Singh",
  },
  description:
    "Portfolio of Harman Deep Singh, featuring software projects, technical skills, education, and coding profiles.",
  metadataBase: new URL("https://harmanportfolio.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Harman Deep Singh | Software Developer",
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
