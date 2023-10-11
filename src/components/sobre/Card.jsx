import React from 'react'

import "./Card.css"

const Card = ({imagem,titulo,texto}) => {

    const tituloInicial = titulo
    const textoPrincipal = texto

    return (
        <div>

            <div class="card">
                <div class="content">
                    <div class="back">
                        <div class="back-content">
                            <img src={imagem} alt="" />
                            <strong>{tituloInicial}</strong>
                        </div>
                    </div>
                    <div class="front">

                        <div class="img">
                            <div class="circle">
                            </div>
                            <div class="circle" id="right">
                            </div>
                            <div class="circle" id="bottom">
                            </div>
                        </div>

                        <div class="front-content">
                            <small class="badge">{tituloInicial}</small>
                            <div class="description">
                                <div class="title">
                                    <p class="title">
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