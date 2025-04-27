import React from 'react';
import { useLanguage } from '../../context/LanguageContext'; // Acesse o contexto de idioma
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Skills/skills.css";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';

import {
  faServer,
} from '@fortawesome/free-solid-svg-icons'; // para API REST e Next.js

const Skills = () => {
  const { language } = useLanguage(); // Acessando o idioma atual

  // Definindo as traduções para os textos
  const content = {
    pt: {
      mySkills: (
        <>
          Minhas <span style={{ color: '#0ef' }}>Habilidades</span>
        </>
      ),
      technicalSkills: ' Técnicas',
      professionalSkills: ' Profissionais',
      skills: {
        html: 'HTML',
        css: 'CSS',
        javascript: 'JavaScript',
        react: 'React',
        git: 'Git',
        api: 'API REST',
      },
      professionalSkillsText: [
        { percent: '90%', text: 'Criatividade', className: 'path-1' },
        { percent: '80%', text: 'Comunicação', className: 'path-2' },
        { percent: '80%', text: 'Resolução de Problemas', className: 'path-3' },
        { percent: '90%', text: 'Trabalho em Equipe', className: 'path-4' },
      ],
    },
    en: {
      mySkills: (
        <>
          My <span style={{ color: '#0ef' }}>Skills</span>
        </>
      ),
      technicalSkills: 'Technical Skills',
      professionalSkills: 'Professional Skills',
      skills: {
        html: 'HTML',
        css: 'CSS',
        javascript: 'JavaScript',
        react: 'React',
        git: 'Git',
        api: 'API REST',
      },
      professionalSkillsText: [
        { percent: '90%', text: 'Creativity', className: 'path-1' },
        { percent: '80%', text: 'Communication', className: 'path-2' },
        { percent: '80%', text: 'Problem Solving', className: 'path-3' },
        { percent: '90%', text: 'Team Work', className: 'path-4' },
      ],
    }
  };

  return (
    <section>
      <h1 className="sub-title">{content[language].mySkills}</h1>
      <div className="section1">
        <div className="container1" id="Skills">
          <h1 className="heading1">{content[language].technicalSkills}</h1>
          <div className="technical-bars">
            <div className="bar">
              <FontAwesomeIcon icon={faHtml5} style={{ color: '#c95d2e' }} />
              <div className="info"><span>{content[language].skills.html}</span></div>
              <div className="progress-line html"><span></span></div>
            </div>

            <div className="bar">
              <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#147bbc' }} />
              <div className="info"><span>{content[language].skills.css}</span></div>
              <div className="progress-line css"><span></span></div>
            </div>

            <div className="bar">
              <FontAwesomeIcon icon={faJs} style={{ color: '#b0bc1e' }} />
              <div className="info"><span>{content[language].skills.javascript}</span></div>
              <div className="progress-line javascript"><span></span></div>
            </div>

            <div className="bar">
              <FontAwesomeIcon icon={faReact} style={{ color: '#69bcbc' }} />
              <div className="info"><span>{content[language].skills.react}</span></div>
              <div className="progress-line react"><span></span></div>
            </div>

            <div className="bar">
              <FontAwesomeIcon icon={faGitAlt} style={{ color: '#f34f29' }} />
              <div className="info"><span>{content[language].skills.git}</span></div>
              <div className="progress-line git"><span></span></div>
            </div>

            <div className="bar">
              <FontAwesomeIcon icon={faServer} style={{ color: '#4caf50' }} />
              <div className="info"><span>{content[language].skills.api}</span></div>
              <div className="progress-line api"><span></span></div>
            </div>
          </div>
        </div>

        <div className="container1">
          <h1 className="heading1">{content[language].professionalSkills}</h1>
          <div className="radial-bars">
            {content[language].professionalSkillsText.map((item, i) => (
              <div className="radial-bar" key={i}>
                <svg viewBox="0 0 200 200">
                  <circle className="progress-bar" cx="100" cy="100" r="80" />
                  <circle className={`path ${item.className}`} cx="100" cy="100" r="80" />
                </svg>
                <div className="percentage">{item.percent}</div>
                <div className="text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
