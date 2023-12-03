import React from 'react'
import Projeto from './Projeto'
import "./ProjetoCard.css"

import { AiFillHtml5 } from "react-icons/ai";
import {FaCss3Alt, FaReact} from "react-icons/fa"
import {SiVisualstudiocode, SiJetbrains} from "react-icons/si"
import {BiLogoJavascript, BiLogoBootstrap} from "react-icons/bi"

const ProjetoCard = () => {
  return (
   <div className='d-flex'>
    <Projeto/>
    <Projeto/>
    <Projeto/>

   </div>
  )
}

export default ProjetoCard