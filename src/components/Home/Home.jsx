import React, { useEffect, useRef } from "react";
import { useLanguage } from '../../context/LanguageContext';
import Typed from 'typed.js';
import '../../components/Home/home.css';
import pic from '../../assets/img/x.png';
import { MdWavingHand } from 'react-icons/md';

const Home = () => {
    const { language } = useLanguage();
    const typedRef = useRef(null);
    const typedInstance = useRef(null);

    const content = {
        pt: {
            greeting: 'Olá!',
            introduction: "Sou José Frota",
            description: 'Sou desenvolvedor web focado na criação de experiências online de qualidade.',
            professions: ['Desenvolvedor Frontend', 'Desenvolvedor Web', 'Desenvolvedor de Jogos'],
            moreAboutMe: 'Mais sobre mim',
            extra: 'Eu trabalho no desenvolvimento e design de sites, com ênfase especial no design frontend, entre outras áreas.'
        },
        en: {
            greeting: 'Hello!',
            introduction: "I'm José Frota",
            description: "I'm a web developer focused on creating quality online experiences.",
            professions: ['Frontend Developer', 'Web Developer', 'Game Developer'],
            moreAboutMe: 'More about me',
            extra: 'I work on developing and designing websites, with a special emphasis on frontend design, among other areas.'
        }
    };

    useEffect(() => {
        if (typedInstance.current) {
            typedInstance.current.destroy();
        }

        typedInstance.current = new Typed(typedRef.current, {
            strings: content[language].professions,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            if (typedInstance.current) {
                typedInstance.current.destroy();
            }
        };
    }, [language]);

    return (
        <section className="home">
            <div className="home-content">
                <h3>
                    <span className="wave-hand">
                        <MdWavingHand size={30} color="#0ef" />
                    </span> {content[language].greeting}
                </h3>
                <h1>{content[language].introduction}</h1>
                <h3><span className="text" ref={typedRef}></span></h3>
                <p>
                    {content[language].description}
                    <br />
                    {content[language].extra}
                </p>
                <div className="home-sci">
                    <a href="https://www.instagram.com/js.frota/" style={{ '--i': 7 }}><i className="fab fa-instagram"></i></a>
                    <a href="https://wa.me/+5585996204919" style={{ '--i': 8 }}><i className="fab fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/jof-frota/" style={{ '--i': 9 }}><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Jof92" style={{ '--i': 10 }}><i className="fab fa-github"></i></a>
                </div>

                <a href="#about" className="btn-box">{content[language].moreAboutMe}</a>
            </div>

            <div className="body1">
                <div className="neon-rings">
                    <div className="neon-ring inner-ring">
                        <div className="neon-ring">
                            <div className="image-container">
                                <img src={pic} alt="minha foto" className="profile-pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
