import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ML from '../../assets/img/ML.png';
import shop from '../../assets/img/shop.jpg';
import port from '../../assets/img/PT.png';
import SM from '../../assets/img/SM.png';
import snake from '../../assets/img/snake.png';
import '../Projects/projects.css';

import 'boxicons/css/boxicons.min.css';

const Portfolio = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Latest',
      span: 'Project',
      button: 'For more projects',
      projects: [
        {
          title: 'Playtube Videos',
          description: 'Video platform. Technologies: ReactJs, Axios, React Router, API',
          img: 'https://cdn.jsdelivr.net/gh/Jof92/Jof923@main/playtube2.png',
          link: 'https://playtube85.vercel.app/',
        },
        {
          title: 'Online Marketplace',
          description: 'Shopping app. Technologies: ReactJs, Axios, React Router, API.',
          img: ML,
          link: 'https://online-marketplace-react-js.vercel.app/',
        },
        {
          title: 'Sales site',
          description: 'Sales website, freelance project. Technologies: HTML and CSS.',
          img: shop,
          link: 'https://github.com/Jof92/SalesSite-NovoLar',
        },
        {
          title: 'My old Portfolio',
          description: 'My old portfolio. Technologies: HTML, CSS, and JavaScript',
          img: port,
          link: 'https://jof-portfolio.vercel.app/',
        },
        {
          title: 'Super Mario Run',
          description: 'My tribute to Super Mario. Technologies: HTML, CSS, and JavaScript',
          img: SM,
          link: 'https://supermariorun.vercel.app/',
        },
        {
          title: 'Hungry Snake',
          description: 'Classic Snake. Technologies: HTML, CSS, JavaScript.',
          img: snake,
          link: 'https://github.com/Jof92/hungrySnake',
        },
      ],
    },
    pt: {
      title: 'Últimos',
      span: 'Projetos',
      button: 'Mais projetos',
      projects: [
        {
          title: 'Playtube Vídeos',
          description: 'Plataforma de vídeos. Tecnologias: ReactJs, Axios, React Router, API',
          img: 'https://cdn.jsdelivr.net/gh/Jof92/Jof923@main/playtube2.png',
          link: 'https://playtube85.vercel.app/',
        },
        {
          title: 'Marketplace Online',
          description: 'App de compras. Tecnologias: ReactJs, Axios, React Router, API.',
          img: ML,
          link: 'https://online-marketplace-react-js.vercel.app/',
        },
        {
          title: 'Site de Vendas',
          description: 'Site de vendas, projeto freelancer. Tecnologias: HTML e CSS.',
          img: shop,
          link: 'https://github.com/Jof92/SalesSite-NovoLar',
        },
        {
          title: 'Meu antigo Portfólio',
          description: 'Portfólio antigo. Tecnologias: HTML, CSS e JavaScript',
          img: port,
          link: 'https://jof-portfolio.vercel.app/',
        },
        {
          title: 'Super Mario Run',
          description: 'Homenagem ao Super Mario. Tecnologias: HTML, CSS e JavaScript',
          img: SM,
          link: 'https://supermariorun.vercel.app/',
        },
        {
          title: 'Hungry snake',
          description: 'Jogo clássico. Tecnologias: HTML, CSS e JavaScript.',
          img: snake,
          link: 'https://github.com/Jof92/hungrySnake',
        },
      ],
    },
  };

  const { title, span, button, projects } = content[language];

  return (
    <section id="portfolio">
      <div className="main-text">
        <h2>
          {title} <span>{span}</span>
        </h2>

        <div className="portfolio-content">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="row">
                  <img src={project.img} alt={project.title} />
                  <div className="layer">
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <i className="bx bx-link-external" style={{ color: '#00eeff' }}></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <a href="https://github.com/Jof92" className="btn-box button-git">
            {button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
