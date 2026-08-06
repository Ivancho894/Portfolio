import React from "react";
import "./style.css";
import { useLanguage } from "../../i18n/LanguageContext";

const SpainFlag = () => (
  <svg
    className="lang-flag"
    viewBox="0 0 60 40"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="60" height="40" fill="#AA151B" />
    <rect y="10" width="60" height="20" fill="#F1BF00" />
  </svg>
);

const UKFlag = () => (
  <svg
    className="lang-flag"
    viewBox="0 0 60 40"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="60" height="40" fill="#012169" />
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13" />
    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
  </svg>
);

const Langtoggle = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-toggle" role="radiogroup" aria-label={t.ui.langToggle.label}>
      <button
        type="button"
        role="radio"
        aria-checked={lang === "es"}
        className={`lang-btn ${lang === "es" ? "active" : ""}`}
        onClick={() => setLang("es")}
        title={t.ui.langToggle.spanish}
        aria-label={t.ui.langToggle.spanish}
      >
        <SpainFlag />
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={lang === "en"}
        className={`lang-btn ${lang === "en" ? "active" : ""}`}
        onClick={() => setLang("en")}
        title={t.ui.langToggle.english}
        aria-label={t.ui.langToggle.english}
      >
        <UKFlag />
      </button>
    </div>
  );
};

export default Langtoggle;
