import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "../Contact/contact.css";

const Contact = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Contact",
      span: "Me",
      subtitle: "Let's work together!",
      description:
        "Below are my contacts and social media profiles. Feel free to connect with me.",
      name: "Enter your name",
      email: "Enter your Email",
      subject: "Enter your Subject",
      message: "Enter your message...",
      submit: "Submit",
    },
    pt: {
      title: "Fala",
      span: "Comigo",
      subtitle: "Vamos trabalhar juntos!",
      description:
        "Abaixo estão meus contatos e perfis em redes sociais. Fique à vontade para me chamar.",
      name: "Digite seu nome",
      email: "Digite seu Email",
      subject: "Digite o assunto",
      message: "Digite sua mensagem...",
      submit: "Enviar",
    },
  };

  const {
    title,
    span,
    subtitle,
    description,
    name,
    email,
    subject,
    message,
    submit,
  } = content[language];

  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>
          {title} <span>{span}</span>
        </h2>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <div className="contact-list">
          <li>
            <i className="fas fa-envelope"></i> jof_frota@hotmail.com
          </li>
          <li>
            <i className="fas fa-phone-alt"></i> +55 85 996204919
          </li>
        </div>
        <div className="contact-icons">
          <a
            href="https://www.instagram.com/js.frota/"
            style={{ "--i": 7 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/+5585996204919"
            style={{ "--i": 8 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jof-frota/"
            style={{ "--i": 9 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Jof92"
            style={{ "--i": 10 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="contact-form">
        <form
          className="form1"
          action="https://formspree.io/f/xdorbope"
          method="POST"
        >
          <input className="field" name="name" placeholder={name} required />
          <input className="field" name="email" placeholder={email} required />
          <input className="field" name="subject_input" placeholder={subject} />
          <textarea
            className="field"
            name="message"
            cols="40"
            rows="10"
            placeholder={message}
            required
          ></textarea>
          <input type="submit" value={submit} className="send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
