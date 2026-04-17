import React from "react";
import "./style.css";
import { socialprofils } from "../../content_option";
import YoImage from "../../assets/images/Yo.png";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image-wrap">
        <img src={YoImage} alt="Iván Serralta" className="profile-img" />
      </div>
      <div className="profile-card-body">
        <h2 className="profile-name">Iván Serralta</h2>
        <div className="profile-badge">
          <span className="badge-dot"></span>
          <span className="badge-text">Available for work</span>
        </div>
        <p className="profile-bio">
          A Full-Stack Engineer who builds scalable SaaS, fintech, and AI-driven products.
        </p>
        <div className="profile-socials">
          {socialprofils.github && (
            <a href={socialprofils.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          )}
          {socialprofils.linkedin && (
            <a href={socialprofils.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          )}
          {socialprofils.instagram && (
            <a href={socialprofils.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
