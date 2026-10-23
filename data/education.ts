export type EducationEntry = {
  institution: string;
  affiliation: string;
  location: string;
  qualification: string;
  dates: string;
  result: string;
};

export const education: readonly EducationEntry[] = [
  {
    institution: "Vikrant Institute of Technology and Management",
    affiliation: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    location: "Gwalior, India",
    qualification: "B.Tech, Computer Science and Engineering",
    dates: "Aug 2021 – May 2025",
    result: "CGPA 7.7",
  },
];
