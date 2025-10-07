import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";

const serviceCatalog = [
  {
    id: "saas",
    icon: "🧩",
    title: "SaaS & Web Apps",
    subtitle: "Desarrollo de plataformas SaaS y paneles administrativos completos.",
    services: [
      {
        name: "Desarrollo de Dashboard SaaS",
        description:
          "Implementación de paneles en Next.js con autenticación, métricas clave, suscripciones y administración.",
        benefits: [
          "Login seguro con gestión de usuarios",
          "Panel de métricas en tiempo real",
          "Cobros recurrentes integrados con Stripe",
        ],
        technologies: ["Next.js", "Firebase", "Stripe"],
      },
      {
        name: "Panel Admin personalizado",
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
        name: "MVP SaaS desde cero",
        description: "Prototipo funcional y desplegado en menos de 3 semanas.",
        benefits: [
          "Arquitectura escalable desde el inicio",
          "Entrega continua y documentación",
          "Incluye pipelines de CI/CD y monitoreo",
        ],
        technologies: ["Next.js", "Node.js", "AWS", "Prisma"],
      },
    ],
    footer: {
      focus: "Enfocado en startups, agencias y empresas sin CTO.",
      cta: "Agendar reunión",
    },
  },
  {
    id: "automation",
    icon: "⚙️",
    title: "Automatización y APIs",
    subtitle: "Integraciones seguras para reducir tareas repetitivas y conectar tus sistemas.",
    services: [
      {
        name: "Integración de APIs REST / WebSockets",
        description:
          "Conecto plataformas como Stripe, Shopify, MercadoPago o MetaTrader con tu producto.",
        benefits: [
          "Logs centralizados y manejo de errores",
          "Autenticación segura y escalable",
          "Monitoreo continuo de integraciones",
        ],
        technologies: ["Node.js", "Python", "Firebase"],
      },
      {
        name: "Automatización de workflows SaaS",
        description:
          "Sincronizo CRM, facturación y notificaciones con jobs programados y webhooks.",
        benefits: [
          "Ahorro de tiempo en tareas repetitivas",
          "Reducción de errores humanos",
          "Trazabilidad completa de procesos",
        ],
        technologies: ["Node.js", "cron jobs", "n8n", "Zapier"],
      },
      {
        name: "Microservicios y scripts a medida",
        description:
          "Automatizaciones personalizadas listas para ejecutar en AWS Lambda o contenedores.",
        benefits: [
          "Escalado automático",
          "Alertas y métricas integradas",
          "Mantenimiento sencillo",
        ],
        technologies: ["AWS", "Python", "Node.js"],
      },
    ],
    footer: {
      focus: "Beneficios: ahorro de tiempo, reducción de errores y trazabilidad.",
      cta: "Solicitar presupuesto",
    },
  },
  {
    id: "trading",
    icon: "💸",
    title: "Trading & FinTech Solutions",
    subtitle: "Sistemas automatizados para trading y gestión de cuentas con métricas en vivo.",
    services: [
      {
        name: "Integración con MetaTrader (MT4/MT5)",
        description:
          "Bridge seguro para ejecutar operaciones desde web o backend hacia tus cuentas de trading.",
        benefits: [
          "Ejecución en milisegundos",
          "Logs y auditorías por operación",
          "Soporte multi-cuenta",
        ],
        technologies: ["MetaApi", "MT4", "MT5", "Node.js"],
      },
      {
        name: "Panel de métricas y control de fondeo",
        description:
          "Panel tipo FTMO con visualización de balance, equity, drawdown y objetivos personalizados.",
        benefits: [
          "Alertas en tiempo real",
          "Dashboards responsivos",
          "Reportes descargables",
        ],
        technologies: ["Next.js", "AWS", "PostgreSQL"],
      },
      {
        name: "Trading Bot personalizado",
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
      focus: "Clientes ideales: traders, brokers y startups fintech.",
      cta: "Agendar reunión",
    },
  },
  {
    id: "ecommerce",
    icon: "🛍️",
    title: "E-commerce & Marketplace Automation",
    subtitle: "Conecto tus tiendas con sistemas externos para automatizar pagos, stock y notificaciones.",
    services: [
      {
        name: "Integración Shopify / Mirakl",
        description:
          "Vinculo tu e-commerce con ERP, CRM u otros sistemas para centralizar información.",
        benefits: [
          "Catálogo sincronizado",
          "Actualización automática de stock",
          "Pedidos unificados",
        ],
        technologies: ["Shopify API", "Node.js", "Firebase"],
      },
      {
        name: "Automatización de pagos y envíos",
        description:
          "Configuro flujos con Stripe, MercadoPago y PayPal para pagos, facturas y notificaciones.",
        benefits: [
          "Pagos confirmados en tiempo real",
          "Alertas de inventario",
          "Emails transaccionales",
        ],
        technologies: ["Stripe", "MercadoPago", "PayPal"],
      },
      {
        name: "Gestión centralizada de catálogos",
        description:
          "Administra productos y pedidos desde un único panel con roles y permisos.",
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
      cta: "Solicitar presupuesto",
    },
  },
  {
    id: "devops",
    icon: "🧠",
    title: "DevOps & Cloud Infrastructure",
    subtitle: "Entornos escalables, seguros y automatizados listos para producción.",
    services: [
      {
        name: "Configuración AWS completa",
        description:
          "Infraestructura con Lambda, EC2, S3, RDS y pipelines CI/CD listos para tu equipo.",
        benefits: [
          "Infraestructura como código",
          "Seguridad y backups automatizados",
          "Monitoreo con CloudWatch",
        ],
        technologies: ["AWS", "CloudFormation", "GitHub Actions"],
      },
      {
        name: "Deploy automatizado",
        description:
          "Pipelines para Vercel, Docker o Railway con rollbacks y revisión previa.",
        benefits: [
          "Entregas continuas",
          "Versionado y aprobaciones",
          "Observabilidad integrada",
        ],
        technologies: ["Docker", "Railway", "Vercel"],
      },
      {
        name: "Monitoreo, logs y backups",
        description:
          "Implemento dashboards, alertas y backups automáticos para mantener tu uptime.",
        benefits: [
          "Alertas proactivas",
          "Historico de logs centralizado",
          "Recuperación ante desastres",
        ],
        technologies: ["CloudWatch", "Grafana", "AWS Backup"],
      },
    ],
    footer: {
      focus: "Stack: AWS, Railway, GitHub Actions, Docker, CloudWatch.",
      cta: "Agendar reunión",
    },
  },
  {
    id: "consulting",
    icon: "👨‍💼",
    title: "Consulting & Technical Leadership",
    subtitle: "Acompañamiento técnico para founders y equipos que necesitan dirección.",
    services: [
      {
        name: "CTO-as-a-Service",
        description:
          "Mentoría técnica continua para definir roadmap, contratar talento y escalar productos.",
        benefits: [
          "Reuniones semanales personalizadas",
          "Seguimiento de OKRs técnicos",
          "Red de partners y proveedores",
        ],
        technologies: ["Notion", "Linear", "Slack"],
      },
      {
        name: "Revisión de arquitectura",
        description:
          "Auditoría de código y arquitectura para detectar riesgos y oportunidades.",
        benefits: [
          "Reporte ejecutivo con hallazgos",
          "Prioridades claras y plan de acción",
          "Sesión de revisión con tu equipo",
        ],
        technologies: ["AWS", "Next.js", "Node.js"],
      },
      {
        name: "Planificación de roadmap",
        description:
          "Diseño de roadmap técnico con estimaciones, milestones y dependencias.",
        benefits: [
          "Workshops colaborativos",
          "Roadmap en herramientas colaborativas",
          "Seguimiento quincenal",
        ],
        technologies: ["Notion", "Miro", "Jira"],
      },
    ],
    footer: {
      focus: "Ideal para fundadores, startups sin equipo técnico y agencias.",
      cta: "Agendar reunión",
    },
  },
];

const extras = {
  title: "Extras / Complementos opcionales",
  icon: "🌐",
  description:
    "Complementos perfectos para ampliar tu proyecto o preparar un roadmap de mejoras.",
  services: [
    {
      name: "Setup de autenticación segura",
      technologies: ["Firebase", "Auth0", "JWT"],
    },
    {
      name: "Notificaciones push multicanal",
      technologies: ["FCM", "OneSignal"],
    },
    {
      name: "Dashboards responsivos y UI personalizada",
      technologies: ["Tailwind CSS", "shadcn/ui"],
    },
    {
      name: "Integración con Google Sheets / Notion / CRMs",
      technologies: ["Google Sheets API", "Notion API", "Zapier"],
    },
  ],
};

export const Services = () => {
  return (
    <HelmetProvider>
      <section className="services-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Servicios | {meta.title}</title>
          <meta
            name="description"
            content="Catálogo de servicios de desarrollo SaaS, automatización, trading, e-commerce y DevOps."
          />
        </Helmet>

        <div className="services-hero">
          <div className="services-hero__content">
            <span className="services-hero__eyebrow">Servicios</span>
            <h1>Construyo sistemas que automatizan negocios.</h1>
            <p>
              Desarrollo y automatizo productos digitales end-to-end: desde MVPs SaaS hasta infraestructura
              cloud y automatizaciones de trading.
            </p>
            <div className="services-hero__actions">
              <Link to="/contact" className="services-btn services-btn--primary">
                Reservá una reunión gratuita de 15 minutos
              </Link>
              <Link to="/portfolio" className="services-btn services-btn--ghost">
                Ver experiencia previa
              </Link>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {serviceCatalog.map((category) => (
            <section key={category.id} className="service-card" id={category.id}>
              <div className="service-card__header">
                <span className="service-card__icon" aria-hidden>{category.icon}</span>
                <div>
                  <h2>{category.title}</h2>
                  <p className="service-card__subtitle">{category.subtitle}</p>
                </div>
              </div>

              <div className="service-card__body">
                {category.services.map((service) => (
                  <article key={service.name} className="service-item">
                    <header>
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                    </header>
                    <div className="service-item__details">
                      <div>
                        <h4>Beneficios</h4>
                        <ul>
                          {service.benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Tecnologías</h4>
                        <div className="tech-tags">
                          {service.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <footer className="service-card__footer">
                <p>{category.footer.focus}</p>
                <Link to="/contact" className="services-btn services-btn--secondary">
                  {category.footer.cta}
                </Link>
              </footer>
            </section>
          ))}
        </div>

        <section className="service-extras" id="extras">
          <div className="service-card__header">
            <span className="service-card__icon" aria-hidden>{extras.icon}</span>
            <div>
              <h2>{extras.title}</h2>
              <p className="service-card__subtitle">{extras.description}</p>
            </div>
          </div>
          <div className="service-extras__grid">
            {extras.services.map((service) => (
              <div key={service.name} className="service-extra">
                <h3>{service.name}</h3>
                <div className="tech-tags">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="services-btn services-btn--primary">
            Consultar por complementos
          </Link>
        </section>
      </section>
    </HelmetProvider>
  );
};

export default Services;
