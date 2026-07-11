export const profile = {
  name: "Abdul Haseeb",
  firstName: "Abdul",
  lastName: "Haseeb",
  role: "Senior Technical Project Manager",
  subrole: "Full-stack engineer & delivery lead",
  location: "Lahore, Pakistan",
  available: true,
  tagline:
    "I take products from architecture to release — across Laravel, React/TypeScript, Node.js, and Flutter — while owning the team, the timeline, and the quality.",
  bio: [
    "I'm a Senior Technical Project Manager and full-stack engineer with 8+ years at Green Origin Pvt Ltd, having grown from Associate Software Engineer to leading cross-functional delivery teams.",
    "My work spans web and cross-platform mobile products — hands-on architecture and code, plus the sprint planning, client relationships, and quality ownership that get things shipped. Lately I've been focused on AI-integrated applications and modern React/TypeScript stacks.",
  ],
  email: "ranahaseeb33@gmail.com",
  linkedin: "https://linkedin.com/in/abdul-haseeb-04273b111",
  github: "https://github.com/RanaHaseeb",
  resume: "/Abdul-Haseeb-Resume.pdf",
};

export const stats = [
  { value: "8+", label: "Years shipping software" },
  { value: "20+", label: "Products delivered" },
  { value: "4", label: "Roles, one company" },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Senior Technical Project Manager",
    company: "Green Origin Pvt Ltd",
    location: "Lahore, Pakistan",
    period: "Jun 2021 — Present",
    current: true,
  },
  {
    role: "Team Lead",
    company: "Green Origin Pvt Ltd",
    location: "Lahore, Pakistan",
    period: "Jun 2020 — May 2021",
  },
  {
    role: "Senior Software Engineer",
    company: "Green Origin Pvt Ltd",
    location: "Lahore, Pakistan",
    period: "Jun 2018 — May 2020",
  },
  {
    role: "Associate Software Engineer",
    company: "Green Origin Pvt Ltd",
    location: "Lahore, Pakistan",
    period: "Jun 2017 — May 2018",
  },
];

export const experienceHighlights = [
  "Lead delivery of web and cross-platform mobile products end to end — scoping, architecture, hands-on development, and release across Laravel, React/TypeScript, Node.js, and Flutter.",
  "Manage cross-functional teams and client relationships, running sprint planning, estimation, and progress tracking with JIRA, Trello, and MS Planner.",
  "Own technical decisions on architecture, REST API design, third-party and payment integrations, authentication, and mobile release pipelines for iOS and Android.",
  "Introduced AI-integrated features and modern React tooling into the team's delivery stack, mentoring engineers along the way.",
];

export type Project = {
  name: string;
  tags: string[];
  summary: string;
  points: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Adam Commodities Compass",
    tags: ["React", "TanStack Start", "Node.js"],
    summary: "Investment and deal-management platform for a commodities firm.",
    points: [
      "Modules for company profiles, projects, transactions, targets, exits, and an investment-committee workflow.",
      "Trading and bank integrations plus configurable AI settings, with role-based access, auditing, and reporting dashboards.",
    ],
    featured: true,
  },
  {
    name: "Fursa Capital",
    tags: ["React", "Laravel"],
    summary: "A platform connecting entrepreneurs with investors.",
    points: [
      "React front end with a Laravel REST backend, secure authentication, and role-based permissions.",
      "Project posting, investment tracking, and an admin panel for verification and user management.",
    ],
    featured: true,
  },
  {
    name: "Masjid Timetable & Ads",
    tags: ["React", "Laravel", "Capacitor"],
    summary: "Prayer-schedule and advertising management for mosques.",
    points: [
      "Real-time content synchronisation and dynamic ad scheduling with automated community updates.",
      "A React theme builder reused via Capacitor to power the companion TV app.",
    ],
    featured: true,
  },
  {
    name: "CeX Warranties",
    tags: ["React 18", "Node.js", "MySQL"],
    summary: "Modernised a legacy PHP warranty system into a React + Node.js stack.",
    points: [
      "Rebuilt warranty administration on an Express API over the existing MySQL database, secured with Google OAuth 2.0.",
      "Delivered a responsive React front end for warranty lookup, management, and reporting.",
    ],
    featured: true,
  },
  {
    name: "Resource Management System",
    tags: ["Laravel", "Ionic", "Angular"],
    summary: "End-to-end HR and payroll platform streamlining employee management.",
    points: [
      "Employee profiles, contracts, rotas, and payroll, with geofencing and QR scanning for clock-in / clock-out.",
      "Cross-platform mobile apps for attendance, payroll, and scheduling, including in-app one-to-one and group chat.",
    ],
    featured: true,
  },
  {
    name: "Scholar Management System",
    tags: ["Laravel", "Flutter"],
    summary: "Student records, scholarship, and academic-performance platform.",
    points: [
      "Laravel REST backend with authentication and role-based permissions; Flutter apps for students and faculty.",
      "Scholarship tracking, attendance, psychometric testing, location-based check-in, and admin analytics.",
    ],
    featured: true,
  },
  {
    name: "Morahanat Strike Zone",
    tags: ["React", "TypeScript", "Capacitor"],
    summary: "A multi-sport prediction game across football, F1, and UFC.",
    points: [
      "Predictions, private leagues, and leaderboards with real-time results.",
      "Native mobile builds with authentication, push notifications, and social login.",
    ],
  },
  {
    name: "Voters Management System",
    tags: ["Laravel", "Flutter"],
    summary: "A voter-engagement and data-insight platform.",
    points: [
      "Voter search and a feedback module for political-party sentiment analysis.",
      "Clean, scalable UI/UX across the Laravel backend and Flutter mobile app.",
    ],
  },
  {
    name: "Qanoon AI — Legal Assistant",
    tags: ["FastAPI", "Python", "React"],
    summary: "An AI legal assistant for Pakistani law.",
    points: [
      "FastAPI backend serving an LLM-powered assistant over a curated legal knowledge base.",
      "React chat interface for legal Q&A, deployed as a public demo.",
    ],
  },
  {
    name: "HotMic Radio",
    tags: ["React", "TypeScript", "Capacitor"],
    summary: "A social radio and DJ streaming platform with native mobile apps.",
    points: [
      "Live charts, polls, giveaways, broadcasts, and a team inbox, with moderation tooling and DJ analytics.",
      "Cross-platform iOS/Android builds via Capacitor with push notifications and social login.",
    ],
  },
];

export const additionalProjects = [
  "Hotel Management System",
  "HotDad Club — fitness & lifestyle",
  "AI Tarot reading app",
  "Online Cricket — live streaming",
  "Blood Donation app",
  "Media Downloader",
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Dart",
      "Flutter",
    ],
  },
  {
    label: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "shadcn/ui", "TanStack", "Vite", "Responsive UI/UX"],
  },
  {
    label: "Backend & Data",
    items: ["REST API design", "MySQL", "Firebase", "Supabase", "Payment integrations", "Google OAuth"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "Ionic", "Capacitor", "iOS & Android", "Geofencing", "Push notifications"],
  },
  {
    label: "AI / ML",
    items: ["LLM integration", "AI assistants", "Retrieval-augmented generation"],
  },
  {
    label: "Project Management",
    items: ["Agile / Scrum", "Sprint planning", "Team leadership", "JIRA", "Trello", "MS Planner"],
  },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
