import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta, dataportfolio, services, skills, contactConfig, socialprofils, workExperience } from "../../content_option";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BiLayerPlus } from "react-icons/bi";
import { RiLayoutGridLine } from "react-icons/ri";

export const Home = () => {
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
            <h1 className="hero-title-line1">FULL-STACK</h1>
            <h1 className="hero-title-line2">ENGINEER</h1>
          </div>
          <p className="hero-desc">{introdata.description}</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">+5</span>
              <span className="stat-label">YEARS OF<br />EXPERIENCE</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">+20</span>
              <span className="stat-label">PROJECTS<br />COMPLETED</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">COUNTRIES<br />WORKED</span>
            </div>
          </div>
          <div className="hero-cards">
            <div className="hero-card orange">
              <BiLayerPlus className="hero-card-icon" />
              <div className="hero-card-content">
                <p className="hero-card-title">SAAS, FINTECH,<br />AUTOMATION</p>
              </div>
              <Link to="/services" className="hero-card-arrow"><FiArrowUpRight /></Link>
            </div>
            <div className="hero-card lime">
              <RiLayoutGridLine className="hero-card-icon" />
              <div className="hero-card-content">
                <p className="hero-card-title">REACT, NODE.JS,<br />AWS, AI SYSTEMS</p>
              </div>
              <Link to="/about" className="hero-card-arrow"><FiArrowUpRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ── */}
      <section id="projects" className="projects-section">
        <div className="section-inner">
          <div className="section-heading">
            <h2 className="section-title-main">RECENT</h2>
            <h2 className="section-title-dim">PROJECTS</h2>
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
            <h2 className="section-title-main">WORK</h2>
            <h2 className="section-title-dim">EXPERIENCE</h2>
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
              View full timeline <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="services-section">
        <div className="section-inner">
          <div className="section-heading">
            <h2 className="section-title-main">WHAT I</h2>
            <h2 className="section-title-dim">BUILD</h2>
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
              See all services <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="skills-section">
        <div className="section-inner">
          <div className="section-heading">
            <h2 className="section-title-main">TECH</h2>
            <h2 className="section-title-dim">STACK</h2>
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
            <h2 className="section-title-main">LET'S</h2>
            <h2 className="section-title-dim">TALK</h2>
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
