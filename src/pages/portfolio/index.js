import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataportfolio, meta, workExperience, skills2 } from "../../content_option";


export const Portfolio = () => {
  return (
    <HelmetProvider>

      <Container fluid> {/* Changed to fluid for full width */}
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
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
// import './Timeline.css'; // This is where you'll add your custom CSS

// export const Timeline = () => {
//   return (
//     <HelmetProvider>
//       <Container className="portfolio-header">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>Portfolio | {meta.title}</title>
//           <meta name="description" content={meta.description} />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4">Portfolio</h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12">
//             <h2 className="subheading">Projects</h2>
//             <div className="mb-5 po_items_ho">
//               {dataportfolio.map((data, index) => (
//                 <Card key={index} className="po_item">
//                   <Card.Img variant="top" src={data.img} alt="" />
//                   <Card.Body>
//                     <Card.Text>{data.description}</Card.Text>
//                     <Card.Link href={data.link}>Repo</Card.Link>
//                   </Card.Body>
//                 </Card>
//               ))}
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12">
//             <h2 className="subheading">Work Experience</h2>
//             {workExperience.map((work, index) => (
//               <Card key={index} className="mb-3">
//                 <Card.Body>
//                   <Card.Title>{work.position}</Card.Title>
//                   <Card.Subtitle>{work.company} - {work.period}</Card.Subtitle>
//                   <Card.Text>{work.details}</Card.Text>
//                 </Card.Body>
//               </Card>
//             ))}
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12">
//             <h2 className="subheading">skills2</h2>
//             <ul>
//               {Object.keys(skills2).map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12">
//             <h2 className="subheading">Contact</h2>
//             {/* Contact information or a contact form can go here */}
//           </Col>
//         </Row>
//       </Container>
//     </HelmetProvider>
//   );
// };
