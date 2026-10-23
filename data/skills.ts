export type SkillGroup = {
  category: string;
  items: readonly string[];
};

export const skills: readonly SkillGroup[] = [
  {
    category: "Programming languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "COBOL", "HTML", "CSS"],
  },
  {
    category: "Frameworks and platforms",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "Django REST Framework",
      "Flask",
      "FastAPI",
      "MERN Stack",
    ],
  },
  {
    category: "AI, ML and data processing",
    items: [
      "Agentic AI",
      "Machine Learning",
      "Scikit-Learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Tesseract OCR",
      "OpenCV",
      "Data Preprocessing",
    ],
  },
  {
    category: "Libraries and UI",
    items: [
      "Redux",
      "Zustand",
      "GSAP",
      "Framer Motion",
      "Three.js",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "SCSS",
    ],
  },
  {
    category: "Databases and ORM",
    items: ["MongoDB", "MySQL", "PostgreSQL", "DB2", "Prisma ORM", "Mongoose", "ER Modeling"],
  },
  {
    category: "Legacy and enterprise systems",
    items: ["Mainframe", "JCL", "CICS"],
  },
  {
    category: "Developer tools and deployment",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Vite",
      "VS Code",
      "Postman",
      "Jest",
      "Netlify",
      "Render",
      "Vercel",
      "Google Colab",
      "Kaggle",
    ],
  },
];
