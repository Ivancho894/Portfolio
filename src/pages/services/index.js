import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";

const CALENDLY_URL = "https://calendly.com/serralta-ivan/personal";

const serviceCatalog = [
  {
    id: "saas",
    icon: "🧩",
    title: "SaaS & Web Apps",
    subtitle: "Development of SaaS platforms and complete admin dashboards.",
    services: [
      {
        name: "SaaS Dashboard Development",
        description:
          "Implementation of dashboards in Next.js with authentication, key metrics, subscriptions, and admin tools.",
        benefits: [
          "Secure login with user management",
          "Real-time metrics panel",
          "Recurring billing integrated with Stripe",
        ],
        technologies: ["Next.js", "Firebase", "Stripe"],
      },
      {
        name: "Custom Admin Panel",
        description:
          "Internal control with role management, permissions, and reports tailored to your operation.",
        benefits: [
          "Advanced roles and auditing",
          "Exportable reports",
          "Guided onboarding for teams",
        ],
        technologies: ["React", "Node.js", "Prisma", "PostgreSQL"],
      },
      {
        name: "SaaS MVP from Scratch",
        description: "Functional prototype launched in under 3 weeks.",
        benefits: [
          "Scalable architecture from day one",
          "Continuous delivery and documentation",
          "Includes CI/CD pipelines and monitoring",
        ],
        technologies: ["Next.js", "Node.js", "AWS", "Prisma"],
      },
    ],
    footer: {
      focus: "Focused on startups, agencies, and companies without a CTO.",
      cta: "Book a call",
    },
  },
  {
    id: "automation",
    icon: "⚙️",
    title: "Automation & APIs",
    subtitle: "Secure integrations to cut repetitive tasks and connect your systems.",
    services: [
      {
        name: "REST / WebSocket API Integrations",
        description:
          "Connect platforms like Stripe, Shopify, MercadoPago, or MetaTrader with your product.",
        benefits: [
          "Centralized logs and error handling",
          "Secure and scalable authentication",
          "Continuous integration monitoring",
        ],
        technologies: ["Node.js", "Python", "Firebase"],
      },
      {
        name: "SaaS Workflow Automation",
        description:
          "Sync CRM, billing, and notifications with scheduled jobs and webhooks.",
        benefits: [
          "Time savings on repetitive tasks",
          "Reduced human errors",
          "Full process traceability",
        ],
        technologies: ["Node.js", "cron jobs", "n8n", "Zapier"],
      },
      {
        name: "Custom Microservices and Scripts",
        description:
          "Custom automations ready to run on AWS Lambda or containers.",
        benefits: [
          "Automatic scaling",
          "Built-in alerts and metrics",
          "Simple maintenance",
        ],
        technologies: ["AWS", "Python", "Node.js"],
      },
    ],
    footer: {
      focus: "Benefits: time savings, fewer errors, and full traceability.",
      cta: "Request a quote",
    },
  },
  {
    id: "trading",
    icon: "💸",
    title: "Trading & FinTech Solutions",
    subtitle: "Automated systems for trading and account management with live metrics.",
    services: [
      {
        name: "MetaTrader Integration (MT4/MT5)",
        description:
          "Secure bridge to execute trades from web or backend into your trading accounts.",
        benefits: [
          "Millisecond execution",
          "Logs and audits per trade",
          "Multi-account support",
        ],
        technologies: ["MetaApi", "MT4", "MT5", "Node.js"],
      },
      {
        name: "Funding Control & Metrics Dashboard",
        description:
          "FTMO-style dashboard with balance, equity, drawdown, and custom goals.",
        benefits: [
          "Real-time alerts",
          "Responsive dashboards",
          "Downloadable reports",
        ],
        technologies: ["Next.js", "AWS", "PostgreSQL"],
      },
      {
        name: "Custom Trading Bot",
        description:
          "Automated strategies in Python or Node.js with technical indicators and risk control.",
        benefits: [
          "Backtesting with historical data",
          "Configurable risk management",
          "Automated deployment",
        ],
        technologies: ["Python", "Node.js", "AWS Lambda"],
      },
    ],
    footer: {
      focus: "Ideal for traders, brokers, and fintech startups.",
      cta: "Book a call",
    },
  },
  {
    id: "ecommerce",
    icon: "🛍️",
    title: "E-commerce & Marketplace Automation",
    subtitle: "Connect your stores with external systems to automate payments, inventory, and notifications.",
    services: [
      {
        name: "Shopify / Mirakl Integration",
        description:
          "Link your e-commerce with ERP, CRM, or other systems to centralize information.",
        benefits: [
          "Synced catalog",
          "Automatic inventory updates",
          "Unified orders",
        ],
        technologies: ["Shopify API", "Node.js", "Firebase"],
      },
      {
        name: "Payments and Shipping Automation",
        description:
          "Configure flows with Stripe, MercadoPago, and PayPal for payments, invoices, and notifications.",
        benefits: [
          "Real-time payment confirmation",
          "Inventory alerts",
          "Transactional emails",
        ],
        technologies: ["Stripe", "MercadoPago", "PayPal"],
      },
      {
        name: "Centralized Catalog Management",
        description:
          "Manage products and orders from a single panel with roles and permissions.",
        benefits: [
          "Minimal learning curve",
          "Multi-store control",
          "History and traceability",
        ],
        technologies: ["Next.js", "Node.js", "PostgreSQL"],
      },
    ],
    footer: {
      focus: "Suggested stack: Node.js, Next.js, Shopify API, MercadoPago API, Stripe, Firebase.",
      cta: "Request a quote",
    },
  },
  {
    id: "devops",
    icon: "🧠",
    title: "DevOps & Cloud Infrastructure",
    subtitle: "Scalable, secure, and automated environments ready for production.",
    services: [
      {
        name: "Full AWS Setup",
        description:
          "Infrastructure with Lambda, EC2, S3, RDS, and CI/CD pipelines ready for your team.",
        benefits: [
          "Infrastructure as code",
          "Automated security and backups",
          "Monitoring with CloudWatch",
        ],
        technologies: ["AWS", "CloudFormation", "GitHub Actions"],
      },
      {
        name: "Automated Deployments",
        description:
          "Pipelines for Vercel, Docker, or Railway with rollbacks and pre-release review.",
        benefits: [
          "Continuous delivery",
          "Versioning and approvals",
          "Built-in observability",
        ],
        technologies: ["Docker", "Railway", "Vercel"],
      },
      {
        name: "Monitoring, Logs & Backups",
        description:
          "Implement dashboards, alerts, and automated backups to keep your uptime high.",
        benefits: [
          "Proactive alerts",
          "Centralized log history",
          "Disaster recovery",
        ],
        technologies: ["CloudWatch", "Grafana", "AWS Backup"],
      },
    ],
    footer: {
      focus: "Stack: AWS, Railway, GitHub Actions, Docker, CloudWatch.",
      cta: "Book a call",
    },
  },
  {
    id: "consulting",
    icon: "👨‍💼",
    title: "Consulting & Technical Leadership",
    subtitle: "Technical support for founders and teams that need direction.",
    services: [
      {
        name: "CTO-as-a-Service",
        description:
          "Ongoing technical mentorship to define roadmap, hire talent, and scale products.",
        benefits: [
          "Weekly tailored meetings",
          "Tracking of technical OKRs",
          "Network of partners and vendors",
        ],
        technologies: ["Notion", "Linear", "Slack"],
      },
      {
        name: "Architecture Review",
        description:
          "Code and architecture audit to identify risks and opportunities.",
        benefits: [
          "Executive report with findings",
          "Clear priorities and action plan",
          "Review session with your team",
        ],
        technologies: ["AWS", "Next.js", "Node.js"],
      },
      {
        name: "Roadmap Planning",
        description:
          "Design of a technical roadmap with estimates, milestones, and dependencies.",
        benefits: [
          "Collaborative workshops",
          "Roadmap in collaborative tools",
          "Bi-weekly follow-up",
        ],
        technologies: ["Notion", "Miro", "Jira"],
      },
    ],
    footer: {
      focus: "Ideal for founders, startups without a technical team, and agencies.",
      cta: "Book a call",
    },
  },
];

const extras = {
  title: "Extras / Optional Add-ons",
  icon: "🌐",
  description:
    "Perfect add-ons to expand your project or prepare a roadmap of improvements.",
  services: [
    {
      name: "Secure Authentication Setup",
      technologies: ["Firebase", "Auth0", "JWT"],
    },
    {
      name: "Multi-channel Push Notifications",
      technologies: ["FCM", "OneSignal"],
    },
    {
      name: "Responsive Dashboards and Custom UI",
      technologies: ["Tailwind CSS", "shadcn/ui"],
    },
    {
      name: "Google Sheets / Notion / CRM Integrations",
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
          <title>Services | {meta.title}</title>
          <meta
            name="description"
            content="Service catalog for SaaS development, automation, trading, e-commerce, and DevOps."
          />
        </Helmet>

        <div className="services-hero">
          <div className="services-hero__content">
            <span className="services-hero__eyebrow">Services</span>
            <h1>I build systems that automate businesses.</h1>
            <p>
              I design and automate end-to-end digital products: from SaaS MVPs to cloud infrastructure and
              trading automations.
            </p>
            <div className="services-hero__actions">
              <a
                href={CALENDLY_URL}
                className="services-btn services-btn--primary"
                target="_blank"
                rel="noreferrer"
              >
                Book a free 15-minute call
              </a>
              <Link to="/portfolio" className="services-btn services-btn--ghost">
                See past work
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
                    <header className="service-item__header">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                    </header>
                    <div className="service-item__details">
                      <div className="service-item__section">
                        <h4>Benefits</h4>
                        <ul>
                          {service.benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="service-item__section">
                        <h4>Technologies</h4>
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
                <a
                  href={CALENDLY_URL}
                  className="services-btn services-btn--secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {category.footer.cta}
                </a>
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
          <a
            href={CALENDLY_URL}
            className="services-btn services-btn--primary"
            target="_blank"
            rel="noreferrer"
          >
            Ask about add-ons
          </a>
        </section>
      </section>
    </HelmetProvider>
  );
};

export default Services;
