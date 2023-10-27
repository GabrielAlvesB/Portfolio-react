import React from 'react'
import "./Nome.css"
const Nome = ({name}) => {

  const nome = name

  return (
    <div className="loader ">
        <div data-glitch={nome} class="glitch">{nome}</div>
    </div>
  )
}

export default Nome