import React, { createContext, useState, useContext } from 'react';


const LanguageContext = createContext();


export const useLanguage = () => useContext(LanguageContext);


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt'); 

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
