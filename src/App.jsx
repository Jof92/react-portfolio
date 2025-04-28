import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Service/Service';
import './App.css';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { LanguageProvider } from './context/LanguageContext'; // Importando o LanguageProvider
import ReactGA from 'react-ga4'; // Importando o react-ga4

function App() {
  useEffect(() => {
    ReactGA.initialize('G-PEJR0X4GB6'); // <-- Coloque seu ID do Google Analytics aqui
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <LanguageProvider>
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
