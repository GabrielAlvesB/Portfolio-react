import React from 'react'
import "./SobreCard.css"
import Card from './Card'
import { sobreList } from '../../data/SobreList'


const SobreCard = () => {
  return (
    <div className='d-flex justify-content-center align-items-center sobrecard'>

    {
      sobreList.map((sobre, index) =>{
        return(
          <div key={index}  className="p-1">
          <Card imagem={sobre.imagem} titulo={sobre.titulo} texto={sobre.texto} />
        </div>
        )
      })
    }
    </div>
  )
}

export default SobreCard