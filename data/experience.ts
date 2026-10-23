export type ExperienceEntry = {
  organization: string;
  role: string;
  employmentType?: string;
  location: string;
  dates: string;
  highlights: readonly string[];
};

export const experience: readonly ExperienceEntry[] = [
  {
    organization: "Whatbytes",
    role: "Frontend Developer",
    employmentType: "Frontend Intern",
    location: "Bangalore, India",
    dates: "Aug 2025",
    highlights: [
      "Improved production-grade web applications by implementing new features, resolving critical bugs, reducing bundle size, and enhancing frontend performance.",
      "Integrated and optimized APIs using state management and SWR, reducing redundant network calls by 60% and improving data-fetching performance.",
      "Refactored large-scale components with DRY principles and modular architecture to improve maintainability and scalability.",
      "Developed image-broker platform modules, including navigation flows, payout systems, and Stripe payment integrations with API handling.",
      "Built WebSocket-based real-time features, including a video conferencing module and live analytics dashboard.",
    ],
  },
  {
    organization: "ABV-IIITM Gwalior",
    role: "Research Intern",
    location: "Gwalior, India",
    dates: "Aug 2024",
    highlights: [
      "Applied machine learning techniques in cybersecurity to detect and classify malicious domains.",
      "Trained and evaluated models to identify Domain Generation Algorithm (DGA)-based threats using existing research methodologies.",
      "Developed a real-time web application for DGA-domain detection using trained models.",
    ],
  },
];
