"use client";

import { useState } from "react";
import { ProjetosList } from "../../data/ProjetosList";
import "./Projeto.css";
import Button from "../../@lib/button/Button";
import { FiGithub, FiArrowRight, FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const Projeto = () => {
  const [active, setActive] = useState(0);
  const projeto = ProjetosList[active];

  return (
    <div className="projeto-container">
      <div className="projeto-content">
        <div className="projeto-showcase">
          <div className="projeto-list">
            {ProjetosList.map((p, index) => (
              <div
                key={p.id}
                className={`projeto-entry ${active === index ? "active" : ""}`}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <span className="projeto-index">{String(index + 1).padStart(2, "0")}</span>

                <div className="projeto-entry-info">
                  <h3>
                    {p.name}
                    {p.isNew && <span className="entry-badge-novo">Novo</span>}
                    {p.freela && <span className="entry-badge-freela">Freelance</span>}
                  </h3>
                  <p>{p.descricao}</p>
                  <div className="projeto-entry-tech">
                    {p.icones.map((icone) => (
                      <img key={icone.id} src={icone.nome} alt="" />
                    ))}
                  </div>
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projeto-entry-link"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Abrir ${p.name}`}
                >
                  <FiArrowUpRight size={22} />
                </a>
              </div>
            ))}
          </div>

          <div className="projeto-preview">
            <div className="projeto-preview-frame">
              <div className="frame-bar">
                <span className="frame-dot dot-red"></span>
                <span className="frame-dot dot-yellow"></span>
                <span className="frame-dot dot-green"></span>
              </div>
              <div className="frame-image-wrapper">
                <img key={projeto.id} src={projeto.img} alt={projeto.name} className="frame-image" />
              </div>
            </div>

            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="preview-cta">
              Ver {projeto.name} ao vivo
              <FiExternalLink size={16} />
            </a>
          </div>
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
