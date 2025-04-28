import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import "../Service/service.css";

function Services() {
  const { language } = useLanguage(); 

  const content = {
    en: {
      title: "My Services",
      frontendTitle: "Front End",
      frontendDesc: "I want to turn your ideas into digital interfaces. I’ll ensure that your website is not only beautiful, but also functional and responsive.",
      uiuxTitle: "UI/UX",
      uiuxDesc: "As a UI/UX developer, I enhance the usability and design of your website or app, making the user experience comfortable and unique. Let's work together to showcase your brand and engage your customers.",
    },
    pt: {
      title: "Meus Serviços",
      frontendTitle: "Front End",
      frontendDesc: "Quero transformar suas ideias em interfaces digitais. Vou garantir que seu site não apenas seja bonito, mas também funcional e responsivo.",
      uiuxTitle: "UI/UX",
      uiuxDesc: "Com UI/UX, melhoro a usabilidade e o design do seu site ou aplicativo, tornando a experiência do usuário confortável. Vamos trabalhar juntos para destacar sua marca e atrair seus clientes.",
    }
  };

  return (
    <section>
      <div className="services" id="services">
        <div className="container">
          <h1 className="sub-title">
            {content[language].title.split(" ")[0]} <span>{content[language].title.split(" ")[1]}</span>
          </h1>
          <div className="services-list">
            <div>
              <FontAwesomeIcon icon={faLaptopCode} className="icon-hover" />
              <h2>{content[language].frontendTitle}</h2>
              <p>{content[language].frontendDesc}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPaintBrush} className="icon-hover" />
              <h2>{content[language].uiuxTitle}</h2>
              <p>{content[language].uiuxDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
