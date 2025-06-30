export type CaseData = {
  id: number;
  title: string;
  tags: string[];
  image: string;
  description: string;
  client: string;
  startProject: string;
  mediaType: "image" | "video";
  mediaSrc: string;
};

export const CASES: CaseData[] = [
  {
    id: 1,
    title: "Awesome Project",
    tags: ["React", "TypeScript", "UI/UX"],
    image: "test.png",
    description: "A cutting-edge web app built with React and TypeScript.",
    client: "Acme Corp",
    startProject: "2022",
    mediaType: "video",
    mediaSrc: "TF-before-after.mp4",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    tags: ["Next.js", "Commerce", "API"],
    image: "test.png",
    description: "A scalable e-commerce platform for modern businesses.",
    client: "Shoply",
    startProject: "2021",
    mediaType: "video",
    mediaSrc: "TF-before-after.mp4",
  },
  {
    id: 3,
    title: "Mobile App",
    tags: ["React Native", "iOS", "Android"],
    image: "test.png",
    description: "A cross-platform mobile app for iOS and Android.",
    client: "MobileX",
    startProject: "2023",
    mediaType: "image",
    mediaSrc: "test.png",
  },
  {
    id: 4,
    title: "Design System",
    tags: ["Figma", "Design Tokens", "Accessibility"],
    image: "test.png",
    description: "A robust design system for consistent UI/UX.",
    client: "DesignPro",
    startProject: "2020",
    mediaType: "image",
    mediaSrc: "test.png",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    tags: ["D3.js", "Data Viz", "SaaS"],
    image: "test.png",
    description: "A SaaS analytics dashboard with rich data visualizations.",
    client: "Insightful",
    startProject: "2022",
    mediaType: "image",
    mediaSrc: "test.png",
  },
  {
    id: 6,
    title: "Marketing Site",
    tags: ["Gatsby", "SEO", "Contentful"],
    image: "test.png",
    description: "A fast marketing site optimized for SEO.",
    client: "Marketly",
    startProject: "2021",
    mediaType: "image",
    mediaSrc: "test.png",
  },
  {
    id: 7,
    title: "AI Chatbot",
    tags: ["OpenAI", "Chatbot", "Node.js"],
    image: "test.png",
    description: "An AI-powered chatbot for customer support.",
    client: "Botify",
    startProject: "2023",
    mediaType: "image",
    mediaSrc: "test.png",
  },
];

export type ChallengeDetail = {
  id: number;
  label: string;
  title: string;
  description: string;
};

export const CHALLENGE_DETAILS: ChallengeDetail[] = [
  {
    id: 1,
    label: "Project Details",
    title: "A deep dive into the design and engineering process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum velit, nec laoreet enim lacus a velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Etiam nec velit nec libero pretium pharetra. In hac habitasse platea dictumst. Morbi euismod, urna in cursus faucibus, massa arcu facilisis enim, vitae cursus erat purus non urna.",
  },
  {
    id: 2,
    label: "Platform Insights",
    title: "Building a scalable e-commerce experience",
    description:
      "This project focused on designing a robust e-commerce platform. We implemented a modular architecture, seamless API integrations, and a user-centric checkout flow to maximize conversions and performance.",
  },
  {
    id: 3,
    label: "Mobile Innovation",
    title: "Delivering cross-platform mobile excellence",
    description:
      "The mobile app was engineered for both iOS and Android, leveraging React Native for rapid development. Emphasis was placed on intuitive navigation, offline support, and native performance.",
  },
  {
    id: 4,
    label: "Design System",
    title: "Establishing a unified design language",
    description:
      "We created a comprehensive design system in Figma, defining tokens, components, and accessibility standards. This ensured consistency and efficiency across all product surfaces.",
  },
  {
    id: 5,
    label: "Analytics Engineering",
    title: "Visualizing data for actionable insights",
    description:
      "Our analytics dashboard utilized D3.js for interactive data visualizations. The SaaS platform enabled real-time reporting and customizable metrics for business users.",
  },
  {
    id: 6,
    label: "Marketing Optimization",
    title: "Crafting a high-performance marketing site",
    description:
      "The marketing site was built with Gatsby and Contentful, optimized for SEO and fast load times. Content workflows empowered the marketing team to iterate quickly.",
  },
  {
    id: 7,
    label: "AI Integration",
    title: "Empowering support with AI chatbots",
    description:
      "We integrated OpenAI-powered chatbots to automate customer support. The Node.js backend handled real-time messaging, intent recognition, and seamless handoff to human agents.",
  },
];
