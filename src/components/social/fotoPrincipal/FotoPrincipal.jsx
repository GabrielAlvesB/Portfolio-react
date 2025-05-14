import React, { useState, useEffect } from 'react'
import "./FotoPrincipal.css"

import FotoPerfil from '/img/perfil/FotoPerfil.png'
import FotoPerfilanime from '/img/perfil/desenho.png'
import ImageHover from '../../ImageHover'

const FotoPrincipal = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setIsHovered(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <div 
          id='Custom-photo'
        >
            <img 
              src={FotoPerfil} 
              alt="Foto de perfil principal"
              className={`base-image ${isHovered ? 'fade-out' : 'fade-in'}`}
            />
            <img 
              src={FotoPerfilanime}
              alt="Foto de perfil alternativa"
              className={`hover-image ${isHovered ? 'fade-in' : 'fade-out'}`}
            />
        </div>
    </div>
  )
}

export default FotoPrincipal