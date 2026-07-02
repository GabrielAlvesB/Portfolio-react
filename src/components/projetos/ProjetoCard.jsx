import React, { useState } from 'react'
import './ProjetoCard.css'
import Button from '../../@lib/button/Button'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjetoCard = ({ name, img, link, logo, logo2, freela, icones, isNew }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="post-card mt-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isNew && <div className="new-project-badge">Novo</div>}
      
      <div className="project-image-wrapper">
        <img src={img} alt={name} className="image-preview" />
        <div className={`project-overlay ${isHovered ? 'active' : ''}`}>
          <div className="overlay-content">
            <a href={link} target="_blank" rel="noopener noreferrer" className="overlay-button">
              <FiExternalLink size={24} />
              Visualizar
            </a>
          </div>
        </div>
      </div>

      <div className="project-header">
        <div className='d-flex justify-content-center gap-3 align-items-center'>
          <img src={logo} alt="Logo 1" className="avatar" />
          {freela && <img src={logo2} alt="Logo 2" className="avatar" />}
        </div>
        <h3 className="titleProjetos">{name}</h3>
      </div>

      <div className="technologies-section">
        <div className='d-flex justify-content-center gap-2 flex-wrap'>
          {icones.map((icone) => (
            <div key={icone.id} className="tech-badge">
              <img src={icone.nome} alt="Tech" className='iconesProjeto' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjetoCard