import { FaArrowUp } from 'react-icons/fa';
import "../Footer/footer.css";
import logo from "../../assets/img/logo.png"

const Footer = () => {
  return (
    <>
      <div className="last-text">
        <p>
          Developed by{" "}
          <img
            src={logo}
            alt="Jose Frota"
            className="footer-logo"
          />{" "}
          &copy; 2025
        </p>
      </div>
      <a href="#" className="top">
        <FaArrowUp />
      </a>
    </>
  );
};

export default Footer;
