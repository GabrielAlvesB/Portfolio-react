import Nome from "../../animacao/nome/Nome";
import RedeSocialList from "../redesSocial/RedeSocialList";
import "./SocialUni.css";
import FotoPrincipal from "../fotoPrincipal/FotoPrincipal";
import { FiArrowRight, FiChevronDown, FiDownload, FiTerminal } from "react-icons/fi";

const SocialUni = () => {
  return (
    <div className="hero">
      <div className="hero-glow hero-glow-1"></div>

      <div className="hero-content">
        <span className="hero-greeting">
          <span className="hero-greeting-dash"></span>
          Olá, eu sou
        </span>

        <h1 className="hero-name">Gabriel Alves</h1>

        <div className="hero-role-chip">
          <FiTerminal size={16} />
          <Nome />
        </div>

        <p className="hero-tagline">
          Crio interfaces rápidas e bem cuidadas com React, Next.js e TypeScript —
          do primeiro protótipo ao deploy.
        </p>

        <RedeSocialList />

        <div className="hero-actions">
          <a href="/curriculo/Curriculo.jpg" download className="hero-resume-btn">
            <FiDownload size={18} />
            Baixar Currículo
          </a>
          <a href="#contato" className="hero-contact-btn">
            Vamos conversar
            <FiArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <FotoPrincipal />
        <div className="hero-badge hero-badge-top">
          <span className="hero-badge-dot"></span>
          Disponível para novos projetos
        </div>
        <div className="hero-badge hero-badge-bottom">
          <strong>5+</strong> anos de experiência
        </div>
      </div>

      <a href="#sobre" className="hero-scroll" aria-label="Rolar para a próxima seção">
        <FiChevronDown size={22} />
      </a>
    </div>
  );
};

export default SocialUni;
