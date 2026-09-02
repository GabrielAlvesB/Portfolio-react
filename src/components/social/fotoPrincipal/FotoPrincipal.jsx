"use client";

import { useState, useEffect } from "react";
import "./FotoPrincipal.css";

const FotoPerfil = "/img/perfil/FotoPerfil.png";
const FotoPerfilanime = "/img/perfil/desenho.png";

const FotoPrincipal = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovered((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="Custom-photo">
        <img
          src={FotoPerfil}
          alt="Foto de perfil principal"
          className={`base-image ${isHovered ? "fade-out" : "fade-in"}`}
          loading="eager"
          decoding="async"
        />
        <img
          src={FotoPerfilanime}
          alt="Foto de perfil alternativa"
          className={`hover-image ${isHovered ? "fade-in" : "fade-out"}`}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default FotoPrincipal;
