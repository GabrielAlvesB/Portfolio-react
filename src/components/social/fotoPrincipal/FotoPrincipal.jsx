import React from 'react'
import "./FotoPrincipal.css"

import FotoPerfil from '../../../../public/img/perfil/FotoPerfil.png'

const FotoPrincipal = () => {
  return (
    <div>
        <div id='Custom-photo'>
            <img src={FotoPerfil} alt="" />
        </div>
    </div>
  )
}

export default FotoPrincipal