import React, { createContext, useContext, useEffect, useState } from "react";
import * as en from "../content_option";
import * as es from "../content_option_es";

const translations = { en, es };

const getInitialLang = () => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "es") return stored;
    const browser = (navigator.language || "en").toLowerCase();
    return browser.startsWith("es") ? "es" : "en";
};

const LanguageContext = createContext({
    lang: "en",
    setLang: () => {},
    t: translations.en,
});

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.setAttribute("lang", lang);
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
