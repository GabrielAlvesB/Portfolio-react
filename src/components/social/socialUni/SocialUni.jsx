import React from 'react'
import Nome from '../nome/Nome'
import RedeSocialList from '../redesSocial/RedeSocialList'
import "./SocialUni.css"
import FotoPrincipal from '../fotoPrincipal/FotoPrincipal'
const SocialUni = () => {
  return (
    <div className='d-flex principal'>
         <div className='social d-flex flex-column justify-content-center align-items-center mt-2'>
            <Nome/>
            <RedeSocialList/>
        </div>
        <div className='imagem d-flex flex-column justify-content-center align-items-center mt-2'>
            <FotoPrincipal/>
        </div>
    </div>
  )
}

export default SocialUni