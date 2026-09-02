"use client";

import { useState } from "react";
import "./SobreCard.css";
import { sobreList } from "../../data/SobreList";
import { Cargos } from "../../data/Cargos";
import { FiUser, FiTarget } from "react-icons/fi";

const icons = [FiUser, FiTarget];

const stats = [
  { valor: "5+", label: "Anos de experiência" },
  { valor: String(Cargos.length), label: "Empresas & projetos" },
  { valor: "Full Stack", label: "Foco atual" },
];

const SobreCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="sobre-container">
      <div className="sobre-wrapper">
        <div className="sobre-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="sobre-stat">
              <strong>{stat.valor}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        {sobreList.length > 0 && (
          <>
            <div className="sobre-tabs">
              {sobreList.map((sobre, index) => {
                const IconComponent = icons[index];
                return (
                  <button
                    key={index}
                    className={`tab-button ${activeTab === index ? "active" : ""}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <IconComponent size={18} />
                    <span>{sobre.titulo}</span>
                  </button>
                );
              })}
            </div>

            <div className="sobre-content">
              <div className="content-tabs-container">
                {sobreList.map((sobre, index) => {
                  const IconComponent = icons[index];
                  return (
                    <div key={index} className={`content-tab ${activeTab === index ? "active" : ""}`}>
                      <div className="content-inner">
                        <div className="content-header">
                          <span className="content-icon-badge">
                            <IconComponent size={22} />
                          </span>
                          <h3>{sobre.titulo}</h3>
                        </div>
                        <p>{sobre.texto}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="progress-dots">
                {sobreList.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${activeTab === index ? "active" : ""}`}
                    onClick={() => setActiveTab(index)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SobreCard;
