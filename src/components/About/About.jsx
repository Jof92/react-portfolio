import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "../About/about.css";

const About = () => {
    const { language } = useLanguage();

    const content = {
        pt: {
            title: "Sobre",
            person:"mim",
            role: "Desenvolvedor Frontend",
            description: `
                Sou formado em Análise e Desenvolvimento de Sistemas e venho aprimorando minhas habilidades por meio de cursos complementares em instituições reconhecidas como Alura, DIO e COD3R, além de bootcamps como o Santander Bootcamp Fullstack Developer.
                Minha trajetória como Desenvolvedor Front-end inclui projetos freelance onde pude demonstrar habilidades com tecnologias como HTML, CSS, JavaScript, React.js e Next.js.
                Minha paixão por jogos me levou a desenvolver habilidades em criação de games. Um dos meus projetos é inspirado no universo do Super Mario.
                Para explorar esses projetos e mais, convido você a visitar meu GitHub, onde compartilho minhas experiências de aprendizado.
            `,
            button: "Minha página no Github"
        },
        en: {
            title: "About",
            person: "me",
            role: "Frontend Developer",
            description: `
                I hold a degree in Systems Analysis and Development and have continuously worked to enhance my skills through complementary courses at recognized tech institutions such as Alura, DIO, and COD3R, as well as bootcamps like the Santander Bootcamp Fullstack Developer.
                My career as a Front-end Developer includes freelance projects where I’ve been able to demonstrate my skills with key technologies such as HTML, CSS, JavaScript, React.js, and Next.js.
                My passion for games led me to develop my skills in game creation. One of my projects is inspired by the Super Mario universe.
                To explore these projects and more, I invite you to visit my GitHub, where I share my learning experiences.
            `,
            button: "My Github page"
        }
    };

    return (
        <section className="about" id="about">
            <div className="about-img">
                <iframe
                    src="https://www.youtube.com/embed/idZ4UeTAVts"
                    frameBorder="0"
                    allowFullScreen
                    title="About Video"
                ></iframe>
            </div>
            <div className="about-text">
                <h2>{content[language].title}<span> {content[language].person}</span></h2>
                <h4>{content[language].role}</h4>
                <p>{content[language].description}</p>
                <a href="https://github.com/Jof92" className="btn-box">
                    {content[language].button}
                </a>
            </div>
        </section>
    );
};

export default About;
