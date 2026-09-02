import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppLink } from "../../config/whatsapp";
import "./Footer.css";

const Footer = () => {
  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="container">
        <p>© {ano} Gabriel Alves Batista. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/GabrielAlvesB" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gabrielalvesbatista/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/gabeel.dev/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a
            href={buildWhatsAppLink("Olá, Gabriel! Vim pelo seu portfólio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-footer-link"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
