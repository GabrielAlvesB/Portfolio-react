import React from 'react'
import "./Projeto.css"

// import { AiFillHtml5 } from "react-icons/ai";

const Projeto = ({imagem, text, titulo, logo1, logo2, logo3, logo4, logo5}) => {
  return (
    <div className='ProjetoCard'>
        <div className="imagemProjetoCard d-flex justify-content-center align-items-center">
            <img src={imagem} alt="" />
        </div>
        <div className="textoProjetoCard">
            <div className="tituloProjetoCard">
                <h3>{titulo}</h3>
            </div>
            <div className="escritaProjetoCard">
                <p>{text}</p>
            </div>
            <div className="d-flex justify-content-between p-1 aaaaaaa">
                <div >{logo1} {logo2} {logo3} {logo4} {logo5}</div>
                <button className='botao'>Site</button>
            </div>
        </div>
    </div>
  )
}

export default Projeto