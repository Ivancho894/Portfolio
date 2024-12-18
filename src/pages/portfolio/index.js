
import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Row, Col, Alert } from "react-bootstrap";
import ExperienceCard from './Card';
import "./style.css";
import { workExperience } from '../../content_option';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";

export const Portfolio = ({ theme }) => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="justify-content-center mb-5 mt-3 pt-md-3">
          <Col xs={12}>
            <h1 className="display-4 mb-4 text-center">My Professional Timeline</h1>
            <hr className="t_border my-4 mx-auto text-left" />
          </Col>
        </Row>
        <VerticalTimeline lineColor={theme === 'dark' ? '#fff' : '#000'}>
          {workExperience.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} theme={theme} />
          ))}
        </VerticalTimeline>
      </Container>
    </HelmetProvider>
  );
};