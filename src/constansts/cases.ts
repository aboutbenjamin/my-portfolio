export type CaseData = {
  title: string;
  tags: string[];
  image: string;
  description: string;
  client: string;
  startProject: string;
};

export const CASES: CaseData[] = [
  {
    title: "Awesome Project",
    tags: ["React", "TypeScript", "UI/UX"],
    image: "test.png",
    description: "A cutting-edge web app built with React and TypeScript.",
    client: "Acme Corp",
    startProject: "2022",
  },
  {
    title: "E-Commerce Platform",
    tags: ["Next.js", "Commerce", "API"],
    image: "test.png",
    description: "A scalable e-commerce platform for modern businesses.",
    client: "Shoply",
    startProject: "2021",
  },
  {
    title: "Mobile App",
    tags: ["React Native", "iOS", "Android"],
    image: "test.png",
    description: "A cross-platform mobile app for iOS and Android.",
    client: "MobileX",
    startProject: "2023",
  },
  {
    title: "Design System",
    tags: ["Figma", "Design Tokens", "Accessibility"],
    image: "test.png",
    description: "A robust design system for consistent UI/UX.",
    client: "DesignPro",
    startProject: "2020",
  },
  {
    title: "Analytics Dashboard",
    tags: ["D3.js", "Data Viz", "SaaS"],
    image: "test.png",
    description: "A SaaS analytics dashboard with rich data visualizations.",
    client: "Insightful",
    startProject: "2022",
  },
  {
    title: "Marketing Site",
    tags: ["Gatsby", "SEO", "Contentful"],
    image: "test.png",
    description: "A fast marketing site optimized for SEO.",
    client: "Marketly",
    startProject: "2021",
  },
  {
    title: "AI Chatbot",
    tags: ["OpenAI", "Chatbot", "Node.js"],
    image: "test.png",
    description: "An AI-powered chatbot for customer support.",
    client: "Botify",
    startProject: "2023",
  },
];
