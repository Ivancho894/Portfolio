const meta = {
    title: "Iván Serralta — Full-Stack Engineer & Acting CTO",
    description: "Full-Stack Engineer and Acting CTO. I build scalable SaaS, fintech platforms, and AI-driven systems — from architecture to deployment. Engineer mindset. Founder vision. Operator execution."
};

const introdata = {
    title: "Iván Serralta",
    animated: {
        first: "I build SaaS products",
        second: "I lead technical teams",
        third: "I turn chaos into scalable systems"
    },
    description: "Passionate about creating systems that convert operational chaos into scalable businesses. Specialized in full-stack development, automation, complex integrations, fintech, e-commerce, and AI-driven systems.",
    your_img_url: ""
};

const dataabout = {
    title: "About Me",
    aboutme: "Full-Stack Engineer and Acting CTO with hands-on experience turning traditional businesses into scalable SaaS ecosystems. I specialize in fintech, e-commerce automation, and AI-driven systems — from architecture to deployment. Hybrid profile: engineer, product builder, tech leader, and business operator. With an entrepreneurial mindset, strong results orientation, and the ability to find opportunities where others see operational friction. Passionate about sailing and nautical navigation — reading complex variables, making real-time decisions, and maintaining focus under pressure."
};

const workExperience = [
    {
        "position": "Acting CTO & Full Stack Developer",
        "company": "OnlyGenius",
        "period": "May 2025 - present",
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
        location: "San Francisco, United States",
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
        jobtitle: "Acting CTO & Full Stack Developer",
        where: "OnlyGenius, Remote",
        date: "2025",
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
    cloudServices: ["AWS", "Google Cloud", "Firebase", "Docker", "Vercel"],
    automation: ["n8n", "GPT", "Claude", "Gemini"],
    other: ["Scrum & Agile", "API Integration", "System Architecture"]
};

const skills = [
    { name: "JavaScript / TypeScript", value: 90 },
    { name: "React / Next.js", value: 88 },
    { name: "Node.js / NestJS", value: 85 },
    { name: "Python / Flask", value: 75 },
    { name: "AWS / Cloud Infrastructure", value: 78 },
    { name: "PostgreSQL / MongoDB", value: 80 },
    { name: "Docker / DevOps", value: 70 },
    { name: "AI & Automation (n8n, GPT)", value: 82 },
    { name: "Stripe / Payments", value: 80 },
    { name: "REST & GraphQL APIs", value: 88 },
    { name: "Figma / Product Design", value: 72 },
    { name: "Scrum / Tech Leadership", value: 85 },
];

const services = [
    {
        title: "SaaS & Web Apps",
        description: "End-to-end product development: dashboards, admin panels, MVPs, and scalable SaaS platforms from architecture to deployment."
    },
    {
        title: "Automation & AI Systems",
        description: "AI agents, chatbots, workflow automation, n8n pipelines, and intelligent integrations that eliminate manual work."
    },
    {
        title: "Trading & FinTech",
        description: "Real-time trading dashboards, MT4/MT5 integrations, bots, Interactive Brokers connectivity, and payment systems."
    },
    {
        title: "E-commerce & Marketplaces",
        description: "Shopify stores, marketplace integrations (Carrefour, Decathlon, Worten), omnichannel sync, and payment automation."
    },
    {
        title: "Cloud & DevOps",
        description: "AWS infrastructure, CI/CD pipelines, containerization with Docker, monitoring, and scalable cloud architecture."
    },
    {
        title: "CTO as a Service",
        description: "Technical leadership for growing teams: architecture reviews, hiring, documentation, and strategic technology decisions."
    },
];

const dataportfolio = [
    {
        title: "OnlyGenius — FinTech SaaS",
        description: "Full SaaS ecosystem: real-time trading dashboard, CRM, admin panel, AWS infra, and Stripe billing from scratch.",
        category: "SaaS / FinTech",
        link: "https://github.com/Ivancho894"
    },
    {
        title: "E-commerce Messaging Automation",
        description: "Integrated 6 marketplace platforms (Carrefour, Decathlon, Worten) into Respond.io with full messaging automation.",
        category: "Automation / APIs",
        link: "https://github.com/Ivancho894"
    },
    {
        title: "AI Restaurant Call Manager",
        description: "AI-powered call manager that handles gastronomy reservations automatically via voice and messaging.",
        category: "AI / Automation",
        link: "https://github.com/Ivancho894"
    },
    {
        title: "Nautical School AI Chatbot",
        description: "Intelligent chatbot assistant for a nautical school — answers questions, schedules lessons, manages enrollments.",
        category: "AI / Education",
        link: "https://github.com/Ivancho894"
    },
    {
        title: "Boats Marketplace",
        description: "Full-stack boat buying/selling platform with MercadoPago payments, real-time messaging, and Scrum-managed delivery.",
        category: "Web App",
        link: "https://github.com/Ivancho894/Nautica-Rios-Web-Front"
    },
    {
        title: "Automated Trading Bot",
        description: "Automated trading bot with MetaTrader and Interactive Brokers integrations for algorithmic strategy execution.",
        category: "FinTech / Automation",
        link: "https://github.com/Ivancho894"
    }
];

const contactConfig = {
    YOUR_EMAIL: "serralta.ivan@gmail.com",
    YOUR_FONE: "+54 354 156 6295",
    description: "Open to freelance projects, long-term partnerships, and CTO-as-a-Service engagements. Let's talk."
};

const socialprofiles = {
    github: "https://github.com/Ivancho894",
    linkedin: "https://www.linkedin.com/in/ivan-serralta",
    portfolio: "https://serradev.netlify.app/"
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

const logotext = "SERRADEV";

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
    logotext
};
