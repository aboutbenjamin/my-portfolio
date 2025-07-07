import type { CaseData } from "../types/case";

export const CASES: CaseData[] = [
  {
    id: 1,
    title: "Enhancing customer experience with AI search",
    tags: ["Design", "Development", "Mobile"],
    image: "cover-vdf.png",
    images: {
      firstSection: ["vdf.gif", "vdf-image-grid-2.png"],
      secondSection: ["vdf-image-grid-3.png"],
    },
    description: "A cutting-edge web app built with React and TypeScript.",
    client: "Vodafone",
    website: "Vodafone app",
    startProject: "2025",
    mediaType: "image",
    mediaSrc: "vdf-image-top.png",
    scrollGalleryImages: [
      "vdf-horizontal-scroll-1.png",
      "vdf-horizontal-scroll-2.png",
      "vdf-horizontal-scroll-3.png",
    ],
    results: [
      {
        value: "30%",
        label: "reduction in live contact-support interactions.",
        delay: 100,
      },
      {
        value: "+2M",
        label:
          "customers reported satisfaction with the new search experience.",
        delay: 150,
      },
      {
        value: "22%",
        label: "Increased engagement with embedded features.",
        delay: 200,
      },
    ],
  },
  {
    id: 2,
    title:
      "Empowering customers with a seamless outage and maintenance status experience.",
    tags: ["Design", "Development", "Web", "Mobile"],
    image: "cover-ziggo.png",
    images: {
      firstSection: ["zg-image-top.png"],
      secondSection: ["zg-image-grid-1.png"],
    },
    description: "A scalable e-commerce platform for modern businesses.",
    client: "Ziggo",
    website: "ziggo.nl",
    startProject: "2024",
    mediaType: "video",
    mediaSrc: "ziggo-before-after.mp4",
    scrollGalleryImages: [
      "zg-horizontal-scroll-1.png",
      "zg-horizontal-scroll-2.png",
      "zg-horizontal-scroll-3.png",
      "zg-horizontal-scroll-4.png",
    ],
    results: [
      {
        value: "+3.5M",
        label: "Unique users per month using the outage checker",
        delay: 100,
      },
      {
        value: "28%",
        label: "Reduction in customer support requests about outages",
        delay: 150,
      },
      {
        value: "+500K",
        label: "Push notifications sent via native app integration",
        delay: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Supporting Compliance and Usability with Accessible Web Solutions",
    tags: ["Accessibility", "WCAG", "EAA"],
    image: "cover-wcag.png",
    images: {
      firstSection: ["wcag-image-grid-1.png", "wcag-image-grid-2.png"],
      secondSection: ["wcag-image-grid-3.png", "wcag-image-grid-4.png"],
      thirdSection: ["wcag-image-grid-5.png"],
    },
    description: "A robust design system for consistent UI/UX.",
    client: "ilionx",
    website: "ilionx.nl",
    startProject: "2023",
    mediaType: "image",
    mediaSrc: "wcag-full-image.png",
    scrollGalleryImages: [
      "wcag-scroll-1.png",
      "wcag-scroll-2.png",
      "wcag-scroll-3.png",
      "wcag-scroll-4.png",
    ],
    results: [
      {
        value: "86%",
        label:
          "Faster onboarding to accessibility best practices reported by teams",
        delay: 100,
      },
      {
        value: "12",
        label: "Client teams actively using the accessibility toolkit",
        delay: 150,
      },
      {
        value: "44",
        label: "WCAG guidelines translated into practical design mockups",
        delay: 200,
      },
    ],
  },
  {
    id: 4,
    title: "Helping people Stay on Track with Intelligent Installment Insights",
    tags: ["Design", "Development", "Mobile"],
    image: "cover-termynen.png",
    images: {
      firstSection: ["termynen-full-image.png"],
    },
    description: "A robust design system for consistent UI/UX.",
    client: "Termynen",
    website: "termynen.com",
    startProject: "2022",
    mediaType: "image",
    mediaSrc: "",
    scrollGalleryImages: ["", ""],
    results: [
      { value: "+", label: "Placeholder", delay: 100 },
      { value: "+", label: "Placeholder", delay: 150 },
      { value: "+", label: "Placeholder", delay: 200 },
    ],
  },
  {
    id: 5,
    title:
      "Optimizing logistical processes with industry-specific ERP solutions.",
    tags: ["Design", "Development", "SaaS", "Rapid Prototyping"],
    image: "cover-tf.png",
    images: {
      firstSection: ["tf-image-grid-1.png", "tf-image-grid-2.png"],
      secondSection: ["tf-image-grid-3.png", "tf-image-grid-4.png"],
      thirdSection: ["tf-full-image.png"],
    },
    description: "A cross-platform mobile app for iOS and Android.",
    client: "Troublefree",
    website: "troublefree.nl",
    startProject: "2018",
    mediaType: "video",
    mediaSrc: "TF-before-after.mp4",
    scrollGalleryImages: [
      "tf-horizontal-scroll-1.png",
      "tf-horizontal-scroll-2.png",
      "tf-horizontal-scroll-3.png",
      "tf-horizontal-scroll-4.png",
    ],
    results: [
      { value: "+", label: "Placeholder", delay: 100 },
      { value: "+", label: "Placeholder", delay: 150 },
      { value: "+", label: "Placeholder", delay: 200 },
    ],
  },
  {
    id: 6,
    title: "Coming Soon",
    tags: ["-", "-", "-"],
    image: "test.png",
    description: "",
    client: "Beach Clean",
    startProject: "2024",
    mediaType: "",
    mediaSrc: "",
    scrollGalleryImages: ["", ""],
    results: [
      { value: "+", label: "Placeholder", delay: 100 },
      { value: "+", label: "Placeholder", delay: 150 },
      { value: "+", label: "Placeholder", delay: 200 },
    ],
  },
  {
    id: 7,
    title: "Coming Soon",
    tags: ["-", "-", "-"],
    image: "test.png",
    description: "",
    client: "Freeluencer",
    startProject: "2018",
    mediaType: "",
    mediaSrc: "",
    scrollGalleryImages: ["", ""],
    results: [
      { value: "+", label: "Placeholder", delay: 100 },
      { value: "+", label: "Placeholder", delay: 150 },
      { value: "+", label: "Placeholder", delay: 200 },
    ],
  },
  {
    id: 8,
    title: "Coming Soon",
    tags: ["-", "-", "-"],
    image: "test.png",
    description: "",
    client: "Twill by Maersk",
    startProject: "2027",
    mediaType: "",
    mediaSrc: "",
    scrollGalleryImages: ["", ""],
    results: [
      { value: "+", label: "Placeholder", delay: 100 },
      { value: "+", label: "Placeholder", delay: 150 },
      { value: "+", label: "Placeholder", delay: 200 },
    ],
  },
  {
    id: 9,
    title: "Coming Soon",
    tags: ["-", "-", "-"],
    image: "test.png",
    description: "",
    client: "QPark",
    startProject: "2016",
    mediaType: "",
    mediaSrc: "",
    scrollGalleryImages: ["", ""],
    results: [
      { value: "+", label: "Placeholder", delay: 100 },
      { value: "+", label: "Placeholder", delay: 150 },
      { value: "+", label: "Placeholder", delay: 200 },
    ],
  },
];

export type CaseDetails = {
  id: number;
  label: string;
  title: string;
  description: string;
};

export const ABOUT_DETAILS: CaseDetails[] = [
  {
    id: 1,
    label: "About",
    title: "Smarter Support with AI-Powered Search",
    description:
      "We developed an AI-powered customer assist component integrated into the Vodafone app, enabling users to search and receive accurate answers based on the company’s extensive knowledge base. The solution leverages large language models (LLMs) to interpret user queries, provide contextual responses, and reduce dependency on live customer support. The search interface supports features like autocomplete, expandable results, popular and recent search tags, and actionable widgets (e.g., last invoice). Users can also engage in extended conversations with the AI to clarify or deepen their inquiries.",
  },
  {
    id: 2,
    label: "About",
    title: "Improving Transparency with the Ziggo Storingschecker",
    description:
      "The Ziggo storingschecker project was initiated to give customers clear, real-time insights into outages and maintenance work affecting their services. By allowing users to enter their postal code and address, the tool provides accurate status updates on disruptions in their area. Our goal was to create a more accessible, user-friendly experience that reassures users and reduces unnecessary customer service contact.",
  },
  {
    id: 3,
    label: "About",
    title: "Accessibility at the Core",
    description:
      "In collaboration with clients, ilionx launched a strategic initiative focused on digital accessibility, driven by the principles of the Web Content Accessibility Guidelines (WCAG) and the European Accessibility Act (EAA). The project aimed to raise awareness about the legal and usability risks of inaccessible applications and offer practical, design-first solutions that integrate accessibility from the ground up.",
  },
  {
    id: 4,
    label: "About",
    title: "Coming Soon",
    description: "Placeholder text for project details.",
  },
  {
    id: 5,
    label: "About",
    title: "Coming Soon",
    description: "Placeholder text for project details.",
  },
  {
    id: 6,
    label: "",
    title: "",
    description: "",
  },
  {
    id: 7,
    label: "",
    title: "",
    description: "",
  },
];

export const CHALLENGE_DETAILS: CaseDetails[] = [
  {
    id: 1,
    label: "Challenge",
    title: "Reducing Pressure on Live Support While Improving Self-Service",
    description:
      "Vodafone faced increasing pressure on its customer support teams, with a high volume of inquiries overwhelming traditional contact channels. Users struggled to quickly find relevant information through static help articles, leading to low self-service satisfaction. The challenge was to deliver a more intuitive, conversational, and effective self-help solution that could handle a wide range of user intents and reduce support center strain without compromising on quality or trust.",
  },
  {
    id: 2,
    label: "Challenge",
    title: "Understanding and Resolving Key User Frustrations",
    description:
      "Users previously experienced confusion and dissatisfaction due to a lack of transparency regarding service outages. The existing tools were limited in functionality, often failing to communicate the scope or resolution status of service disruptions. There was also a need for better accessibility, clarity in iconography, and more granular insight into the individual components of each Ziggo product, such as routers, cables, or third-party services like Netflix and HBO.",
  },
  {
    id: 3,
    label: "Challenge",
    title: "Turning Guidelines into Action",
    description:
      "One of the main challenges was translating the often abstract and technical WCAG criteria into actionable insights that designers, developers, and product owners could easily understand and implement. The goal was to bridge the gap between legal compliance and user-centered design by visually representing each WCAG point through annotated mockups and real-time wireframes.",
  },
  {
    id: 4,
    label: "Challenge",
    title: "Coming Soon",
    description: "Placeholder text for the challenge details.",
  },
  {
    id: 5,
    label: "Challenge",
    title: "Coming Soon",
    description: "Placeholder text for the challenge details.",
  },
  {
    id: 6,
    label: "",
    title: "",
    description: "",
  },
  {
    id: 7,
    label: "",
    title: "",
    description: "",
  },
];

export const SOLUTION_DETAILS: CaseDetails[] = [
  {
    id: 1,
    label: "Solution",
    title: "Conversational, Intelligent, and Actionable Search Experience",
    description:
      "We implemented a dynamic, LLM-powered search results experience embedded within the Vodafone app. Users can search from various entry points (such as the header or service page) and are presented with interactive search cards that display concise, expandable answers. On expansion, users are shown a detailed dialog containing the full response and an option to continue the conversation with the AI for deeper support. Features like autocomplete suggestions, popular/recent searches, and personalized widgets further enhance the user journey. Feedback options allow continuous improvement of result quality.",
  },
  {
    id: 2,
    label: "Solution",
    title: "Building a User-Centric, Data-Rich Experience",
    description:
      "We developed a new, intuitive web-based and in-app storingschecker with several key features: A visual history bar displaying the number of outages or maintenance events in the past 90 days to demonstrate reliability over time. A legend explaining each icon (e.g., checkmark for operational, warning sign for degradation) for improved accessibility. A comprehensive list of Ziggo services and their specific components (e.g., modem, Wi-Fi signal, streaming services) with real-time status updates. A clearly displayed current outage or maintenance section with a “Help me solve it” button to guide users toward self-resolution or support. A future maintenance overview so users are aware of upcoming service interruptions.Native app integration to deliver consistent, real-time updates across platforms.",
  },
  {
    id: 3,
    label: "Solution",
    title: "Visual Guidelines & Practical Tools",
    description:
      "To address this challenge, we developed a comprehensive toolkit that transforms complex accessibility requirements into intuitive design examples. This included: A series of wireframes and mockups illustrating both poor and optimal practices. Clear notes and contextual explanations for each WCAG guideline. A companion web app acting as a checklist and scan tool for clients to assess the accessibility of their applications. This visual-first approach made accessibility actionable, not abstract.",
  },
  {
    id: 4,
    label: "Solution",
    title: "Coming Soon",
    description: "Placeholder text for the solution details.",
  },
  {
    id: 5,
    label: "Solution",
    title: "Coming Soon",
    description: "Placeholder text for the solution details.",
  },
  {
    id: 6,
    label: "",
    title: "",
    description: "",
  },
  {
    id: 7,
    label: "",
    title: "",
    description: "",
  },
];

export const CONCLUSION_DETAILS: CaseDetails[] = [
  {
    id: 1,
    label: "Conclusion",
    title: "A Scalable Foundation for AI-Powered Customer Service",
    description:
      "The LLM-powered customer assist feature successfully transformed Vodafone’s in-app support experience. It provided users with fast, accurate, and conversational help while reducing pressure on live agents. The intelligent search system has proven to be scalable, user-friendly, and continuously learnable through feedback. This innovation not only improved satisfaction but also laid a foundation for expanding AI-driven support across other customer journeys within the Vodafone ecosystem.",
  },
  {
    id: 2,
    label: "Conclusion",
    title: "Empowering Users with Clarity and Control",
    description:
      "The Ziggo storingschecker project successfully bridged the gap between technical backend data and customer-facing clarity. By prioritizing transparency, accessibility, and detailed service-level insights, we’ve equipped users with the tools they need to feel informed and in control. This transformation not only meets modern digital expectations but strengthens Ziggo’s relationship with its customers through honest, proactive communication.",
  },
  {
    id: 3,
    label: "Conclusion",
    title: "Designing for Everyone, By Default",
    description:
      "By embedding WCAG principles into tangible design tools and workflows, ilionx turned accessibility into a standard practice, not an afterthought. This project not only helped clients mitigate legal risks, but also contributed to more inclusive digital experiences for all users. It showcased the power of clear visual communication in solving complex IT challenges and reinforced ilionx’s role as a strategic accessibility partner.",
  },
  {
    id: 4,
    label: "Conclusion",
    title: "Coming Soon",
    description: "Placeholder text for the conclusion details.",
  },
  {
    id: 5,
    label: "Conclusion",
    title: "Coming Soon",
    description: "Placeholder text for the conclusion details.",
  },
  {
    id: 6,
    label: "",
    title: "",
    description: "",
  },
  {
    id: 7,
    label: "",
    title: "",
    description: "",
  },
];

export const RESULTS_DETAILS: CaseDetails[] = [
  {
    id: 1,
    label: "Results",
    title: "Increased Satisfaction and Reduced Support Load",
    description: "",
  },
  {
    id: 2,
    label: "Results",
    title: "Enhanced Trust and Reduced Support Load",
    description: "",
  },
  {
    id: 3,
    label: "Results",
    title: "Clarity, Adoption, and Accessibility",
    description: "",
  },
  {
    id: 4,
    label: "Results",
    title: "Coming Soon",
    description: "Placeholder text for the results details.",
  },
  {
    id: 5,
    label: "Results",
    title: "Coming Soon",
    description: "Placeholder text for the results details.",
  },
  {
    id: 6,
    label: "",
    title: "",
    description: "",
  },
  {
    id: 7,
    label: "",
    title: "",
    description: "",
  },
];
