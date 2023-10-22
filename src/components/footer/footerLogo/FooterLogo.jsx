import React from 'react'
import "./FooterLogo.css"

const FooterLogo = () => {
  return (
    <div className='footerLogo d-flex flex-nowrap p-2'>
      <div className="imagemFooter">
        <img src="../../../../public/img/logoazul.png" alt="" />
      </div>
      <div className='textFooter'> 
        <h3>Gabriel Alves</h3>
      </div>
    </div>
  )
}

export default FooterLogo