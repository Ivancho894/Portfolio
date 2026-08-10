import React from "react";
import "./style.css";
import { useLanguage } from "../../i18n/LanguageContext";

const ArgentinaFlag = () => (
  <svg
    className="lang-flag"
    viewBox="0 0 60 40"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="60" height="40" fill="#74ACDF" />
    <rect y="13.33" width="60" height="13.34" fill="#fff" />
    <circle cx="30" cy="20" r="4.5" fill="#F6B40E" stroke="#85340A" strokeWidth="0.6" />
  </svg>
);

const USAFlag = () => (
  <svg
    className="lang-flag"
    viewBox="0 0 60 40"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="60" height="40" fill="#B22234" />
    {[1, 3, 5, 7, 9, 11].map((i) => (
      <rect key={i} y={(40 / 13) * i} width="60" height={40 / 13} fill="#fff" />
    ))}
    <rect width="26" height={(40 / 13) * 7} fill="#3C3B6E" />
    {[
      [4, 4], [12, 4], [20, 4],
      [8, 10], [16, 10],
      [4, 16], [12, 16], [20, 16],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="1.4" fill="#fff" />
    ))}
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
        <ArgentinaFlag />
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
        <USAFlag />
      </button>
    </div>
  );
};

export default Langtoggle;
