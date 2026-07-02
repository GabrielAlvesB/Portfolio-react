import React, { useState } from 'react'
import "./SobreCard.css"
import { sobreList } from '../../data/SobreList'
import { FiUser, FiTarget, FiZap } from 'react-icons/fi'

const SobreCard = () => {
  const [activeTab, setActiveTab] = useState(0)

  const icons = [FiUser, FiTarget, FiZap]

  return (
    <div className='sobre-container'>
      <div className='sobre-wrapper'>
        <div className='sobre-tabs'>
          {sobreList.map((sobre, index) => {
            const IconComponent = icons[index]
            return (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <IconComponent size={24} />
                <span>{sobre.titulo}</span>
              </button>
            )
          })}
        </div>

        <div className='sobre-content'>
          <div className='content-tabs-container'>
            {sobreList.map((sobre, index) => (
              <div
                key={index}
                className={`content-tab ${activeTab === index ? 'active' : ''}`}
              >
                <div className='content-inner'>
                  <div className='content-image'>
                    <img src={sobre.imagem} alt={sobre.titulo} />
                    <div className='image-glow'></div>
                  </div>
                  
                  <div className='content-text'>
                    <h3>{sobre.titulo}</h3>
                    <p>{sobre.texto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='progress-dots'>
            {sobreList.map((_, index) => (
              <div
                key={index}
                className={`dot ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreCard