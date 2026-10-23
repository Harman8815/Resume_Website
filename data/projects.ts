export type Project = {
  name: string;
  date: string;
  technologies: readonly string[];
  description: string;
  highlights: readonly string[];
  reportedOutcome?: string;
};

export const projects: readonly Project[] = [
  {
    name: "Chaos Tracker",
    date: "Jan 2026",
    technologies: ["Next.js", "Django"],
    description: "A productivity platform for real-time tracking and analytics.",
    highlights: [
      "Built modular features for tasks, time tracking, goals, and activity logs.",
      "Implemented real-time synchronization with WebSockets and dashboards with charts and timelines.",
      "Integrated AI analytics for productivity scoring and behavioral insights.",
    ],
  },
  {
    name: "Real-Time Chat Application",
    date: "Apr 2025",
    technologies: ["React", "Node.js", "WebSockets"],
    description: "A low-latency messaging and collaboration platform.",
    highlights: [
      "Developed real-time messaging with WebSockets and optimized event handling.",
      "Implemented presence tracking, typing indicators, and live updates.",
      "Designed the frontend with state management for concurrent users.",
    ],
  },
  {
    name: "AgroPredict AI",
    date: "Mar 2024",
    technologies: ["Python", "Node.js", "MongoDB", "Machine Learning"],
    description: "An agricultural platform for crop prediction and disease detection.",
    highlights: [
      "Trained a CNN model for plant disease classification.",
      "Integrated machine learning with Node.js APIs and MongoDB for predictions.",
      "Built an interface to deliver actionable insights to farmers.",
    ],
    reportedOutcome:
      "The resume reports 85% accuracy for plant disease classification; this figure has not been independently verified.",
  },
];
