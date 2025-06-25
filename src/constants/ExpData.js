import { v4 as uuid } from "uuid";
export const experienceData = [
  {
    id: uuid(),
    role: "Software Engineer 2",
    company: "PayPal",
    duration: "September 2024 - Present",
    description:
      "Working in the Identity Team to develop secure, scalable identity management solutions using React, Node.js, Java, and GraphQL.Contributed to integration efforts with major partners including Amazon and Meta to enable seamless identity federation and compliance. Designed and implemented high-performance, reusable UI components for user consent flows.",
    techStack: ["ReactJS", "NodeJS", "Java", "GraphQL"],
  },
  {
    id: uuid(),
    role: "Associate Software Developer II",
    company: "HighRadius",
    duration: "July 2023 - September 2024",
    description:
      "Led the development of a collaborative task management solution, integrating various components and functionalities including deep linking and auto-assignment. Engineered administrative tools and screens to empower clients and reduced dependencies on consulting teams, minimizing configuration ticket inflow by 65%.",
    techStack: ["ReactJS", "Java", "Spring Boot", "MySQL"],
  },
  {
    id: uuid(),
    role: "Associate Software Developer I",
    company: "HighRadius",
    duration: "July 2022 - July 2023",
    description:
      "Led comprehensive analysis and upgrade of outdated JAR dependencies in legacy code, reducing system errors and improving overall application stability for 100+ users. Enhanced UI performance by optimizing code and fixing 50+ critical bugs, resulting in a 40% increase in app speed and a 30% reduction in crash reports.",
    techStack: ["ReactJS", "Java", "MySQL"],
  },
  {
    id: uuid(),
    role: "Software Engineer Intern",
    company: "HighRadius",
    duration: "June 2021 - July 2022",
    description:
      "Architected multiple agents and parsers in Java and Selenium to aggregate data from third-party vendor websites, emails, and carrier portals. Improved RPA workflows by integrating machine learning models, reducing error rates by 40% and saving over 150 hours of manual work per month, while boosting overall system efficiency.",
    techStack: ["Java", "MySQL"],
  },
];
