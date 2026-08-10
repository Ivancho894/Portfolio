import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";

export const ContactUs = () => {
  const { t } = useLanguage();
  const { meta, contactConfig, socialprofils, ui } = t;
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | {ui.contactPage.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{ui.contactPage.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">{ui.contactPage.getInTouch}</h3>
            <address>
              <strong>{ui.contactPage.email}</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>{ui.contactPage.phone}</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
            <div className="social-links">
              <a href={socialprofils.github} className="social-icon">
                <FaGithub />
              </a>
              <a href={socialprofils.linkedin} className="social-icon">
                <FaLinkedin />
              </a>
              <a href={socialprofils.instagram} className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
