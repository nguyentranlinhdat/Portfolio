import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: { en: "Programming Languages", vi: "Ngôn ngữ lập trình" },
    skills: [
      { name: "C / C++", level: "intermediate" },
      { name: "Python", level: "familiar" },
    ],
  },
  {
    title: { en: "Web Technologies", vi: "Công nghệ Web" },
    skills: [
      { name: "HTML5", level: "advanced" },
      { name: "CSS3", level: "intermediate" },
      { name: "JavaScript", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
    ],
  },
  {
    title: { en: "Frameworks & Libraries", vi: "Frameworks & Thư viện" },
    skills: [
      { name: "React", level: "intermediate" },
      { name: "Next.js", level: "intermediate" },
      { name: "Tailwind CSS", level: "intermediate" },
    ],
  },
  {
    title: { en: "Databases & Tools", vi: "Cơ sở dữ liệu & Công cụ" },
    skills: [
      { name: "MySQL", level: "familiar" },
      { name: "Git", level: "advanced" },
      { name: "Figma", level: "familiar" },
      { name: "SEMrush", level: "intermediate" },
      { name: "Ahrefs", level: "familiar" },
    ],
  },
  {
    title: { en: "Soft Skills", vi: "Kỹ năng mềm" },
    skills: [
      { name: "Problem Solving", level: "familiar" },
      { name: "Teamwork", level: "advanced" },
      { name: "Communication", level: "intermediate" },
      { name: "Self-learning", level: "advanced" },
    ],
  },
  {
    title: { en: "Languages", vi: "Ngôn ngữ" },
    skills: [
      { name: "Japanese (NAT-TEST N3)", level: "intermediate" },
      { name: "English", level: "familiar" },
    ],
  },
];
