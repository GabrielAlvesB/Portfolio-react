import React from 'react'

import "./Card.css"

const Card = ({imagem,titulo,texto}) => {

    const tituloInicial = titulo
    const textoPrincipal = texto

    return (
        <div>

            <div className="card">
                <div className="content">
                    <div className="back">
                        <div className="back-content">
                            <img src={imagem} alt="" />
                            <strong>{tituloInicial}</strong>
                        </div>
                    </div>
                    <div className="front">

                        <div className="img">
                            <div className="circle">
                            </div>
                            <div className="circle" id="right">
                            </div>
                            <div className="circle" id="bottom">
                            </div>
                        </div>

                        <div className="front-content">
                            <small className="badge">{tituloInicial}</small>
                            <div className="description">
                                <div className="title">
                                    <p className="title">
                                        <strong>{textoPrincipal}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card