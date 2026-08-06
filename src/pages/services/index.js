import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiMail, FiX, FiCalendar } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";

const CALENDLY_URL = "https://calendly.com/serralta-ivan/personal";

const EMAIL = "hello@ivanserralta.com";

export const Services = () => {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const { t } = useLanguage();
  const { meta, serviceCatalog, serviceExtras, ui } = t;
  const text = ui.servicesPage;

  return (
    <HelmetProvider>
      <section className="services-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{text.metaTitle} | {meta.title}</title>
          <meta
            name="description"
            content={text.metaDescription}
          />
        </Helmet>

        <div className="services-hero">
          <div className="services-hero__content">
            <span className="services-hero__eyebrow">{text.eyebrow}</span>
            <h1>{text.heroTitle}</h1>
            <p>
              {text.heroText}
            </p>
            <div className="services-hero__actions">
              <button
                type="button"
                className="services-btn services-btn--primary"
                onClick={() => setEmailModalOpen(true)}
              >
                <FiMail style={{ marginRight: "0.5rem" }} />
                {text.emailBtn}
              </button>
              <Link to="/portfolio" className="services-btn services-btn--ghost">
                {text.pastWork}
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
                        <h4>{text.benefits}</h4>
                        <ul>
                          {service.benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="service-item__section">
                        <h4>{text.technologies}</h4>
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
            <span className="service-card__icon" aria-hidden>{serviceExtras.icon}</span>
            <div>
              <h2>{serviceExtras.title}</h2>
              <p className="service-card__subtitle">{serviceExtras.description}</p>
            </div>
          </div>
          <div className="service-extras__grid">
            {serviceExtras.services.map((service) => (
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
            {text.askAddons}
          </a>
        </section>
      </section>

      {emailModalOpen && createPortal(
        <div
          className="email-modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setEmailModalOpen(false)}
        >
          <div className="email-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="email-modal__close"
              aria-label={text.modalClose}
              onClick={() => setEmailModalOpen(false)}
            >
              <FiX />
            </button>

            <div className="email-modal__icon-wrap">
              <FiMail className="email-modal__big-icon" />
            </div>

            <h2 className="email-modal__title">{text.modalTitle}</h2>
            <p className="email-modal__subtitle">
              {text.modalSubtitle}
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="email-modal__address"
            >
              {EMAIL}
            </a>

            <div className="email-modal__divider">
              <span>{text.modalDivider}</span>
            </div>

            <a
              href={CALENDLY_URL}
              className="services-btn services-btn--primary email-modal__cal-btn"
              target="_blank"
              rel="noreferrer"
              onClick={() => setEmailModalOpen(false)}
            >
              <FiCalendar style={{ marginRight: "0.5rem" }} />
              {text.modalCall}
            </a>
          </div>
        </div>,
        document.body
      )}
    </HelmetProvider>
  );
};

export default Services;
