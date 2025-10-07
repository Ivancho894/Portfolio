import React, { useEffect, useMemo, useState } from "react";
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./style.css";

const ExperienceCard = ({ theme, experience }) => {
  const { period, icon, company, position, points, techStack, location, info, image } = experience;
  const images = useMemo(() => (Array.isArray(image) ? image : image ? [image] : []), [image]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const handleImageClick = () => {
    if (!images.length) return;
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <VerticalTimelineElement
      contentStyle={{ background: theme === "dark" ? "#1d1836" : "#000", color: theme === "dark" ? "#fff" : "#000" }}
      contentArrowStyle={{ borderRight: theme === "dark" ? "7px solid #232631" : "7px solid #000" }}
      date={period}
      iconStyle={{
        background: theme === "dark" ? "#1d1836" : "#000",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        borderRadius: "50%",
        color: theme === "dark" ? "#fff" : "#000", // Dynamic icon color
        boxShadow: theme === "dark" ? "0 0 0 2px #fff" : "0 0 0 4px #232631",
      }}
      icon={
        <div className="experience-icon">
          <img src={icon} alt={`${company} logo`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      }
    >
      <div className="experience-card">
        <h3 className="experience-title">{position}</h3>
        <p className="experience-company">{company}</p>
        <p className="experience-company">{location}</p>
        <ul className="experience-points">
          {points.map((point, index) => (
            <li key={index} className="experience-point">
              {point}
            </li>
          ))}
        </ul>
        {techStack && (
          <div className="tech-stack">
            <h4>Tech Stack:</h4>
            {techStack.frontEnd && <p>Front End: {techStack.frontEnd.join(", ")}</p>}
            {techStack.backEnd && <p>Back End: {techStack.backEnd.join(", ")}</p>}
            {techStack.database && <p>Database: {techStack.database.join(", ")}</p>}
            {techStack.apis && <p>APIs: {techStack.apis.join(", ")}</p>}
          </div>
        )}
        {!!images.length && (
          <div className="experience-carousel">
            <div className="carousel-image-wrapper">
              <img
                src={images[currentIndex]}
                alt={`${company} showcase ${currentIndex + 1}`}
                className="experience-image"
                loading="lazy"
                onClick={handleImageClick}
              />
            </div>
            {images.length > 1 && (
              <div className="carousel-indicators">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`carousel-indicator ${idx === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Mostrar imagen ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
        {isModalOpen && (
          <div className="image-modal" role="dialog" aria-modal="true" onClick={closeModal}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-modal-close" type="button" onClick={closeModal} aria-label="Cerrar">
                ×
              </button>
              <img
                src={images[currentIndex]}
                alt={`${company} showcase enlarged ${currentIndex + 1}`}
                className="image-modal-img"
                loading="lazy"
              />
            </div>
          </div>
        )}
        {info && (
          <a href={info} target="_blank" rel="noopener noreferrer">
            <button className="info-button" style={{ width: "100%", marginTop:"5" }} >+ Info</button>
          </a>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
