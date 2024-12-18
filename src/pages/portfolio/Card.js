import React, { useEffect, useState } from "react";
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./style.css";
import { workExperience } from "../../content_option";

const ExperienceCard = ({theme,experience}) => {
  const { period, icon, iconBg, company, position, points,image,techStack,location} = experience

    return (
      <VerticalTimelineElement
        contentStyle={{ background: theme==="dark"?'#1d1836':'#000', color: theme==="dark"?'#fff':'#000'}}
        contentArrowStyle={{ borderRight: theme==="dark"?'7px solid #232631':'7px solid #000' }}
        date={period}
        iconStyle={{ 
          background: theme==="dark"?'#1d1836':'#000',
          justifyContent: 'center', 
          alignItems: 'center',display: 'flex',
          borderRadius: '50%',
          color: theme === 'dark' ? '#fff' : '#000', // Dynamic icon color
          boxShadow: theme === "dark" ? '0 0 0 2px #fff' : '0 0 0 4px #232631'
        }}
        icon={
          <div className="experience-icon">
            
            <img src={icon} alt={`${company} logo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div> 
        }
      >
        <div className='experience-card'>

          <h3 className="experience-title">{position}</h3>
          <p className="experience-company">{company}</p>
          <p className="experience-company">{location}</p>
          <ul className="experience-points">
            {points.map((point, index) => (
              <li key={index} className="experience-point">{point}</li>
            ))}

          </ul>
          {
          techStack && (
            <div className="tech-stack">
              <h4>Tech Stack:</h4>
              {techStack.frontEnd && <p>Front End: {techStack.frontEnd.join(", ")}</p>}
              {techStack.backEnd && <p>Back End: {techStack.backEnd.join(", ")}</p>}
              {techStack.database && <p>Database: {techStack.database.join(", ")}</p>}
              {techStack.apis && <p>APIs: {techStack.apis.join(", ")}</p>}
            </div>
          )
        }
          {/* {image && image.length>0?<img src={image[0]} alt={`${company} logo`} loading="lazy" />:<></>} */}
        </div>
      </VerticalTimelineElement>
    );
  };
  
  export default ExperienceCard;