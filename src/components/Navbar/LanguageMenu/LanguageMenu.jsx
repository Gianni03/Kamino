import React, { useState, useEffect } from "react"; 
import styles from "../Navbar.module.css"; 
import { useTranslation } from "react-i18next";
import esFlag from "../../../icons/Espana.svg";
import enFlag from "../../../icons/english.svg";
import itaFlag from "../../../icons/italy.svg";

const flagMap = {
  es: esFlag,
  en: enFlag,
  ita: itaFlag,
};

const languages = ['es', 'en', 'ita'];

const LanguageButton = ({ language, changeLanguage, isSelected }) => (
  <button
    className={`${styles.langButton} ${isSelected ? styles.selectedLangButton : ''}`}
    onClick={() => changeLanguage(language)}
  >
    <img src={flagMap[language]} alt={language} />
  </button>
);

const LanguageMenu = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguageAndClose = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className={styles.langContainer} onClick={toggleMenu}>
      <button className={styles.langButton}>
        <img src={flagMap[selectedLanguage]} alt={selectedLanguage} />
      </button>
      {isOpen && (
        <div
          className={styles.allLang}
          onMouseLeave={() => setIsOpen(false)}
        >
          {languages.filter((lang) => lang !== selectedLanguage).map((lang) => (
            <LanguageButton
              key={lang} 
              language={lang}
              changeLanguage={changeLanguageAndClose} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageMenu;
