export type CodingAchievement = {
  platform: string;
  href: string;
  result: string;
};

export const codingAchievements: readonly CodingAchievement[] = [
  {
    platform: "LeetCode",
    href: "https://leetcode.com/Harman_deep_singh/",
    result: "550+ day streak · 1,400+ problems · rating 1,680+",
  },
  {
    platform: "GeeksforGeeks",
    href: "https://auth.geeksforgeeks.org/user/harman88157/practice",
    result: "Institute rank 1 · 700+ problems",
  },
  {
    platform: "InterviewBit",
    href: "https://www.interviewbit.com/profile/harman-deep-singh_937/",
    result: "350+ problems · ranked within the top 7,000",
  },
  {
    platform: "HackerRank",
    href: "https://www.hackerrank.com/harman88157?hr_r=1",
    result: "100+ problems · 5-star Java",
  },
];

export const communityActivities: readonly string[] = [
  "GirlScript Summer of Code 2024",
  "Coding Ninjas Hackathon",
];
