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
    scrollGalleryImages: [],
    results: [],
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
      { value: "+10", label: "Redesigned modules", delay: 100 },
      { value: "+55K", label: "Satisfied users", delay: 150 },
      { value: "+9 years", label: "Experience", delay: 200 },
    ],
  },
  {
    id: 6,
    title: "Coming Soon",
    tags: ["-", "-", "-"],
    image: "cover-beach.png",
    images: {
      firstSection: ["beach-image-grid-1.png", "beach-image-grid-2.png"],
      secondSection: ["beach-full-image.png"],
    },
    description: "",
    client: "Clean Beach",
    startProject: "2024",
    mediaType: "image",
    mediaSrc: "beach-image-top.png",
    scrollGalleryImages: [
      "beach-horizontal-scroll-1.png",
      "beach-horizontal-scroll-2.png",
      "beach-horizontal-scroll-3.png",
    ],
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
    image: "cover-freeluencer.png",
    images: {
      firstSection: [
        "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer.gif?alt=media&token=160d7680-e81e-47fd-80f6-f1ff75c6e4bd",
        "freeluencer-image-grid-2.png",
      ],
      secondSection: ["free-image-grid-3.png", "free-image-grid-4.png"],
      thirdSection: ["free-full-image.png"],
    },
    description: "",
    client: "Freeluencer",
    startProject: "2018",
    mediaType: "video",
    mediaSrc:
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer-movie-top.mp4?alt=media&token=04b70727-6435-4d83-8a95-3b3d4ba0526c",
    scrollGalleryImages: [
      "free-horizontal-scroll-1.png",
      "free-horizontal-scroll-2.png",
      "free-horizontal-scroll-3.png",
      "free-horizontal-scroll-4.png",
      "free-horizontal-scroll-5.png",
      "free-horizontal-scroll-6.png",
    ],
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
    title: "A Smarter Way to Track Installments",
    description:
      "Termynen is a native mobile app designed to help users manage their monthly installment payments with ease. It provides a centralized view of all active and completed installments, making financial organization simple and intuitive. Users can mark payments as completed, edit details, and access full payment histories once an installment cycle ends. With a user-first approach and carefully designed UI elements, Termynen aims to offer clarity and control in handling recurring financial obligations.",
  },
  {
    id: 5,
    label: "About",
    title: "Designing at scale that drives enterprise impact",
    description:
      "This project presents a collection of enterprise software projects focused on enhancing user experience across various business domains. Featured work includes an Total redesign and rebranding of the software, Ticketing system for time tracking and task management, Tailored component library designed specifically for the software, Interactive dashboard for a clear overview, Order Overview system for managing business transactions, an Order Edit platform enabling dynamic order customization, a mobile app designed for drivers in transportation logistics, a Knowledge Center website aimed at streamlining customer support, and a range of reusable interface components. These projects address key areas such as order management, logistics coordination, customer service, and accessibility, delivering solutions across both web and mobile platforms.",
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
    label: "About",
    title: "A Smarter Way to Track Installments",
    description:
      "Termynen is a native mobile app designed to help users manage their monthly installment payments with ease. It provides a centralized view of all active and completed installments, making financial organization simple and intuitive. Users can mark payments as completed, edit details, and access full payment histories once an installment cycle ends. With a user-first approach and carefully designed UI elements, Termynen aims to offer clarity and control in handling recurring financial obligations.",
  },
  {
    id: 5,
    label: "Challenge",
    title: "Complex Design architecture Across Multiple Projects",
    description:
      "Each project tackled unique and demanding design challenges. These included developing accessible order status displays for color-blind users, solving persistent space constraints in filter systems that previous teams had struggled to address, and rethinking action menus that required managing over 20 possible user actions. The mobile driver interface required intuitive navigation optimized for on-the-go use, while the Knowledge Center involved transforming a scattered information base into a cohesive, searchable support experience. Another critical challenge was enabling greater user control through customizable sidebar navigation.",
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
    label: "",
    title: "",
    description: "",
  },
  {
    id: 5,
    label: "Solution",
    title: "Design in motion delivering for complex interfaces",
    description:
      "A range of targeted solutions was implemented to meet these challenges. Accessibility was improved through the use of alternative visual indicators beyond color alone. Space optimization was achieved using dropdown-based filter systems. Complex action menus were replaced with a wizard-style popup approach that guided users through tasks. The mobile driver app followed a responsive, mobile-first design with large touch targets to support use in the field. A centralized search function with product-specific filtering brought clarity to the Knowledge Center, while drag-and-drop functionality was introduced in the sidebar to allow users to personalize their workspace. Accordion-style content organization helped structure knowledge articles in a way that’s easy to navigate and digest.",
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
    label: "",
    title: "",
    description: "",
  },
  {
    id: 5,
    label: "Conclusion",
    title: "Designing with purpose to create human-centered systems that scale",
    description:
      "The design improvements led to a variety of measurable outcomes. Accessibility compliance was significantly enhanced, and user satisfaction scores saw notable increases. Long-standing usability issues were resolved, streamlining user workflows and improving productivity. The redesigned Knowledge Center reduced the workload on support teams by enabling more effective self-service. Drivers benefited from a faster, more intuitive mobile interface, while enterprise stakeholders praised the overall usability and polish of the redesigned systems. User engagement and task completion rates also improved as a direct result of these design interventions.",
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
    label: "",
    title: "",
    description: "",
  },
  {
    id: 5,
    label: "Results",
    title: "Achieving through measurable gains and meaningful feedback",
    description: "",
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
