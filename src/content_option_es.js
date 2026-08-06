const meta = {
    title: "Iván Serralta — Desarrollador de SaaS con IA | Claude · RAG · Multi-tenant",
    description: "Construyo productos de IA multi-tenant — bots de WhatsApp con Claude + RAG y configuradores de productos a medida con Stripe. Actualmente entregando para clientes en Argentina y Australia."
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
    aboutme: "Desarrollador Full Stack construyendo SaaS de IA en producción. Entrego productos de IA multi-tenant end-to-end — bots de WhatsApp potenciados por Claude + RAG y configuradores de productos a medida con Stripe. Actualmente trabajando para clientes en Argentina y Australia. Dos casos en producción, ambos entregados desde el alcance hasta el deploy: TimonChat (plataforma de IA para WhatsApp) y Edge Workshop (configurador de productos a medida)."
};

const workExperience = [
    {
        "position": "CTO Interino & Desarrollador Full Stack",
        "company": "OnlyGenius",
        "period": "Mayo 2025 - Junio 2026",
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
        title: "SaaS y Aplicaciones Web",
        description: "Desarrollo de producto end-to-end: dashboards, paneles de administración, MVPs y plataformas SaaS escalables, desde la arquitectura hasta el deploy."
    },
    {
        title: "Automatización y Sistemas de IA",
        description: "Agentes de IA, chatbots, automatización de flujos de trabajo, pipelines con n8n e integraciones inteligentes que eliminan el trabajo manual."
    },
    {
        title: "Trading y FinTech",
        description: "Dashboards de trading en tiempo real, integraciones MT4/MT5, bots, conectividad con Interactive Brokers y sistemas de pago."
    },
    {
        title: "E-commerce y Marketplaces",
        description: "Tiendas Shopify, integraciones con marketplaces (Carrefour, Decathlon, Worten), sincronización omnicanal y automatización de pagos."
    },
    {
        title: "Cloud y DevOps",
        description: "Infraestructura AWS, pipelines de CI/CD, contenedores con Docker, monitoreo y arquitectura cloud escalable."
    },
    {
        title: "CTO como Servicio",
        description: "Liderazgo técnico para equipos en crecimiento: revisiones de arquitectura, contratación, documentación y decisiones tecnológicas estratégicas."
    },
];

const dataportfolio = [
    {
        title: "TimonChat — Bot de IA para Ventas y Reservas en WhatsApp",
        role: "Fundador & Desarrollador Full Stack",
        description: "Plataforma SaaS multi-tenant construida desde cero. Pipeline de IA en dos pasos: GPT-4.1-mini clasifica la intención y recupera contexto vía RAG (Qdrant), y Claude Sonnet genera respuestas con personalidad configurable por tenant. Detecta intención de compra y deriva a humanos automáticamente. Desplegado y operativo sobre Meta WhatsApp Cloud API. Primer piloto: UluWind, una escuela de wingfoil con venta de equipos de deportes acuáticos en Córdoba, Argentina.",
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
    description: "Abierto a proyectos freelance, colaboraciones a largo plazo y servicios de CTO-as-a-Service. Hablemos."
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
        services: "Servicios",
        skills: "Habilidades",
        contact: "Contacto",
        fullTimeline: "Trayectoria Completa",
        certificates: "Certificados",
    },
    hero: {
        titleLine1: "DESARROLLADOR",
        titleLine2: "FULL STACK",
        tagline: "Construyendo SaaS de IA en producción.",
        description: "Construyo productos de IA multi-tenant — bots de WhatsApp con Claude + RAG y configuradores de productos a medida con Stripe. Actualmente entregando para clientes en Argentina y Australia.",
        ctaPrimary: "Hablemos",
        ctaSecondary: "Ver proyectos",
        stats: [
            { number: "+5", label: ["AÑOS DE", "EXPERIENCIA"] },
            { number: "+20", label: ["PROYECTOS", "COMPLETADOS"] },
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
        services: ["QUÉ", "CONSTRUYO"],
        skills: ["STACK", "TECNOLÓGICO"],
        contact: ["VAMOS A", "HABLAR"],
    },
    buttons: {
        viewFullTimeline: "Ver trayectoria completa",
        seeAllServices: "Ver todos los servicios",
    },
    profile: {
        available: "Disponible para trabajar",
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
    servicesPage: {
        metaTitle: "Servicios",
        metaDescription: "Catálogo de servicios de desarrollo SaaS, automatización, trading, e-commerce y DevOps.",
        eyebrow: "Servicios",
        heroTitle: "Construyo sistemas que automatizan negocios.",
        heroText: "Diseño y automatizo productos digitales end-to-end: desde MVPs SaaS hasta infraestructura cloud y automatizaciones de trading.",
        emailBtn: "Envíame un email",
        pastWork: "Ver trabajos anteriores",
        benefits: "Beneficios",
        technologies: "Tecnologías",
        askAddons: "Consultar por complementos",
        modalTitle: "Ponete en contacto",
        modalSubtitle: "Escribime un email y te respondo dentro de las 24 horas.",
        modalDivider: "¿o preferís una llamada?",
        modalCall: "Agendar una llamada gratuita de 15 minutos",
        modalClose: "Cerrar",
    },
    langToggle: {
        label: "Idioma",
        spanish: "Español",
        english: "English",
    },
};

const serviceCatalog = [
    {
        id: "saas",
        icon: "🧩",
        title: "SaaS y Aplicaciones Web",
        subtitle: "Desarrollo de plataformas SaaS y dashboards de administración completos.",
        services: [
            {
                name: "Desarrollo de Dashboards SaaS",
                description:
                    "Implementación de dashboards en Next.js con autenticación, métricas clave, suscripciones y herramientas de administración.",
                benefits: [
                    "Login seguro con gestión de usuarios",
                    "Panel de métricas en tiempo real",
                    "Facturación recurrente integrada con Stripe",
                ],
                technologies: ["Next.js", "Firebase", "Stripe"],
            },
            {
                name: "Panel de Administración a Medida",
                description:
                    "Control interno con gestión de roles, permisos y reportes adaptados a tu operación.",
                benefits: [
                    "Roles avanzados y auditoría",
                    "Reportes exportables",
                    "Onboarding guiado para equipos",
                ],
                technologies: ["React", "Node.js", "Prisma", "PostgreSQL"],
            },
            {
                name: "MVP SaaS desde Cero",
                description: "Prototipo funcional lanzado en menos de 3 semanas.",
                benefits: [
                    "Arquitectura escalable desde el día uno",
                    "Entrega continua y documentación",
                    "Incluye pipelines de CI/CD y monitoreo",
                ],
                technologies: ["Next.js", "Node.js", "AWS", "Prisma"],
            },
        ],
        footer: {
            focus: "Enfocado en startups, agencias y empresas sin CTO.",
            cta: "Agendar una llamada",
        },
    },
    {
        id: "automation",
        icon: "⚙️",
        title: "Automatización y APIs",
        subtitle: "Integraciones seguras para reducir tareas repetitivas y conectar tus sistemas.",
        services: [
            {
                name: "Integraciones de APIs REST / WebSocket",
                description:
                    "Conectá plataformas como Stripe, Shopify, MercadoPago o MetaTrader con tu producto.",
                benefits: [
                    "Logs centralizados y manejo de errores",
                    "Autenticación segura y escalable",
                    "Monitoreo continuo de las integraciones",
                ],
                technologies: ["Node.js", "Python", "Firebase"],
            },
            {
                name: "Automatización de Flujos SaaS",
                description:
                    "Sincronizá CRM, facturación y notificaciones con tareas programadas y webhooks.",
                benefits: [
                    "Ahorro de tiempo en tareas repetitivas",
                    "Menos errores humanos",
                    "Trazabilidad completa de los procesos",
                ],
                technologies: ["Node.js", "cron jobs", "n8n", "Zapier"],
            },
            {
                name: "Microservicios y Scripts a Medida",
                description:
                    "Automatizaciones personalizadas listas para correr en AWS Lambda o contenedores.",
                benefits: [
                    "Escalado automático",
                    "Alertas y métricas integradas",
                    "Mantenimiento simple",
                ],
                technologies: ["AWS", "Python", "Node.js"],
            },
        ],
        footer: {
            focus: "Beneficios: ahorro de tiempo, menos errores y trazabilidad total.",
            cta: "Pedir presupuesto",
        },
    },
    {
        id: "trading",
        icon: "💸",
        title: "Soluciones de Trading y FinTech",
        subtitle: "Sistemas automatizados de trading y gestión de cuentas con métricas en vivo.",
        services: [
            {
                name: "Integración con MetaTrader (MT4/MT5)",
                description:
                    "Bridge seguro para ejecutar operaciones desde la web o el backend en tus cuentas de trading.",
                benefits: [
                    "Ejecución en milisegundos",
                    "Logs y auditoría por operación",
                    "Soporte multi-cuenta",
                ],
                technologies: ["MetaApi", "MT4", "MT5", "Node.js"],
            },
            {
                name: "Dashboard de Control de Fondeo y Métricas",
                description:
                    "Dashboard estilo FTMO con balance, equity, drawdown y objetivos personalizados.",
                benefits: [
                    "Alertas en tiempo real",
                    "Dashboards responsive",
                    "Reportes descargables",
                ],
                technologies: ["Next.js", "AWS", "PostgreSQL"],
            },
            {
                name: "Bot de Trading a Medida",
                description:
                    "Estrategias automatizadas en Python o Node.js con indicadores técnicos y control de riesgo.",
                benefits: [
                    "Backtesting con datos históricos",
                    "Gestión de riesgo configurable",
                    "Deploy automatizado",
                ],
                technologies: ["Python", "Node.js", "AWS Lambda"],
            },
        ],
        footer: {
            focus: "Ideal para traders, brokers y startups fintech.",
            cta: "Agendar una llamada",
        },
    },
    {
        id: "ecommerce",
        icon: "🛍️",
        title: "Automatización de E-commerce y Marketplaces",
        subtitle: "Conectá tus tiendas con sistemas externos para automatizar pagos, inventario y notificaciones.",
        services: [
            {
                name: "Integración Shopify / Mirakl",
                description:
                    "Vinculá tu e-commerce con ERP, CRM u otros sistemas para centralizar la información.",
                benefits: [
                    "Catálogo sincronizado",
                    "Actualización automática de inventario",
                    "Pedidos unificados",
                ],
                technologies: ["Shopify API", "Node.js", "Firebase"],
            },
            {
                name: "Automatización de Pagos y Envíos",
                description:
                    "Configurá flujos con Stripe, MercadoPago y PayPal para pagos, facturas y notificaciones.",
                benefits: [
                    "Confirmación de pagos en tiempo real",
                    "Alertas de inventario",
                    "Emails transaccionales",
                ],
                technologies: ["Stripe", "MercadoPago", "PayPal"],
            },
            {
                name: "Gestión Centralizada de Catálogo",
                description:
                    "Administrá productos y pedidos desde un único panel con roles y permisos.",
                benefits: [
                    "Curva de aprendizaje mínima",
                    "Control multi-tienda",
                    "Historial y trazabilidad",
                ],
                technologies: ["Next.js", "Node.js", "PostgreSQL"],
            },
        ],
        footer: {
            focus: "Stack sugerido: Node.js, Next.js, Shopify API, MercadoPago API, Stripe, Firebase.",
            cta: "Pedir presupuesto",
        },
    },
    {
        id: "devops",
        icon: "🧠",
        title: "DevOps e Infraestructura Cloud",
        subtitle: "Entornos escalables, seguros y automatizados, listos para producción.",
        services: [
            {
                name: "Setup Completo de AWS",
                description:
                    "Infraestructura con Lambda, EC2, S3, RDS y pipelines de CI/CD listos para tu equipo.",
                benefits: [
                    "Infraestructura como código",
                    "Seguridad y backups automatizados",
                    "Monitoreo con CloudWatch",
                ],
                technologies: ["AWS", "CloudFormation", "GitHub Actions"],
            },
            {
                name: "Deploys Automatizados",
                description:
                    "Pipelines para Vercel, Docker o Railway con rollbacks y revisión previa al release.",
                benefits: [
                    "Entrega continua",
                    "Versionado y aprobaciones",
                    "Observabilidad integrada",
                ],
                technologies: ["Docker", "Railway", "Vercel"],
            },
            {
                name: "Monitoreo, Logs y Backups",
                description:
                    "Implementación de dashboards, alertas y backups automatizados para mantener tu uptime alto.",
                benefits: [
                    "Alertas proactivas",
                    "Historial de logs centralizado",
                    "Recuperación ante desastres",
                ],
                technologies: ["CloudWatch", "Grafana", "AWS Backup"],
            },
        ],
        footer: {
            focus: "Stack: AWS, Railway, GitHub Actions, Docker, CloudWatch.",
            cta: "Agendar una llamada",
        },
    },
    {
        id: "consulting",
        icon: "👨‍💼",
        title: "Consultoría y Liderazgo Técnico",
        subtitle: "Acompañamiento técnico para founders y equipos que necesitan dirección.",
        services: [
            {
                name: "CTO-as-a-Service",
                description:
                    "Mentoría técnica continua para definir el roadmap, contratar talento y escalar productos.",
                benefits: [
                    "Reuniones semanales a medida",
                    "Seguimiento de OKRs técnicos",
                    "Red de partners y proveedores",
                ],
                technologies: ["Notion", "Linear", "Slack"],
            },
            {
                name: "Revisión de Arquitectura",
                description:
                    "Auditoría de código y arquitectura para identificar riesgos y oportunidades.",
                benefits: [
                    "Informe ejecutivo con hallazgos",
                    "Prioridades claras y plan de acción",
                    "Sesión de revisión con tu equipo",
                ],
                technologies: ["AWS", "Next.js", "Node.js"],
            },
            {
                name: "Planificación de Roadmap",
                description:
                    "Diseño de un roadmap técnico con estimaciones, hitos y dependencias.",
                benefits: [
                    "Workshops colaborativos",
                    "Roadmap en herramientas colaborativas",
                    "Seguimiento quincenal",
                ],
                technologies: ["Notion", "Miro", "Jira"],
            },
        ],
        footer: {
            focus: "Ideal para founders, startups sin equipo técnico y agencias.",
            cta: "Agendar una llamada",
        },
    },
];

const serviceExtras = {
    title: "Extras / Complementos Opcionales",
    icon: "🌐",
    description:
        "Complementos perfectos para ampliar tu proyecto o preparar un roadmap de mejoras.",
    services: [
        {
            name: "Configuración de Autenticación Segura",
            technologies: ["Firebase", "Auth0", "JWT"],
        },
        {
            name: "Notificaciones Push Multicanal",
            technologies: ["FCM", "OneSignal"],
        },
        {
            name: "Dashboards Responsive y UI a Medida",
            technologies: ["Tailwind CSS", "shadcn/ui"],
        },
        {
            name: "Integraciones con Google Sheets / Notion / CRM",
            technologies: ["Google Sheets API", "Notion API", "Zapier"],
        },
    ],
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
    ui,
    serviceCatalog,
    serviceExtras
};
