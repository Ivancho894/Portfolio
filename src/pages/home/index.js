import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BiLayerPlus } from "react-icons/bi";
import { RiLayoutGridLine } from "react-icons/ri";
import { useLanguage } from "../../i18n/LanguageContext";

export const Home = () => {
  const { t } = useLanguage();
  const { meta, dataportfolio, services, skills, contactConfig, socialprofils, workExperience, ui } = t;

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* ── HERO ── */}
      <section id="home" className="hero-section">
        <div className="hero-inner">
          <div className="hero-heading">
            <h1 className="hero-title-line1">{ui.hero.titleLine1}</h1>
            <h1 className="hero-title-line2">{ui.hero.titleLine2}</h1>
          </div>
          <p className="hero-tagline">
            <span>{ui.hero.tagline}</span>
          </p>
          <p className="hero-desc">
            {ui.hero.description}
          </p>
          <div className="hero-cta">
            <a href="#contact" className="hero-cta-primary">
              {ui.hero.ctaPrimary} <FiArrowUpRight />
            </a>
            <a href="#projects" className="hero-cta-secondary">
              {ui.hero.ctaSecondary}
            </a>
          </div>
          <div className="hero-stats">
            {ui.hero.stats.map((stat, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="stat-divider" />}
                <div className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label[0]}<br />{stat.label[1]}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="hero-cards">
            <div className="hero-card orange">
              <BiLayerPlus className="hero-card-icon" />
              <div className="hero-card-content">
                <p className="hero-card-title">{ui.hero.cards[0].title[0]} <br />{ui.hero.cards[0].title[1]}</p>
              </div>
              <Link to="/services" className="hero-card-arrow"><FiArrowUpRight /></Link>
            </div>
            <div className="hero-card lime">
              <RiLayoutGridLine className="hero-card-icon" />
              <div className="hero-card-content">
                <p className="hero-card-title">{ui.hero.cards[1].title[0]} <br />{ui.hero.cards[1].title[1]}</p>
              </div>
              <Link to="/services" className="hero-card-arrow"><FiArrowUpRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ── */}
      <section id="projects" className="projects-section">
        <div className="section-inner">
          <div className="section-heading">
            <h2 className="section-title-main">{ui.sections.projects[0]}</h2>
            <h2 className="section-title-dim">{ui.sections.projects[1]}</h2>
          </div>
          <div className="projects-list">
            {dataportfolio.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-row"
              >
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>
                <div className="project-arrow">
                  <FiArrowUpRight />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="experience-section">
        <div className="section-inner">
          <div className="section-heading">
            <h2 className="section-title-main">{ui.sections.experience[0]}</h2>
            <h2 className="section-title-dim">{ui.sections.experience[1]}</h2>
          </div>
          <div className="experience-list">
            {workExperience.slice(0, 4).map((exp, i) => (
              <div key={i} className="exp-row">
                <div className="exp-left">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
                <div className="exp-right">
                  <div className="exp-header">
                    <h3 className="exp-position">{exp.position}</h3>
                    <span className="exp-company">{exp.company}</span>
                  </div>
                  <p className="exp-summary">{exp.points[0]}</p>
                  {exp.techStack && (
                    <div className="exp-tags">
                      {[
                        ...(exp.techStack.frontEnd || []),
                        ...(exp.techStack.backEnd || []),
                      ].slice(0, 5).map((tech, j) => (
                        <span key={j} className="exp-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
                {exp.info && (
                  <a href={exp.info} target="_blank" rel="noreferrer" className="exp-link">
                    <FiArrowUpRight />
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/portfolio" className="cta-link">
              {ui.buttons.viewFullTimeline} <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="services-section">
        <div className="section-inner">
          <div className="section-heading">
            <h2 className="section-title-main">{ui.sections.services[0]}</h2>
            <h2 className="section-title-dim">{ui.sections.services[1]}</h2>
          </div>
          <div className="services-grid">
            {services.map((svc, i) => (
              <div key={i} className="service-card-item">
                <span className="service-num">0{i + 1}</span>
                <h3 className="service-name">{svc.title}</h3>
                <p className="service-desc">{svc.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="cta-link">
              {ui.buttons.seeAllServices} <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="skills-section">
        <div className="section-inner">
          <div className="section-heading">
            <h2 className="section-title-main">{ui.sections.skills[0]}</h2>
            <h2 className="section-title-dim">{ui.sections.skills[1]}</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-value">{skill.value}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section">
        <div className="section-inner">
          <div className="section-heading">
            <h2 className="section-title-main">{ui.sections.contact[0]}</h2>
            <h2 className="section-title-dim">{ui.sections.contact[1]}</h2>
          </div>
          <div className="contact-body">
            <p className="contact-desc">{contactConfig.description}</p>
            <div className="contact-links">
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="contact-link-item">
                <FiMail />
                <span>{contactConfig.YOUR_EMAIL}</span>
              </a>
              <a href={`tel:${contactConfig.YOUR_FONE}`} className="contact-link-item">
                <FiPhone />
                <span>{contactConfig.YOUR_FONE}</span>
              </a>
            </div>
            <div className="contact-socials">
              {socialprofils.github && (
                <a href={socialprofils.github} target="_blank" rel="noreferrer" className="social-btn">
                  <FaGithub /> GitHub
                </a>
              )}
              {socialprofils.linkedin && (
                <a href={socialprofils.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                  <FaLinkedinIn /> LinkedIn
                </a>
              )}
              {socialprofils.instagram && (
                <a href={socialprofils.instagram} target="_blank" rel="noreferrer" className="social-btn">
                  <FaInstagram /> Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
