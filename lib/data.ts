export const profile = {
  name: "Abdul Haseeb",
  firstName: "Abdul",
  lastName: "Haseeb",
  role: "Senior Technical Project Manager",
  location: "Lahore, Pakistan",
  /** Hero: the evocative line */
  headline:
    "Senior Technical Project Manager shipping AI-integrated products end to end.",
  /** Hero: the one-line proof under the headline */
  valueProp: "8 years. 20+ products. From architecture to App Store.",
  bio: [
    "I'm a Senior Technical Project Manager and full-stack engineer with 8+ years at Green Origin Pvt Ltd, where I've grown from Associate Software Engineer to leading cross-functional delivery teams.",
    "My work spans web and cross-platform mobile products — hands-on architecture and code, plus the sprint planning, client relationships, and quality ownership that get things shipped. Lately I've focused on AI-integrated applications and modern React/TypeScript stacks.",
  ],
  drives:
    "What keeps me in this work is the handover moment — when something we scoped on a whiteboard is live, in someone's hands, doing the job it was meant to do. I like sitting between the engineering and the business: translating a client's real constraint into an architecture the team can build, then protecting the team's focus long enough to build it well. The part I'm proudest of isn't a stack choice; it's the engineers I've mentored who now run their own delivery.",
  email: "ranahaseeb33@gmail.com",
  linkedin: "https://linkedin.com/in/abdul-haseeb-04273b111",
  github: "https://github.com/RanaHaseeb",
  resume: "/Abdul-Haseeb-Resume.pdf",
};

/** `value` drives the count-up animation; `suffix` is appended after it. */
export const stats = [
  { value: 8, suffix: "+", label: "Years shipping software" },
  { value: 20, suffix: "+", label: "Products delivered" },
  { value: 4, suffix: "", label: "Roles, one company" },
  { value: 15, suffix: "+", label: "Core technologies" },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  achievements: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Technical Project Manager",
    company: "Green Origin Pvt Ltd",
    location: "Lahore, Pakistan",
    period: "Jun 2021 — Present",
    current: true,
    achievements: [
      "Lead delivery of web and cross-platform mobile products end to end — scoping, architecture, hands-on development, and release across Laravel, React/TypeScript, Node.js, and Flutter.",
      "Own client relationships and delivery planning for concurrent accounts, running sprint planning, estimation, and progress reporting in JIRA, Trello, and MS Planner.",
      "Introduced AI-integrated features and a modern React/TypeScript toolchain into the team's delivery stack, then mentored engineers onto it.",
    ],
  },
  {
    role: "Team Lead",
    company: "Green Origin Pvt Ltd",
    location: "Lahore, Pakistan",
    period: "Jun 2020 — May 2021",
    achievements: [
      "Ran a cross-functional squad across web and mobile workstreams, owning sprint scope, code review, and release sign-off.",
      "Set the technical direction on architecture, REST API design, and third-party and payment integrations.",
      "Built the iOS and Android release pipeline the team still ships through, including store submission and versioning.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Green Origin Pvt Ltd",
    location: "Lahore, Pakistan",
    period: "Jun 2018 — May 2020",
    achievements: [
      "Delivered the backend architecture for multi-role platforms — authentication, granular roles and permissions, and auditable admin tooling.",
      "Took ownership of complex modules end to end, from data model through API to the front end consuming it.",
      "Onboarded and mentored junior engineers, establishing the code-review habits used across the team.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Green Origin Pvt Ltd",
    location: "Lahore, Pakistan",
    period: "Jun 2017 — May 2018",
    achievements: [
      "Shipped features across PHP/Laravel and CodeIgniter products alongside senior engineers.",
      "Built responsive front ends and integrated REST APIs, third-party services, and payment providers.",
    ],
  },
];

export type Project = {
  name: string;
  /** Short domain label shown on the thumbnail */
  kind: string;
  tags: string[];
  summary: string;
  /** NOTE: `problem` and `outcome` are newly authored positioning copy —
   *  grounded in each project's real scope, but worth a read-through. */
  problem?: string;
  outcome?: string;
  points: string[];
  featured?: boolean;
  /** Base hue (deg) for the generated thumbnail */
  hue: number;
  /** Thumbnail pattern variant */
  art?: "orbit" | "stack" | "grid" | "wave" | "nodes" | "bars";
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Adam Commodities Compass",
    kind: "Investment platform",
    tags: ["React", "TanStack Start", "Node.js", "AI"],
    summary:
      "An investment and deal-management platform for a commodities firm, covering the full lifecycle from first company profile to exit.",
    problem:
      "Deal flow, trading positions, and investment-committee decisions lived across disconnected spreadsheets and inboxes, with no audit trail.",
    outcome:
      "One system of record for the whole deal lifecycle — profiles, projects, transactions, targets, and exits — with role-based access and reporting the committee actually runs on.",
    points: [
      "Modules for company profiles, projects, transactions, targets, exits, and an investment-committee workflow.",
      "Trading and bank integrations plus configurable AI settings, with role-based access, auditing, and reporting dashboards.",
    ],
    featured: true,
    hue: 224,
    art: "orbit",
  },
  {
    name: "Masjid Timetable & Ads",
    kind: "Digital signage",
    tags: ["React", "Laravel", "Capacitor"],
    summary:
      "A digital-signage platform for mosques — screens, prayer times, and content all driven from one dashboard.",
    problem:
      "Mosques were updating prayer timetables and notices by hand on each display, with no way to manage several screens or locations centrally.",
    outcome:
      "Any screen pairs with a single app code and is then managed remotely — timetables, playlists, and widgets update across every masjid without anyone touching the device.",
    points: [
      "Tablet and TV screen app driven by unique app codes, controlled from a Laravel admin panel managing masjids, screens, playlists, content, and prayer times.",
      "React theme builder with configurable widgets — clock, prayer countdown, weather, Asma-ul-Husna, and audio — plus per-masjid device management, packaged to devices via Capacitor.",
    ],
    featured: true,
    hue: 168,
    art: "wave",
  },
  {
    name: "CeX Warranties",
    kind: "Legacy modernisation",
    tags: ["React 18", "Node.js", "MySQL"],
    summary:
      "A legacy PHP warranty system rebuilt on React and Node.js — without migrating the database underneath it.",
    problem:
      "Warranty administration ran on an ageing PHP application that was slow to change and awkward for staff to use day to day.",
    outcome:
      "A responsive React front end over a new Express API on the existing MySQL data — modernised with zero data migration, and bespoke logins replaced by Google OAuth 2.0.",
    points: [
      "Rebuilt warranty administration on an Express API over the existing MySQL database, secured with Google OAuth 2.0.",
      "Delivered a responsive React front end for warranty lookup, management, and reporting.",
    ],
    featured: true,
    hue: 200,
    art: "stack",
  },
  {
    name: "Resource Management System",
    kind: "Operations suite",
    tags: ["Laravel", "Ionic", "Angular", "Mobile"],
    summary:
      "A facility and service-user management platform for a multi-site accommodation provider — workforce, operations, and resident lifecycle in one place.",
    problem:
      "A multi-site provider was running rotas, visitor logs, incidents, transport, and resident records on paper and separate tools, across sites that needed to stay in sync.",
    outcome:
      "A single operations platform spanning workforce, safeguarding, transport, and procurement, with geofenced mobile clock-in and QR check-in replacing paper at every site.",
    points: [
      "Workforce management — employee profiles, contracts, rotas, and payroll, with geofenced QR clock-in/out and cross-platform mobile apps.",
      "Operations suite — visitor QR check-in/out, incident reporting with adult and child safeguarding referrals, transport dispatch (vehicles, drivers, route maps), and inventory with tablet-based maintenance tickets.",
      "Service-user lifecycle across sites — arrivals and transfers, medical and vaccination records, courses, resident meetings, and budget-controlled dry-stock procurement.",
    ],
    featured: true,
    hue: 260,
    art: "grid",
  },
  {
    name: "Scholar Management System",
    kind: "EdTech platform",
    tags: ["Laravel", "Flutter", "Mobile"],
    summary:
      "A multi-stage scholarship application and assessment platform for the Avicenna Foundation, with portals for scholars and faculty.",
    problem:
      "Scholarship intake ran across forms, email threads, and spreadsheets, making a multi-stage assessment hard to score consistently or schedule at scale.",
    outcome:
      "A staged pipeline — details, psychometric test, video, online assessment, interview — with per-stage scoring, approvals, slot scheduling, and applicant emails handled automatically.",
    points: [
      "Separate scholar and admin portals driving a staged pipeline — personal details, psychometric test, video submission, online assessment, and in-person interview.",
      "Laravel backend with role-based permissions, per-stage scoring and approvals, event and slot scheduling, and automated applicant emails; Flutter apps for scholars and faculty.",
    ],
    featured: true,
    hue: 286,
    art: "nodes",
  },
  {
    name: "Fursa Capital",
    kind: "Marketplace",
    tags: ["React", "Laravel"],
    summary:
      "A platform connecting entrepreneurs with investors, from project listing through to tracked investment.",
    problem:
      "Founders and investors had no trusted shared space to list opportunities, verify each other, and track commitments through to close.",
    outcome:
      "A verified two-sided marketplace — project posting and investment tracking for users, with an admin panel handling verification and permissions.",
    points: [
      "React front end with a Laravel REST backend, secure authentication, and role-based permissions.",
      "Project posting, investment tracking, and an admin panel for verification and user management.",
    ],
    featured: true,
    hue: 212,
    art: "bars",
  },
  {
    name: "Morahanat Strike Zone",
    kind: "Prediction game",
    tags: ["React", "TypeScript", "Capacitor"],
    summary: "A multi-sport prediction game across football, F1, and UFC.",
    points: [
      "Predictions, private leagues, and leaderboards with real-time results.",
      "Native mobile builds with authentication, push notifications, and social login.",
    ],
    hue: 12,
    art: "bars",
  },
  {
    name: "Voters Management System",
    kind: "Civic platform",
    tags: ["Laravel", "Flutter"],
    summary:
      "A voter-engagement platform with a Laravel portal, Flutter field app, and four levels of role-based access.",
    points: [
      "Four roles (admin, leader, volunteer, voter) with party management, approval workflows, and granular roles and permissions.",
      "Postcode-matched volunteers collect voter records and party-sentiment feedback in the field; bulk upload and analytics on the portal.",
    ],
    hue: 144,
    art: "nodes",
  },
  {
    name: "Qanoon AI — Legal Assistant",
    kind: "AI assistant",
    tags: ["FastAPI", "Python", "React"],
    summary: "An AI legal assistant answering questions on Pakistani law.",
    points: [
      "FastAPI backend serving an LLM-powered assistant over a curated legal knowledge base.",
      "React chat interface for legal Q&A, deployed as a public demo.",
    ],
    hue: 268,
    art: "orbit",
  },
  {
    name: "HotMic Radio",
    kind: "Social streaming",
    tags: ["React", "TypeScript", "Capacitor"],
    summary: "A social radio and DJ streaming platform with native mobile apps.",
    points: [
      "Live charts, polls, giveaways, broadcasts, and a team inbox, with moderation tooling and DJ analytics.",
      "Cross-platform iOS/Android builds via Capacitor with push notifications and social login.",
    ],
    hue: 330,
    art: "wave",
  },
  {
    name: "Food Recognition & Calorie App",
    kind: "AI mobile app",
    tags: ["Flutter", "Gemini", "TFLite"],
    summary: "AI food recognition with calorie and nutrition tracking.",
    points: [
      "Recognises food via Google Gemini and on-device TensorFlow Lite, with nutrition data from the USDA API.",
    ],
    hue: 96,
    art: "orbit",
  },
  {
    name: "Mood / Emotion Detection",
    kind: "Computer vision",
    tags: ["Python", "Keras", "OpenCV"],
    summary: "Real-time facial emotion detection from a webcam feed.",
    points: [
      "A Teachable Machine / Keras model served through OpenCV for live mood classification.",
    ],
    hue: 300,
    art: "nodes",
  },
  {
    name: "Talkative",
    kind: "Realtime chat",
    tags: ["Flutter", "Supabase"],
    summary: "A real-time chat app with authentication and messaging.",
    points: ["One-to-one and group messaging built on Supabase realtime and auth."],
    hue: 188,
    art: "wave",
  },
  {
    name: "The Quran",
    kind: "Mobile app",
    tags: ["Flutter", "Dart"],
    summary: "A Quran reader app with a clean, navigable interface.",
    points: ["Surah and verse navigation across a responsive Flutter UI."],
    hue: 158,
    art: "stack",
  },
  {
    name: "Call Recorder",
    kind: "Mobile utility",
    tags: ["Flutter", "Dart"],
    summary: "A call-recording app for Android.",
    points: ["Records and manages call audio through a simple Flutter interface."],
    hue: 32,
    art: "bars",
  },
  {
    name: "Laravel Popup Builder",
    kind: "Developer tool",
    tags: ["Laravel", "Livewire", "Blade"],
    summary: "A drag-and-drop popup and modal builder for websites.",
    points: ["Build and configure popups visually with Laravel Blade and Livewire."],
    hue: 348,
    art: "grid",
  },
  {
    name: "Pakistan Hospitals Scraper",
    kind: "Data pipeline",
    tags: ["Python", "Data pipeline"],
    summary: "Scrapes and cleans a nationwide dataset of Pakistani hospitals.",
    points: [
      "Automated scraping plus a cleaning and filtering pipeline producing a structured dataset.",
    ],
    hue: 52,
    art: "grid",
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

export type SkillGroup = {
  label: string;
  /** Key resolved to a Lucide icon in components/Skills.tsx */
  icon: "frontend" | "backend" | "mobile" | "ai" | "leadership" | "platform";
  blurb: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    icon: "frontend",
    blurb: "Typed, componentised interfaces that hold up as products grow.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack", "Angular", "Vite"],
  },
  {
    label: "Backend",
    icon: "backend",
    blurb: "APIs and data models designed for permissions, auditing, and scale.",
    items: ["Laravel", "Node.js", "Express", "Python", "FastAPI", "REST API design", "MySQL", "PHP"],
  },
  {
    label: "Mobile",
    icon: "mobile",
    blurb: "Cross-platform apps shipped to both stores, release pipeline included.",
    items: ["Flutter", "Dart", "Ionic", "Capacitor", "iOS & Android", "Push notifications", "Geofencing"],
  },
  {
    label: "AI & Data",
    icon: "ai",
    blurb: "LLM features built onto real product surfaces, not demos.",
    items: ["LLM integration", "RAG", "AI assistants", "Gemini", "TensorFlow Lite", "Data pipelines"],
  },
  {
    label: "Leadership",
    icon: "leadership",
    blurb: "Scoping, estimation, and the delivery cadence that keeps dates honest.",
    items: ["Agile / Scrum", "Sprint planning", "Estimation", "Team mentoring", "JIRA", "Trello", "MS Planner"],
  },
  {
    label: "Platform & Tools",
    icon: "platform",
    blurb: "The plumbing around a product — auth, payments, and deployment.",
    items: ["Git", "CI/CD", "Firebase", "Supabase", "Google OAuth", "Payment integrations"],
  },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#contact", label: "Contact" },
];
