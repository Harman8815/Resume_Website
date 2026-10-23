export type Language = {
  name: string;
  proficiency: string;
};

export type VolunteerExperience = {
  role: string;
  organization: string;
  dates: string;
  description: string;
};

export const languages: readonly Language[] = [
  { name: "English", proficiency: "Professional proficiency" },
  { name: "Punjabi", proficiency: "Native proficiency" },
  { name: "Hindi", proficiency: "Native proficiency" },
];

export const volunteerExperience: readonly VolunteerExperience[] = [
  {
    role: "Volunteer",
    organization: "Sports Fest Organizing Committee",
    dates: "Sep 2022 – Feb 2023",
    description:
      "Helped organize the college sports fest by preparing equipment and event areas under the guidance of mentors.",
  },
];

export const interests: readonly string[] = [
  "Meditation",
  "Reading",
  "Badminton",
  "Competitive coding",
];

export const softSkills: readonly string[] = [
  "Teamwork",
  "Adaptability",
  "Quick learner",
  "Responsibility",
  "Problem solving",
  "Time management",
];
