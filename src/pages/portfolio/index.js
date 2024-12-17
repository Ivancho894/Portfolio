
import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './Card';
import "./style.css";
import { workExperience } from '../../content_option';

export const Portfolio = ({theme}) => {
  console.log(theme)
  return (
    <div className="experience-page">
      <div className="">
        <VerticalTimeline>
          {workExperience.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} theme={theme} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

