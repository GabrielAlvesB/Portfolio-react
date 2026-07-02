import React from "react";
import ProjetoCard from "./ProjetoCard";
import { ProjetosList } from "../../data/ProjetosList";
import "./Projeto.css";
import Button from "../../@lib/button/Button";
import { FiGithub, FiArrowRight } from "react-icons/fi";

const Projeto = () => {
  return (
    <div className="projeto-container">
      <div className="projeto-content">
        <div className="projeto-card">
          {ProjetosList.map((projeto) => (
            <div className="col" key={projeto.id}>
              <ProjetoCard
                name={projeto.name}
                img={projeto.img}
                link={projeto.link}
                logo={projeto.logo}
                logo2={projeto.logo2}
                freela={projeto.freela}
                icones={projeto.icones}
                isNew={projeto.isNew}
              />
            </div>
          ))}
        </div>

        <div className="projeto-footer">
          <div className="footer-content">
            <div className="footer-illustration">
              <div className="github-icon-large">
                <FiGithub size={80} />
              </div>
            </div>
            <div className="footer-text-section">
              <h3 className="footer-title">Quer ver mais projetos?</h3>
              <p className="footer-subtitle">Visite meu GitHub e conheça outros trabalhos</p>
              <a href="https://github.com/GabrielAlvesB" target="_blank" rel="noopener noreferrer" className="github-link">
                <Button size={"medium"} name="GitHub" />
                <FiArrowRight size={20} className="arrow-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projeto;
