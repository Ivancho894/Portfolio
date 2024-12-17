import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { workExperience } from '../../content_option';

export const Portfolio = () => {
const events = [
  { year: 2013, text: "Event 1 description", icon: "icon-link-here" },
  { year: 2014, text: "Event 2 description", icon: "icon-link-here" },
  { year: 2015, text: "Event 3 description", icon: "icon-link-here" },
  { year: 2016, text: "Event 4 description", icon: "icon-link-here" },
];

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-icon">
            {/* You can put an <img> or <i> here for icons */}
            <img src={event.icon} alt="Event Icon" />
          </div>
          <div className="timeline-content">
            <h2>{event.year}</h2>
            <p>{event.text}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <HelmetProvider>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="A detailed look at my professional portfolio." />
      </Helmet>
      <Container fluid>
      <Row className="justify-content-center">
          <Col md={10}> {/* Increased width */}
            <h1 className="timeline-title">Portfolio</h1>
            <div className="timeline">
              {workExperience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">{exp.period}</div>
                  <div className="timeline-content">
                    <div>
                      <h2>{exp.position}</h2>
                      <h3>{exp.company}</h3>
                      <h4>{exp.location}</h4>
                      <p>{exp.details}</p>
                    </div>
                    {exp.demoUrl && (
                      <a href={exp.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">Demo</Button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
