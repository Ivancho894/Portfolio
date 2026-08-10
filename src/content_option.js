const meta = {
    title: "Ivan Serralta — AI SaaS Developer | Claude · RAG · Multi-tenant",
    description: "Full Stack Developer with 4 years of experience building production AI systems — multi-tenant WhatsApp bots with Claude + RAG, and custom product configurators with Stripe. Open to Software Engineer roles."
};

const introdata = {
    title: "Iván Serralta",
    animated: {
        first: "I build AI SaaS in production",
        second: "I ship multi-tenant products",
        third: "Claude + RAG on WhatsApp"
    },
    description: "Two production cases, both shipped end-to-end: TimonChat (AI WhatsApp platform) and Edge Workshop (custom product configurator).",
    your_img_url: ""
};

const dataabout = {
    title: "About Me",
    aboutme: "Full Stack Developer with 4 years of experience building production AI systems. I ship multi-tenant AI products end-to-end — WhatsApp bots powered by Claude + RAG, and custom product configurators with Stripe. Two production cases, both shipped from scope to deployment: TimonChat (AI WhatsApp platform) and Edge Workshop (custom product configurator). Open to remote roles, contractor engagements, or full-time positions. Languages: Spanish (native), English (C2 Proficient — IELTS certified)."
};

const workExperience = [
    {
        "position": "Founder & Lead Developer",
        "company": "TimonChat (own product)",
        "period": "2026 - Present",
        "icon": "./flag-for-argentina.svg",
        "points": [
            "Built and deployed a multi-tenant WhatsApp AI platform on Meta WhatsApp Cloud API, handling real customer conversations and bookings end to end.",
            "Two-step AI pipeline: GPT-4.1-mini classifies intent and retrieves context via RAG (Qdrant); Claude Sonnet generates responses with a configurable personality per tenant.",
            "Reliability engineering: deterministic tool-calling against PostgreSQL for availability/pricing (the LLM never asserts data), webhook idempotency, retry queues, and human handoff on purchase intent.",
            "Quality: LLM-as-judge evals over a golden conversation set to catch regressions before deploy."
        ],
        "location": "Remote",
        "techStack": {
            "backEnd": ["Node.js", "TypeScript", "Supabase", "PostgreSQL"],
            "ai": ["Claude API", "OpenAI API", "Qdrant (RAG)"],
            "apis": ["Meta WhatsApp Cloud API"],
        },
        info: "https://github.com/Ivancho894/timonchat-showcase/blob/main/README.md"
    },
    {
        "position": "Acting CTO & Full Stack Developer",
        "company": "OnlyGenius",
        "period": "May 2025 - May 2026",
        "icon": "./flag-for-argentina.svg",
        "points": [
            "Led the greenfield build of OnlyGenius's entire SaaS ecosystem, covering backend, frontend, automation, and infrastructure from scratch.",
            "Architected and delivered a production-ready trading dashboard with real-time MT4/MT5 metrics, historical analytics, demo mode, and automated evaluation workflows using Next.js, React, TypeScript, Tailwind, and Zustand.",
            "Developed an internal admin dashboard with granular role management, Prisma + PostgreSQL backend, Firebase Authentication integration, and comprehensive account controls and monitoring tools.",
            "Implemented supporting platforms including a marketing website, custom CRM with event-driven email automation, cron-based alerting system, and an MT4 trading bridge for direct trade execution.",
            "Set up AWS infrastructure (Lambda, EC2, S3, CloudWatch) with CI/CD pipelines, automated backups, monitoring policies, and integrated Stripe Billing for subscriptions and payments.",
            "Recruited, mentored, and led a team of 5 developers while defining technical architecture, security standards, documentation, and best practices across the organization."
        ],
        "location": "Remote",
        "techStack": {
            "frontEnd": ["Next.js", "React", "TypeScript", "Tailwind", "Zustand"],
            "backEnd": ["Node.js", "Prisma", "Stripe", "MetaApi", "Firebase"],
            "database": ["PostgreSQL", "Railway"],
            "cloud": ["AWS Lambda", "AWS EC2", "AWS S3", "CloudWatch"],
            "automation": ["Cron Jobs", "Email Workflows"],
        },
        image: ["./mermaid-diagram-2025-10-06-185116.png", "./Screenshot 2025-10-06 at 6.31.06 PM.png"],
        info: "https://drive.google.com/file/d/1EuKIlUwoJ2YmgLN6CqVozXZYbmDUFso-/view?usp=sharing"
    },
    {
        position: "Software Engineer",
        company: "Leafpress",
        period: "May 2024 - Dec 2024",
        icon: "./United-states_flag_icon_round.svg.png",
        points: [
            "Played a pivotal role in enhancing both the front-end and back-end application development.",
            "Led to a 30% improvement in user interface speed, significantly optimizing load times and reducing response delays.",
            "Implemented advanced best practices for front-end performance and refined back-end processes.",
            "Key achievements: reducing load times by 25%, enhancing user engagement by 20%, utilizing cutting-edge frameworks."
        ],
        location: "🇺🇸 San Francisco, United States",
        image: ['./64b0f881c8616ad7babbb7bb_aligned.png'],
        techStack: {
            frontEnd: ["React", "Redux", "CSS", "HTML", "Tailwind"],
            backEnd: ["Node.js", "Firebase", "Stripe", "Google Cloud"],
            database: ["PostgreSQL", "Sequelize", "AWS S3", "Firestore"],
            apis: ["GPT", "Slack", "Weather"]
        },
        info: "https://www.linkedin.com/company/getleafpress"
    },
    {
        "position": "Freelance Messaging Platform Integrator",
        "company": "Freelance",
        "period": "Feb 2025",
        "icon": "./flag-for-argentina.svg",
        "points": [
            "Integrated six e-commerce platforms into Respond.io, enabling seamless messaging automation.",
            "Developed scripts to process orders, offers, and messages through Mirakl and Respond.io APIs.",
            "Created a Google Cloud Functions system to manage scheduled message retries and failures.",
            "Implemented Firebase Firestore for real-time message tracking and error handling.",
            "Successfully integrated platforms: Sprinter, Hipercalzados, Worten, Carrefour, and Decathlon."
        ],
        "location": "Remote",
        "techStack": {
            "backEnd": ["Node.js", "Google Cloud Functions", "Firebase"],
            "database": ["Firestore"],
            "apis": ["Mirakl", "Miravia", "Respond.io"],
        },
        image: ["./image_original (1).png", "./image_original (2).png"],
        info: "https://drive.google.com/file/d/1TkwwuUORCbHGPow_lm1ZKPb3mqE_qXdFr/view?usp=sharing"
    },
    {
        "position": "Freelance API Integrations Developer",
        "company": "Freelance",
        "period": "Jan 2025",
        "icon": "./flag-for-argentina.svg",
        "points": [
            "Developed and implemented API integration with StockX, handling authentication and data retrieval.",
            "Built a robust authentication system using Flask and Auth0 to securely access StockX API.",
            "Designed scripts to automate retrieval of market data, order tracking, and listing management.",
            "Implemented a token refresh mechanism for seamless API interactions.",
            "Optimized API calls to enhance efficiency and reduce latency in data processing."
        ],
        "location": "Remote",
        "techStack": {
            "backEnd": ["Python", "Flask", "Auth0"],
            "database": ["Firestore"],
            "apis": ["StockX"],
        },
        image: ["./image_original (3).png", "./image_original (4).png"],
        info: "https://drive.google.com/file/d/1FK4aCQh6A65nPthc4nFidfouBozzrQXp/view?usp=sharing"
    },
    {
        position: "Full Stack Web Developer — Boats Marketplace",
        company: "Soy Henry Final Project",
        period: "November 2023 - December 2023",
        icon: "./flag-for-argentina.svg",
        points: [
            "Developed both back and front end of a boat buying/selling platform, leveraging Figma for design vision.",
            "Managed project frameworks with Scrum, ensuring continuous improvement and client satisfaction.",
            "Led Scrum ceremonies and provided mentorship within the team."
        ],
        location: "Buenos Aires, Argentina",
        demoUrl: "https://www.youtube.com/watch?v=lqReilpHGro",
        mediaType: "video",
        techStack: {
            frontEnd: ["React", "Redux", "CSS", "HTML"],
            backEnd: ["Node.js", "Firebase", "NodeMailer", "MercadoPago"],
            database: ["PostgreSQL", "Sequelize"]
        },
        info: "https://github.com/Ivancho894/Nautica-Rios-Web-Front"
    },
    {
        position: "Hackathon Participant",
        company: "McDonald's & Oracle",
        icon: "./flag-for-argentina.svg",
        period: "April 2023",
        points: [
            "Collaborated in a hackathon to develop an MVP for McDonald's Latin American operations.",
            "Enhanced innovation and teamwork skills under pressure."
        ],
        location: "Buenos Aires, Argentina",
        info: "https://www.linkedin.com/feed/update/urn:li:activity:7054423571581779968/"
    },
    {
        position: "Sailing Instructor",
        company: "Universidad Nacional de Córdoba",
        period: "March 2018 - December 2018",
        icon: "./flag-for-argentina.svg",
        points: [
            "Imparted knowledge to students ranging from 18 to 65 years old on sailing techniques and motorboat operation.",
            "Conducted both theoretical and practical lessons, preparing students for a comprehensive test to captain boats up to 20 meters."
        ],
        location: "Villa Carlos Paz, Córdoba, Argentina"
    }
];

const worktimeline = [
    {
        jobtitle: "Founder & Lead Developer",
        where: "TimonChat, Remote",
        date: "2026 - Present",
        description: "Own multi-tenant AI SaaS: WhatsApp assistants with Claude + RAG, live in production."
    },
    {
        jobtitle: "Acting CTO & Full Stack Developer",
        where: "OnlyGenius, Remote",
        date: "2025 - 2026",
        description: "Built the entire SaaS ecosystem from scratch — trading dashboard, CRM, AWS infra, Stripe billing."
    },
    {
        jobtitle: "Software Engineer",
        where: "Leafpress, Remote",
        date: "2024",
        description: "Enhanced UI speed by 30% and back-end processes, improving application efficiency."
    },
    {
        jobtitle: "Full Stack Web Developer",
        where: "Soy Henry, Buenos Aires",
        date: "2023",
        description: "Developed a full-stack boat marketplace with payments and real-time features."
    },
];

const skills2 = {
    programmingLanguages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Next.js", "Node.js", "NestJS", "Express"],
    cloudServices: ["AWS", "Supabase", "Vercel", "Docker"],
    ai: ["Claude API", "OpenAI API", "RAG", "Qdrant"],
    other: ["Multi-tenant architecture", "Meta WhatsApp Cloud API", "Stripe", "API Integration"]
};

const skills = [
    { name: "Claude API", value: 92 },
    { name: "OpenAI API", value: 88 },
    { name: "RAG / Qdrant", value: 85 },
    { name: "Multi-tenant Architecture", value: 86 },
    { name: "Meta WhatsApp Cloud API", value: 88 },
    { name: "Supabase / PostgreSQL", value: 85 },
    { name: "JavaScript / TypeScript", value: 90 },
    { name: "React / Next.js", value: 88 },
    { name: "Node.js / NestJS", value: 85 },
    { name: "Stripe / Payments", value: 85 },
    { name: "AWS / Cloud Infrastructure", value: 78 },
    { name: "REST & GraphQL APIs", value: 88 },
];

const services = [
    {
        title: "AI Systems & Automation",
        description: "Multi-tenant AI agents and chatbots, RAG pipelines with Qdrant, multi-model orchestration (Claude + GPT), and WhatsApp-native integrations that replace manual workflows with production-grade automation."
    },
    {
        title: "Full-Stack SaaS Development",
        description: "Dashboards, admin panels, and MVPs built on Next.js, React, and Node.js — from architecture to production, with PostgreSQL/Supabase, authentication, and role-based access built in."
    },
    {
        title: "Integrations & Payments",
        description: "Third-party API integrations, Stripe billing and checkout flows, marketplace and e-commerce automation, and AWS cloud infrastructure (Lambda, EC2, S3, CI/CD)."
    },
];

const dataportfolio = [
    {
        title: "TimonChat — AI Sales & Reservations Bot for WhatsApp",
        role: "Founder & Full Stack Developer",
        description: "Multi-tenant SaaS platform built from scratch. Two-step AI pipeline: GPT-4.1-mini classifies intent and retrieves context via RAG (Qdrant), Claude Sonnet generates responses with configurable personality per tenant. Detects purchase intent and hands off to humans automatically. Deployed and operational on Meta WhatsApp Cloud API. Currently in pilot stage, validating with early users in the sports & services sector.",
        skills: [
            "Node.js",
            "Supabase",
            "Claude API",
            "OpenAI API",
            "Qdrant (RAG)",
            "Meta WhatsApp Cloud API",
            "Multi-tenant Architecture",
            "Intent Classification",
            "Human Handoff"
        ],
        category: "AI SaaS / Multi-tenant",
        link: "https://github.com/Ivancho894/timonchat-showcase/blob/main/README.md"
    },
    {
        title: "Edge Workshop — Custom Product Configurator with Stripe",
        role: "Full Stack Developer",
        description: "Built a complete product configurator webapp for Edge Workshop, a premium custom letterbox manufacturer in Perth, Australia. Customers configure orientation, size, finish, color, font, house number, and add-ons in real time, see a live visual preview, get instant pricing, and pay through Stripe. Replaced their manual quoting process (phone + email) with a 24/7 online platform. Includes automated email confirmations and an admin panel to manage orders and pricing without developer involvement. Delivered in 5 weeks from scope to production.",
        skills: [
            "React / Next.js",
            "Node.js",
            "Stripe Integration",
            "TailwindCSS",
            "PostgreSQL / Supabase",
            "Responsive Web Design",
            "E-commerce Development",
            "Email Automation",
            "Admin Dashboard Development",
            "Real-time Pricing Calculation",
            "Custom SVG Product Visualization",
            "Deployment on Vercel",
            "API Integration"
        ],
        category: "Webapp / E-commerce",
        link: "https://www.edgeworkshop.shop/"
    },
    {
        title: "OnlyGenius — FinTech SaaS",
        description: "Full SaaS ecosystem: real-time trading dashboard, CRM, admin panel, AWS infra, and Stripe billing from scratch.",
        category: "SaaS / FinTech",
        link: "https://drive.google.com/file/d/1EuKIlUwoJ2YmgLN6CqVozXZYbmDUFso-/view"
    },
    {
        title: "E-commerce Messaging Automation",
        description: "Integrated 6 marketplace platforms (Carrefour, Decathlon, Worten) into Respond.io with full messaging automation.",
        category: "Automation / APIs",
        link: "https://drive.google.com/file/d/1TkwwuUORCbHGPow_lm1ZPb3mqE_qXdFr/view?ths=true"
    },
    {
        title: "Boats Marketplace",
        description: "Full-stack boat buying/selling platform with MercadoPago payments, real-time messaging, and Scrum-managed delivery.",
        category: "Web App",
        link: "https://github.com/Ivancho894/Nautica-Rios-Web-Front"
    }
];

const contactConfig = {
    YOUR_EMAIL: "hello@ivanserralta.com",
    YOUR_FONE: "+54 3541 566295",
    description: "Open to Software Engineer roles — remote, contractor, or full-time. Let's talk."
};

const socialprofiles = {
    github: "https://github.com/Ivancho894",
    linkedin: "https://www.linkedin.com/in/ivan-serralta",
    portfolio: "https://ivanserralta.com/"
};

const datacertificates = [
    {
        img: "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
        description: "Full Stack Developer — Soy Henry",
        link: "http://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=319584dfec91e05b2e18b62626d9f2aeac790e8bac4350f89d528ca7c727dced",
    },
    {
        img: "https://a.storyblok.com/f/79503/250x250/ddb3f17e97/group-3.png",
        description: "English C2 — EF SET",
        link: "https://www.efset.org/cert/rtNV2N",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        description: "JavaScript Algorithms & Data Structures — freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/fcc9ee02363-175a-457c-9679-2a27bc33fec9/javascript-algorithms-and-data-structures",
    },
];

const socialprofils = {
    github: "https://github.com/Ivancho894",
    instagram: "https://www.instagram.com/ivanserralta/",
    linkedin: "https://www.linkedin.com/in/ivan-serralta/",
    twitter: false,
};

const logotext = "IVAN SERRALTA";

const ui = {
    nav: {
        home: "Home",
        projects: "Projects",
        experience: "Experience",
        services: "Expertise",
        skills: "Skills",
        contact: "Contact",
        fullTimeline: "Full Timeline",
        certificates: "Certificates",
    },
    hero: {
        titleLine1: "FULL STACK",
        titleLine2: "DEVELOPER",
        tagline: "Building AI SaaS in Production.",
        description: "I build multi-tenant AI products — WhatsApp bots with Claude + RAG, and custom product configurators with Stripe.",
        ctaPrimary: "Let's talk",
        ctaSecondary: "View projects",
        stats: [
            { number: "4", label: ["YEARS OF", "EXPERIENCE"] },
            { number: "3", label: ["PRODUCTS IN", "PRODUCTION"] },
            { number: "3", label: ["COUNTRIES", "WORKED"] },
        ],
        cards: [
            { title: ["AI WHATSAPP BOTS,", "RAG, MULTI-TENANT"] },
            { title: ["CLAUDE, NODE.JS,", "SUPABASE, STRIPE"] },
        ],
    },
    sections: {
        projects: ["RECENT", "PROJECTS"],
        experience: ["WORK", "EXPERIENCE"],
        services: ["AREAS OF", "EXPERTISE"],
        skills: ["TECH", "STACK"],
        contact: ["LET'S", "TALK"],
    },
    buttons: {
        viewFullTimeline: "View full timeline",
    },
    profile: {
        available: "Open to Software Engineer roles",
        bio: "Building AI SaaS in production — multi-tenant WhatsApp bots with Claude + RAG, and custom product configurators with Stripe.",
    },
    timeline: {
        title: "My Professional Timeline",
    },
    card: {
        techStack: "Tech Stack:",
        frontEnd: "Front End",
        backEnd: "Back End",
        database: "Database",
        apis: "APIs",
        info: "+ Info",
        prevImage: "Previous image",
        nextImage: "Next image",
        showImage: "Show image",
        close: "Close",
    },
    certificatesPage: {
        title: "Certificates",
        view: "view certificate",
    },
    aboutPage: {
        title: "About me",
        servicesHeading: "services",
        skillsHeading: "Skills",
    },
    contactPage: {
        title: "Contact Me",
        getInTouch: "Get in touch",
        email: "Email:",
        phone: "Phone:",
    },
    langToggle: {
        label: "Language",
        spanish: "Español",
        english: "English",
    },
};

export {
    meta,
    introdata,
    dataabout,
    worktimeline,
    datacertificates,
    skills2,
    skills,
    services,
    dataportfolio,
    contactConfig,
    socialprofiles,
    socialprofils,
    workExperience,
    logotext,
    ui
};
