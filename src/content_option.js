const meta = {
    title: "Ivan Serralta",
    description: "I’m Ivan Serralta, a Systems of Information Engineer student, Full Stack Developer, and Agile Coach passionate about technology and design."
};

const introdata = {
    title: "I’m Ivan Serralta",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps"
    },
    description: "Transform your digital vision into reality with cutting-edge web solutions crafted for optimal user engagement and aesthetic precision. Harness my expertise in dynamic and responsive design to elevate your project. Ready to innovate? Let’s connect and make your ideas come to life!",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d"
};

const dataabout = {
    title: "About Me",
    aboutme: "Hello! I’m a Full Stack Developer and 3D Designer with extensive experience in creating dynamic and responsive web solutions using HTML, CSS, Python, JavaScript, React, and Node.js. I am skilled in leveraging modern technologies like Redux, ES6, and Firebase to build robust applications. My passion lies in turning innovative ideas into real-world applications with a keen eye for design."
};

const workExperience = [

    {
    "position": "CTO & Full Stack Developer",
    "company": "OnlyGenius",
    "period": "2023 - Presente",
    "icon": "./flag-for-argentina.svg",
    "points": [
      "Asumí el rol de CTO de facto para construir desde cero toda la infraestructura tecnológica y digital de la empresa, diseñando un ecosistema SaaS escalable que soporta las operaciones de OnlyGenius.",
      "Contraté, lideré y entrené a desarrolladores junior, definiendo arquitectura técnica, estándares de desarrollo, seguridad y procesos CI/CD para todas las áreas del producto.",
      "Desarrollé un dashboard avanzado de trading con modo demo sin registro, integrando métricas en tiempo real y gráficos históricos mediante la API de MetaApi y cuentas conectadas a MT4/MT5.",
      "Implementé un panel administrativo integral para gestionar usuarios, cuentas, contratos, finanzas y logs del sistema con control granular de roles y permisos sobre Firebase Authentication.",
      "Diseñé y desplegué un CRM propio con automatización de correos y notificaciones en tiempo real, integrando FCM y colas de procesamiento para eventos masivos.",
      "Orquesté sistemas de automatización y cron jobs para monitorear métricas de fondeo, generar alertas y mantener snapshots diarios actualizados.",
      "Gestioné infraestructura y DevOps en AWS con pipelines CI/CD, almacenamiento seguro y planes de recuperación, incluyendo integración con Railway para bases de datos PostgreSQL.",
      "Integré Stripe Billing para pagos y suscripciones, validando acceso a nuevas fases y ofreciendo seguimiento administrativo de renovaciones y cancelaciones."
    ],
    "location": "Remote",
    "techStack": {
      "frontEnd": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
      "backEnd": ["Node.js", "Prisma", "Firebase", "AWS Lambda", "MetaApi"],
      "database": ["PostgreSQL", "Railway"],
      "apis": ["MetaTrader 4", "MetaTrader 5", "Firebase Cloud Messaging", "Stripe"]
    }
    },
    {
    "position": "Freelance Messaging Platform Integrator",
    "company": "Freelance service",
    "period": "Feb 2025",
    "icon": "./flag-for-argentina.svg",
    "points": [
    "Integrated six e-commerce platforms into Respond.io, enabling seamless messaging automation.",
    "Developed scripts to process orders, offers, and messages through Mirakl and Respond.io APIs.",
    "Created a Google Cloud Functions system to manage scheduled message retries and failures.",
    "Implemented Firebase Firestore for real-time message tracking and error handling.",
    "Successfully integrated platforms such as Sprinter, Hipercalzados, Worten, Carrefour, and Decathlon."
    ],
    "location": "Remote",
    "techStack": {
    "backEnd": ["NodeJS", "Google Cloud Functions", "Firebase"],
    "database": ["Firestore"],
    "apis": ["Mirakl", "Miravia", "Respond.io"]
    }
    },
    {
      "position": "Freelance API Integrations Developer",
      "company": "Freelance service",
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
      "apis": ["StockX"]
      }
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
      "Increased the overall efficiency of the applications.",
      "Key achievements include reducing load times by 25%, enhancing user engagement by 20%, and utilizing cutting-edge frameworks."
    ],
    location: "San Francisco, United States",
    image: ['./666bc8c862aae7b03514dd75_Opengraph (1).png', "./United-states_flag_icon_round.svg.png"],
    techStack: {
      frontEnd: ["ReactJS", "Redux", "CSS", "HTML", "Tailwind"],
      backEnd: ["NodeJS", "Firebase", "Stripe", "Google server"],
      database: ["PostgreSQL", "Sequelize", "AWS S3", "Google Cloud", "Firestore"],
      apis: ["GPT", "Slack", "Weather"]
    },
    info:"https://www.leafpress.ai/"

  },
  {
    position: "Full Stack Web Developer (Boats market place)",
    company: "Soy Henry final project",
    period: "November 2023 - December 2023",
    icon: "./flag-for-argentina.svg",
    points: [
      "Developed both the back and front end of the platform, leveraging Figma for a clearer understanding of the client's objectives and design vision.",
      "Managed project frameworks with Scrum, ensuring continuous improvement and client satisfaction.",
      "Streamlined client communication, leading Scrum ceremonies, and provided mentorship within the team."
    ],
    location: "Buenos Aires, Argentina",
    year: "2024",
    demoUrl: "https://www.youtube.com/watch?v=lqReilpHGro",
    mediaType: "video",
    techStack: {
      frontEnd: ["ReactJS", "Redux", "CSS", "HTML"],
      backEnd: ["NodeJS", "Firebase", "NodeMailer", "MercadoPago"],
      database: ["PostgreSQL", "Sequelize"]
    },
    info:"https://github.com/Ivancho894/Nautica-Rios-Web-Front"
  },
  {
    position: "Full Stack Web Developer (F1 Drivers Fun Page)",
    company: "Soy Henry Individual Project",
    period: "September 2023",
    points: [
      "Involved advanced features like filtering, external API integration, relational databases, and controlled forms to provide users with a seamless experience."
    ],
    icon: "./flag-for-argentina.svg",
    location: "Buenos Aires, Argentina",
    year: "2024",
    demoUrl: "https://youtu.be/dCL7FZogGEY",
    techStack: {
      frontEnd: ["ReactJS", "Redux", "CSS", "HTML"],
      backEnd: ["NodeJS"],
      database: ["PostgreSQL", "Sequelize"]
    },
    info:"https://github.com/Ivancho894/cr-pi-drivers-main-ivancho894"
  },
    {
      position: "Hackathon Participant",
      company: "McDonald's and Oracle",
      icon:"./flag-for-argentina.svg",
      period: "April 2023",
      points: [
        "Collaborated in a hackathon to develop a Minimum Viable Product (MVP) for McDonald's Latin American operations.",
        "Enhanced innovation and teamwork skills."
      ],
      location: "Buenos Aires, Argentina",
      year: "2023",
      info:"https://www.linkedin.com/feed/update/urn:li:activity:7054423571581779968/"
    },
    {
      position: "Restaurant Team Member",
      company: "Vail",
      period: "December 2021 - April 2022",
      icon: "./United-states_flag_icon_round.svg.png",
      points: [
        "Orchestrated the seamless flow of operations from kitchen to table in a bustling restaurant.",
        "Coordinated orders, ensured each dish met quality standards, and occasionally stepped into various BOH stations to assist in maintaining efficiency and quality throughout the kitchen."
      ],
      location: "Park City, Utah, United States",
    },
    {
      position: "Sailing Instructor",
      company: "Universidad Nacional de Córdoba",
      period: "March 2018 - December 2018",
      icon: "./flag-for-argentina.svg",
      points: [
        "Imparted knowledge to students ranging from 18 to 65 years old on sailing techniques and motorboat operation.",
        "Conducted both theoretical and practical lessons, preparing students for a comprehensive test enabling them to captain boats up to 20 meters in length."
      ],
      location: "Villa Carlos Paz, Córdoba, Argentina"
    },
    {
      position: "Information Technology Intern",
      company: "Municipality of Villa Carlos Paz",
      icon:"./flag-for-argentina.svg",
      period: "August 2018 - October 2018",
      points: [
        "Provided comprehensive IT support, troubleshooting hardware, software, and ensuring smooth operation of technology infrastructure."
      ],
      location: "Córdoba, Argentina",
      year: "2018"
    }
  ];
const worktimeline = [
    {
        jobtitle: "Full Stack Developer",
        where: "Leafpress, Remote",
        date: "2024",
        description: "Enhanced UI speed and back-end processes, improving application efficiency by 30%."
    },
    {
        jobtitle: "Full Stack Web Developer",
        where: "Henry, Buenos Aires",
        date: "2023",
        description: "Developed a boat marketplace and an F1 fan page, managing both back and front-end operations."
    },
    {
        jobtitle: "IT Intern",
        where: "Municipalidad de Villa Carlos Paz",
        date: "2018",
        description: "Supported IT infrastructure, troubleshooting software and hardware issues."
    },
];

const skills2 = {
    programmingLanguages: ["HTML", "CSS", "JavaScript", "Python"],
    frameworks: ["React", "Node.js", "Redux"],
    cloudServices: ["AWS", "Google Cloud", "Firebase"],
    designTools: ["Figma", "Blender", "Adobe Illustrator"],
    other: ["Scrum and Agile Methodologies", "API Integration", "Performance Optimization"]
};

const skills = [
  { name: "JavaScript", value: 85 },
  { name: "Python", value: 75 },
  { name: "React", value: 70 },
  { name: "Node.js", value: 65 },
  { name: "HTML/CSS", value: 90 },
  { name: "Scrum/Agile", value: 80 },
  { name: "Figma", value: 75 },
  { name: "Redux", value: 75 }, // Assuming proficiency similar to React and Figma
  { name: "Sequelize", value: 65 }, // Based on your experience with Node.js and databases
  { name: "Firebase", value: 70 }, // Given your backend experience
  { name: "GPT API", value: 70 }, // Based on API integration proficiency
  { name: "Tailwind CSS", value: 70 }, // Similar to CSS but specific framework proficiency
  { name: "AWS", value: 65 }, // General cloud service proficiency
  { name: "Google Cloud", value: 65 }, // Similar to AWS proficiency
  { name: "Stripe", value: 60 }, // Payment gateway integration skill
  { name: "Slack API", value: 65 }, // Communication tool integration skill
  { name: "Weather APIs", value: 65 } // General API integration skill
];

const services = [
    {
        title: "Web Development",
        description: "Expert in crafting innovative web solutions that ensure robust performance and user-friendly experiences."
    },
    {
        title: "Project Management",
        description: "eaching and implementing Scrum and Agile frameworks, ensuring efficient project execution and team collaboration."
    },
    {
      title:"Cloud Technologies",
      description:"Experienced with Google Cloud and AWS, proficient in managing services like Firebase, Firestore, and Lambda functions."
    },
    {
      title:"API Integration",
      description:"Adept at integrating and customizing APIs, including the GPT API, to enhance application functionality and AI capabilities."
    },
    {
      title:"Design to Development",
      description:"Skilled in designing UI components in Figma and translating them into fully functional web elements using JavaScript or TypeScript, complemented with CSS or Tailwind CSS."
    },
    {
      title:"Collaborative Projects",
      description:"Open to learning new technologies not mentioned here and experienced in collaborations that push the boundaries of web technology and design."
    },
    
];

const dataportfolio = [
    {
        img: "https://example.com/link-to-image.jpg",
        description: "E-commerce Web Application",
        link: "https://github.com/yourgithubusername/project-link"
    },
    {
        img: "https://example.com/link-to-image.jpg",
        description: "F1 Drivers Fun Page",
        link: "https://github.com/yourgithubusername/another-project-link"
    }
];

const contactConfig = {
    YOUR_EMAIL: "serralta.ivan@gmail.com",
    YOUR_FONE: "+543541566295",
    description: "Reach out via email or phone to discuss potential projects or connect with me on LinkedIn."
};

const socialprofiles = {
    github: "https://github.com/Ivancho894",
    linkedin: "https://www.linkedin.com/in/ivan-serralta",
    portfolio: "https://serradev.netlify.app/"
};
const datacertificates = [{
    img: "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    description: "Full Stack Developer.",
    link: "http://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=319584dfec91e05b2e18b62626d9f2aeac790e8bac4350f89d528ca7c727dced",
},
{
    img: "https://a.storyblok.com/f/79503/250x250/ddb3f17e97/group-3.png",
    description: "English C2",
    link: "https://www.efset.org/cert/rtNV2N",
},    
{
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    description: "JavaScript Algorithms and Data Structures",
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
// meta,
// dataabout,
// dataportfolio,
// datacertificates,
// worktimeline,
// skills,
// services,
// introdata,
// contactConfig,
// socialprofils,
// logotext,
// workExperience,
// skills2