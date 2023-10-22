import React from 'react'
import './FooterInfo.css'
import { BiMap, BiPhone } from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai"


const FooterInfo = () => {
  return (
    <div id='footerInfo'>
      <div className="mapInfo d-flex  justify-content-center align-items-center">
        <div className='logosFooterInfo d-flex  justify-content-end'>
        <BiMap className='mapInfoImagem m-2' />

        </div>

        <div className="mapInfoText bbbbb">
          <p>Vila Velha / ES</p>
        </div>
      </div>

      <div className="telefoneInfo d-flex  justify-content-center align-items-center ">
        <div className='logosFooterInfo'>

        <BiPhone className='telefoneInfoImagem m-2 ' />
        </div>
        <div className="telefoneInfoText">
          <p>(33) 99191-6117</p>
        </div>
      </div>

    </div>
  )
}

export default FooterInfo