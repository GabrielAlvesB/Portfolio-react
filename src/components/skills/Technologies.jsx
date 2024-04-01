import React from 'react';
import './Skills.css'; // Certifique-se de que o arquivo CSS está corretamente importado

const Technologies = ({ srcImg, skill }) => {
  return (
    <div className="Skill">
      <img className="imagemskill" src={srcImg} alt="" />
      <p className="nomeSkil">{skill}</p>
    </div>
  );
};

export default Technologies;
