import React from 'react'
import Projeto from './Projeto'
import "./ProjetoCard.css"

import { AiFillHtml5 } from "react-icons/ai";
import {FaCss3Alt, FaReact} from "react-icons/fa"
import {SiVisualstudiocode, SiJetbrains} from "react-icons/si"
import {BiLogoJavascript, BiLogoBootstrap} from "react-icons/bi"

const ProjetoCard = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>

      <div className="grupo1 d-flex">
        <div className="p-1">
          <Projeto titulo={"MediCenter"} logo1={ <AiFillHtml5 /> } logo2={ <FaCss3Alt /> } logo3={ <SiVisualstudiocode /> } imagem={"../../../public/projetos/MediCenter/01-principal-medi.png"} text={"O MediCenter é um projeto que utilizou um layout pré-existente do professor Bonieky Lacerda em um curso de HTML5 & CSS3. Foi uma oportunidade de praticar os conhecimentos adquiridos no curso, usando apenas HTML e CSS puros, e todo o site foi desenvolvido com Flexbox."} />

        </div>
        <div className="p-1">
          <Projeto titulo={"Multistep Form"} logo1={ <AiFillHtml5 /> } logo2={ <FaCss3Alt /> } logo3={ <FaReact /> } imagem={"../../../public/projetos/react_multistep_form/01-Principal - alt.png"} text={"O projeto Multistep Form, foi desenvolvido como exercicio de treinamento do curso de Formação Front-end - HTML, CSS, JavaScript, React e + na plataforma da Udmey, solicitado pelo professor Matheus Battisti e a rede de ensino Hora de Codar."} />
        </div>
      </div>
      <div className="grupo1 d-flex">
        <div className="p-1">
          <Projeto titulo={"SelectCar"} logo1={ <AiFillHtml5 /> } logo2={ <FaCss3Alt /> } logo3={ <BiLogoJavascript /> } logo4={ <BiLogoBootstrap /> } logo5={ <SiJetbrains/> } imagem={"../../../public/projetos/selectCar/01-principal-sc.png"} text={"SelectCar é uma loja virtual de veículos que foi desenvolvida de forma que o usuário pudesse filtrar as informações do veículo desejado, como: cidade onde o veículo está, o ano e quantos quilometros o carro desejado rodou até o momento."} />
        </div>

      </div>


    </div>
  )
}

export default ProjetoCard