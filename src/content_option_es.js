const meta = {
    title: "Iván Serralta — Desarrollador de SaaS con IA | Claude · RAG · Multi-tenant",
    description: "Desarrollador Full Stack con 4 años de experiencia construyendo sistemas de IA en producción — bots de WhatsApp multi-tenant con Claude + RAG y configuradores de productos a medida con Stripe. Abierto a roles de Software Engineer."
};

const introdata = {
    title: "Iván Serralta",
    animated: {
        first: "Construyo SaaS de IA en producción",
        second: "Entrego productos multi-tenant",
        third: "Claude + RAG en WhatsApp"
    },
    description: "Dos casos en producción, ambos entregados end-to-end: TimonChat (plataforma de IA para WhatsApp) y Edge Workshop (configurador de productos a medida).",
    your_img_url: ""
};

const dataabout = {
    title: "Sobre mí",
    aboutme: "Desarrollador Full Stack con 4 años de experiencia construyendo sistemas de IA en producción. Entrego productos de IA multi-tenant end-to-end — bots de WhatsApp potenciados por Claude + RAG y configuradores de productos a medida con Stripe. Dos casos en producción, ambos entregados desde el alcance hasta el deploy: TimonChat (plataforma de IA para WhatsApp) y Edge Workshop (configurador de productos a medida). Abierto a roles remotos, contratos como contractor o posiciones full-time. Idiomas: español (nativo), inglés (C2 Proficient — certificado IELTS)."
};

const workExperience = [
    {
        "position": "Fundador & Desarrollador Principal",
        "company": "TimonChat (producto propio)",
        "period": "2026 - Presente",
        "icon": "./flag-for-argentina.svg",
        "points": [
            "Construí y desplegué una plataforma de IA multi-tenant para WhatsApp sobre Meta WhatsApp Cloud API, manejando conversaciones y reservas reales de clientes end-to-end.",
            "Pipeline de IA en dos pasos: GPT-4.1-mini clasifica la intención y recupera contexto vía RAG (Qdrant); Claude Sonnet genera respuestas con una personalidad configurable por tenant.",
            "Ingeniería de confiabilidad: tool-calling determinístico contra PostgreSQL para disponibilidad/precios (el LLM nunca afirma datos), idempotencia de webhooks, colas de reintentos y derivación a humanos ante intención de compra.",
            "Calidad: evals con LLM-as-judge sobre un set dorado de conversaciones para detectar regresiones antes del deploy."
        ],
        "location": "Remoto",
        "techStack": {
            "backEnd": ["Node.js", "TypeScript", "Supabase", "PostgreSQL"],
            "ai": ["Claude API", "OpenAI API", "Qdrant (RAG)"],
            "apis": ["Meta WhatsApp Cloud API"],
        },
        info: "https://github.com/Ivancho894/timonchat-showcase/blob/main/README.md"
    },
    {
        "position": "CTO Interino & Desarrollador Full Stack",
        "company": "OnlyGenius",
        "period": "Mayo 2025 - Mayo 2026",
        "icon": "./flag-for-argentina.svg",
        "points": [
            "Lideré la construcción desde cero de todo el ecosistema SaaS de OnlyGenius, cubriendo backend, frontend, automatización e infraestructura.",
            "Diseñé y entregué un dashboard de trading listo para producción con métricas MT4/MT5 en tiempo real, analítica histórica, modo demo y flujos de evaluación automatizados usando Next.js, React, TypeScript, Tailwind y Zustand.",
            "Desarrollé un dashboard de administración interno con gestión granular de roles, backend con Prisma + PostgreSQL, integración con Firebase Authentication y herramientas completas de control y monitoreo de cuentas.",
            "Implementé plataformas de soporte, incluyendo un sitio de marketing, un CRM a medida con automatización de emails basada en eventos, un sistema de alertas con cron y un bridge de trading MT4 para ejecución directa de operaciones.",
            "Configuré la infraestructura en AWS (Lambda, EC2, S3, CloudWatch) con pipelines de CI/CD, backups automatizados, políticas de monitoreo e integré Stripe Billing para suscripciones y pagos.",
            "Recluté, mentoreé y lideré un equipo de 5 desarrolladores, definiendo la arquitectura técnica, los estándares de seguridad, la documentación y las buenas prácticas de toda la organización."
        ],
        "location": "Remoto",
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
        "position": "Integrador de Plataformas de Mensajería (Freelance)",
        "company": "Freelance",
        "period": "Feb 2025",
        "icon": "./flag-for-argentina.svg",
        "points": [
            "Integré seis plataformas de e-commerce con Respond.io, habilitando la automatización completa de la mensajería.",
            "Desarrollé scripts para procesar pedidos, ofertas y mensajes a través de las APIs de Mirakl y Respond.io.",
            "Creé un sistema con Google Cloud Functions para gestionar reintentos programados y fallos de mensajes.",
            "Implementé Firebase Firestore para el seguimiento de mensajes en tiempo real y el manejo de errores.",
            "Plataformas integradas con éxito: Sprinter, Hipercalzados, Worten, Carrefour y Decathlon."
        ],
        "location": "Remoto",
        "techStack": {
            "backEnd": ["Node.js", "Google Cloud Functions", "Firebase"],
            "database": ["Firestore"],
            "apis": ["Mirakl", "Miravia", "Respond.io"],
        },
        image: ["./image_original (1).png", "./image_original (2).png"],
        info: "https://drive.google.com/file/d/1TkwwuUORCbHGPow_lm1ZKPb3mqE_qXdFr/view?usp=sharing"
    },
    {
        "position": "Desarrollador de Integraciones de APIs (Freelance)",
        "company": "Freelance",
        "period": "Ene 2025",
        "icon": "./flag-for-argentina.svg",
        "points": [
            "Desarrollé e implementé la integración con la API de StockX, gestionando la autenticación y la obtención de datos.",
            "Construí un sistema de autenticación robusto con Flask y Auth0 para acceder de forma segura a la API de StockX.",
            "Diseñé scripts para automatizar la obtención de datos de mercado, el seguimiento de órdenes y la gestión de publicaciones.",
            "Implementé un mecanismo de refresco de tokens para lograr interacciones fluidas con la API.",
            "Optimicé las llamadas a la API para mejorar la eficiencia y reducir la latencia en el procesamiento de datos."
        ],
        "location": "Remoto",
        "techStack": {
            "backEnd": ["Python", "Flask", "Auth0"],
            "database": ["Firestore"],
            "apis": ["StockX"],
        },
        image: ["./image_original (3).png", "./image_original (4).png"],
        info: "https://drive.google.com/file/d/1FK4aCQh6A65nPthc4nFidfouBozzrQXp/view?usp=sharing"
    },
    {
        position: "Ingeniero de Software",
        company: "Leafpress",
        period: "Mayo 2024 - Dic 2024",
        icon: "./United-states_flag_icon_round.svg.png",
        points: [
            "Cumplí un rol clave en la mejora del desarrollo de la aplicación, tanto en el front-end como en el back-end.",
            "Logré una mejora del 30% en la velocidad de la interfaz de usuario, optimizando significativamente los tiempos de carga y reduciendo las demoras de respuesta.",
            "Implementé buenas prácticas avanzadas de rendimiento en el front-end y refiné los procesos del back-end.",
            "Logros clave: reducción de los tiempos de carga en un 25%, aumento del engagement de usuarios en un 20% y uso de frameworks de vanguardia."
        ],
        location: "San Francisco, Estados Unidos",
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
        position: "Desarrollador Web Full Stack — Marketplace de Barcos",
        company: "Proyecto Final de Soy Henry",
        period: "Noviembre 2023 - Diciembre 2023",
        icon: "./flag-for-argentina.svg",
        points: [
            "Desarrollé el back-end y el front-end de una plataforma de compra/venta de barcos, usando Figma para la visión de diseño.",
            "Gestioné el proyecto con Scrum, asegurando la mejora continua y la satisfacción del cliente.",
            "Lideré las ceremonias de Scrum y brindé mentoría dentro del equipo."
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
        position: "Participante de Hackathon",
        company: "McDonald's & Oracle",
        icon: "./flag-for-argentina.svg",
        period: "Abril 2023",
        points: [
            "Colaboré en una hackathon para desarrollar un MVP para las operaciones de McDonald's en Latinoamérica.",
            "Potencié habilidades de innovación y trabajo en equipo bajo presión."
        ],
        location: "Buenos Aires, Argentina",
        info: "https://www.linkedin.com/feed/update/urn:li:activity:7054423571581779968/"
    },
    {
        position: "Instructor de Navegación a Vela",
        company: "Universidad Nacional de Córdoba",
        period: "Marzo 2018 - Diciembre 2018",
        icon: "./flag-for-argentina.svg",
        points: [
            "Enseñé a alumnos de entre 18 y 65 años técnicas de navegación a vela y manejo de embarcaciones a motor.",
            "Dicté clases teóricas y prácticas, preparando a los alumnos para un examen integral que habilita a capitanear embarcaciones de hasta 20 metros."
        ],
        location: "Villa Carlos Paz, Córdoba, Argentina"
    }
];

const worktimeline = [
    {
        jobtitle: "Fundador & Desarrollador Principal",
        where: "TimonChat, Remoto",
        date: "2026 - Presente",
        description: "SaaS de IA multi-tenant propio: asistentes de WhatsApp con Claude + RAG, en producción."
    },
    {
        jobtitle: "CTO Interino & Desarrollador Full Stack",
        where: "OnlyGenius, Remoto",
        date: "2025 - 2026",
        description: "Construí todo el ecosistema SaaS desde cero — dashboard de trading, CRM, infraestructura AWS y facturación con Stripe."
    },
    {
        jobtitle: "Ingeniero de Software",
        where: "Leafpress, Remoto",
        date: "2024",
        description: "Mejoré la velocidad de la interfaz en un 30% y los procesos del back-end, aumentando la eficiencia de la aplicación."
    },
    {
        jobtitle: "Desarrollador Web Full Stack",
        where: "Soy Henry, Buenos Aires",
        date: "2023",
        description: "Desarrollé un marketplace de barcos full-stack con pagos y funcionalidades en tiempo real."
    },
];

const skills2 = {
    programmingLanguages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Next.js", "Node.js", "NestJS", "Express"],
    cloudServices: ["AWS", "Supabase", "Vercel", "Docker"],
    ai: ["Claude API", "OpenAI API", "RAG", "Qdrant"],
    other: ["Arquitectura multi-tenant", "Meta WhatsApp Cloud API", "Stripe", "Integración de APIs"]
};

const skills = [
    { name: "Claude API", value: 92 },
    { name: "OpenAI API", value: 88 },
    { name: "RAG / Qdrant", value: 85 },
    { name: "Arquitectura Multi-tenant", value: 86 },
    { name: "Meta WhatsApp Cloud API", value: 88 },
    { name: "Supabase / PostgreSQL", value: 85 },
    { name: "JavaScript / TypeScript", value: 90 },
    { name: "React / Next.js", value: 88 },
    { name: "Node.js / NestJS", value: 85 },
    { name: "Stripe / Pagos", value: 85 },
    { name: "AWS / Infraestructura Cloud", value: 78 },
    { name: "APIs REST y GraphQL", value: 88 },
];

const services = [
    {
        title: "Sistemas de IA y Automatización",
        description: "Agentes de IA y chatbots multi-tenant, pipelines de RAG con Qdrant, orquestación multi-modelo (Claude + GPT) e integraciones nativas de WhatsApp que reemplazan flujos manuales con automatización de nivel productivo."
    },
    {
        title: "Desarrollo SaaS Full-Stack",
        description: "Dashboards, paneles de administración y MVPs construidos con Next.js, React y Node.js — desde la arquitectura hasta producción, con PostgreSQL/Supabase, autenticación y control de acceso por roles incluidos."
    },
    {
        title: "Integraciones y Pagos",
        description: "Integraciones con APIs de terceros, facturación y checkout con Stripe, automatización de marketplaces y e-commerce, e infraestructura cloud en AWS (Lambda, EC2, S3, CI/CD)."
    },
];

const dataportfolio = [
    {
        title: "TimonChat — Bot de IA para Ventas y Reservas en WhatsApp",
        role: "Fundador & Desarrollador Full Stack",
        description: "Plataforma SaaS multi-tenant construida desde cero. Pipeline de IA en dos pasos: GPT-4.1-mini clasifica la intención y recupera contexto vía RAG (Qdrant), y Claude Sonnet genera respuestas con personalidad configurable por tenant. Detecta intención de compra y deriva a humanos automáticamente. Desplegado y operativo sobre Meta WhatsApp Cloud API. Actualmente en etapa piloto, validando con usuarios tempranos en el sector de deportes y servicios.",
        skills: [
            "Node.js",
            "Supabase",
            "Claude API",
            "OpenAI API",
            "Qdrant (RAG)",
            "Meta WhatsApp Cloud API",
            "Arquitectura Multi-tenant",
            "Clasificación de Intención",
            "Derivación a Humanos"
        ],
        category: "SaaS de IA / Multi-tenant",
        link: "https://github.com/Ivancho894/timonchat-showcase/blob/main/README.md"
    },
    {
        title: "Edge Workshop — Configurador de Productos a Medida con Stripe",
        role: "Desarrollador Full Stack",
        description: "Webapp completa de configuración de productos para Edge Workshop, un fabricante premium de buzones personalizados en Perth, Australia. Los clientes configuran orientación, tamaño, acabado, color, tipografía, número de casa y extras en tiempo real, ven una vista previa visual en vivo, obtienen el precio al instante y pagan con Stripe. Reemplazó su proceso manual de cotización (teléfono + email) por una plataforma online 24/7. Incluye emails de confirmación automáticos y un panel de administración para gestionar pedidos y precios sin depender de un desarrollador. Entregado en 5 semanas, desde el alcance hasta producción.",
        skills: [
            "React / Next.js",
            "Node.js",
            "Integración con Stripe",
            "TailwindCSS",
            "PostgreSQL / Supabase",
            "Diseño Web Responsive",
            "Desarrollo E-commerce",
            "Automatización de Emails",
            "Desarrollo de Panel de Administración",
            "Cálculo de Precios en Tiempo Real",
            "Visualización de Producto en SVG",
            "Deploy en Vercel",
            "Integración de APIs"
        ],
        category: "Webapp / E-commerce",
        link: "https://www.edgeworkshop.shop/"
    },
    {
        title: "OnlyGenius — SaaS FinTech",
        description: "Ecosistema SaaS completo: dashboard de trading en tiempo real, CRM, panel de administración, infraestructura AWS y facturación con Stripe, todo desde cero.",
        category: "SaaS / FinTech",
        link: "https://drive.google.com/file/d/1EuKIlUwoJ2YmgLN6CqVozXZYbmDUFso-/view"
    },
    {
        title: "Automatización de Mensajería para E-commerce",
        description: "Integración de 6 plataformas de marketplace (Carrefour, Decathlon, Worten) con Respond.io con automatización completa de mensajería.",
        category: "Automatización / APIs",
        link: "https://drive.google.com/file/d/1TkwwuUORCbHGPow_lm1ZPb3mqE_qXdFr/view?ths=true"
    },
    {
        title: "Marketplace de Barcos",
        description: "Plataforma full-stack de compra/venta de barcos con pagos por MercadoPago, mensajería en tiempo real y entrega gestionada con Scrum.",
        category: "Aplicación Web",
        link: "https://github.com/Ivancho894/Nautica-Rios-Web-Front"
    }
];

const contactConfig = {
    YOUR_EMAIL: "hello@ivanserralta.com",
    YOUR_FONE: "+54 3541 566295",
    description: "Abierto a roles de Software Engineer — remoto, contractor o full-time. Hablemos."
};

const socialprofiles = {
    github: "https://github.com/Ivancho894",
    linkedin: "https://www.linkedin.com/in/ivan-serralta",
    portfolio: "https://ivanserralta.com/"
};

const datacertificates = [
    {
        img: "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
        description: "Desarrollador Full Stack — Soy Henry",
        link: "http://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=319584dfec91e05b2e18b62626d9f2aeac790e8bac4350f89d528ca7c727dced",
    },
    {
        img: "https://a.storyblok.com/f/79503/250x250/ddb3f17e97/group-3.png",
        description: "Inglés C2 — EF SET",
        link: "https://www.efset.org/cert/rtNV2N",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        description: "Algoritmos y Estructuras de Datos en JavaScript — freeCodeCamp",
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
        home: "Inicio",
        projects: "Proyectos",
        experience: "Experiencia",
        services: "Especialidades",
        skills: "Habilidades",
        contact: "Contacto",
        fullTimeline: "Trayectoria Completa",
        certificates: "Certificados",
    },
    hero: {
        titleLine1: "DESARROLLADOR",
        titleLine2: "FULL STACK",
        tagline: "Construyendo SaaS de IA en producción.",
        description: "Construyo productos de IA multi-tenant — bots de WhatsApp con Claude + RAG y configuradores de productos a medida con Stripe.",
        ctaPrimary: "Hablemos",
        ctaSecondary: "Ver proyectos",
        stats: [
            { number: "4", label: ["AÑOS DE", "EXPERIENCIA"] },
            { number: "3", label: ["PRODUCTOS EN", "PRODUCCIÓN"] },
            { number: "3", label: ["PAÍSES", "TRABAJADOS"] },
        ],
        cards: [
            { title: ["BOTS DE IA PARA WHATSAPP,", "RAG, MULTI-TENANT"] },
            { title: ["CLAUDE, NODE.JS,", "SUPABASE, STRIPE"] },
        ],
    },
    sections: {
        projects: ["PROYECTOS", "RECIENTES"],
        experience: ["EXPERIENCIA", "LABORAL"],
        services: ["ÁREAS DE", "ESPECIALIDAD"],
        skills: ["STACK", "TECNOLÓGICO"],
        contact: ["VAMOS A", "HABLAR"],
    },
    buttons: {
        viewFullTimeline: "Ver trayectoria completa",
    },
    profile: {
        available: "Abierto a roles de Software Engineer",
        bio: "Construyendo SaaS de IA en producción — bots de WhatsApp multi-tenant con Claude + RAG y configuradores de productos a medida con Stripe.",
    },
    timeline: {
        title: "Mi Trayectoria Profesional",
    },
    card: {
        techStack: "Stack Tecnológico:",
        frontEnd: "Front End",
        backEnd: "Back End",
        database: "Base de Datos",
        apis: "APIs",
        info: "+ Info",
        prevImage: "Imagen anterior",
        nextImage: "Imagen siguiente",
        showImage: "Mostrar imagen",
        close: "Cerrar",
    },
    certificatesPage: {
        title: "Certificados",
        view: "ver certificado",
    },
    aboutPage: {
        title: "Sobre mí",
        servicesHeading: "servicios",
        skillsHeading: "Habilidades",
    },
    contactPage: {
        title: "Contacto",
        getInTouch: "Ponete en contacto",
        email: "Email:",
        phone: "Teléfono:",
    },
    langToggle: {
        label: "Idioma",
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
