import React, { useEffect, useState } from "react";
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./style.css";
import { workExperience } from "../../content_option";

const ExperienceCard = ({theme,experience}) => {
  const { period, icon, iconBg, company, position, points } = experience

    return (
      <VerticalTimelineElement
        contentStyle={{ background: theme==="dark"?'#1d1836':'#000', color: theme==="dark"?'#fff':'#000'}}
        contentArrowStyle={{ borderRight: theme==="dark"?'7px solid #232631':'7px solid #000' }}
        date={period}
        iconStyle={{ 
          background: iconBg, // Background color of the icon
          color: theme != 'dark' ? '#fff' : '#000', // Dynamic icon color
          boxShadow: theme === "dark" ? '0 0 0 2px #fff' : '0 0 0 4px #232631' // Optional: Adjust boxShadow to fit theme
        }}
        icon={
          <div className="experience-icon">
            
            <img src={icon} className="experience-icon"/>
          </div> 
        }
      >
        <div className='experience-card'>

        <h3 className="experience-title">{position}</h3>
        <p className="experience-company">{company}</p>
        <ul className="experience-points">
          {points.map((point, index) => (
            <li key={index} className="experience-point">{point}</li>
          ))}
        </ul>
          </div>
      </VerticalTimelineElement>
    );
  };
  
  export default ExperienceCard;