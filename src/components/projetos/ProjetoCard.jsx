import React from 'react'
import './ProjetoCard.css'
import Button from '../../@lib/button/Button'

const ProjetoCard = ({ name, img, link, logo, icones }) => {
  return (
    <div class="post-card mt-2">
      <div className='d-flex justify-content-center'>

        <img src={logo} alt="" className="avatar" />

      </div>
      <div className='d-flex justify-content-center mt-2'>
        <p href="#" class="titleProjetos">{name}</p>
      </div>
      <div className='mt-2'>
        <img src={img} alt="#" className="image-preview" />
      </div>
      <div className='d-flex  justify-content-around mt-4'>
        {icones.map((icone) => (
          <img key={icone.id} src={icone.nome} alt="" className='iconesProjeto' />
        ))}
      </div>
      <div className='d-flex justify-content-center mt-4 mb-2'>
        <a href={link} target="_blank">
          <Button size={"medium"} name={`Saiba +`} />
        </a>
      </div>
    </div>
  )
}

export default ProjetoCard