import React from "react";
import ProjetoCard from "./ProjetoCard";
import { ProjetosList } from "../../data/ProjetosList";
import "./Projeto.css";
import Button from "../../@lib/button/Button";

const Projeto = () => {
  return (
    <div class="container d-flex  justify-content-around mb-4 mt-2 projeto-div ">
      <div class="projeto-card">
        {ProjetosList.map(({ id, name, img, link, logo, logo2, freela, icones }) => (
          <div class="col " key={id}>
            <ProjetoCard
              name={name}
              img={img}
              link={link}
              logo={logo}
              logo2={logo2}
              freela={freela}
              icones={icones}
            />
          </div>
        ))}
      </div>

      <div className="github-button">
        <a href="https://github.com/GabrielAlvesB" target="_blank">
          <Button size={"medium"} name="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Projeto;
