import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../Header/header.css';
import brasil from '../../assets/flags/brasil.png';
import eua from '../../assets/flags/estados-unidos.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const navbarContent = {
    pt: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Habilidades',
      portfolio: 'Portfólio',
      contact: 'Contato',
    },
    en: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      portfolio: 'Portfolio',
      contact: 'Contact',
    }
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <span className="white-text">jose</span><span className="blue-dot">.</span><span className="white-text">frota</span>
      </a>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <a href="#home" className="active">{navbarContent[language].home}</a>
        <a href="#about" className="active">{navbarContent[language].about}</a>
        <a href="#skills" className="active">{navbarContent[language].skills}</a>
        <a href="#portfolio" className="active">{navbarContent[language].portfolio}</a>
        <a href="#contact" className="active">{navbarContent[language].contact}</a>
      </nav>

      <div className="language-list">
        <a href="#" onClick={() => changeLanguage('pt')}>
          <img src={brasil} alt="Bandeira do Brasil" />
        </a>
        <a href="#" onClick={() => changeLanguage('en')}>
          <img src={eua} alt="Bandeira dos Estados Unidos" />
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
