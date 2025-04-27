import React, { createContext, useState, useContext } from 'react';

// Criando o contexto de idioma
const LanguageContext = createContext();

// Hook para acessar o contexto
export const useLanguage = () => useContext(LanguageContext);

// Componente que fornece o idioma e a função para alterá-lo
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt'); // O idioma padrão é o português

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
