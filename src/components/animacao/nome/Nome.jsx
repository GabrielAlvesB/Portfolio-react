import React from 'react'
import "./Nome.css"
const Nome = ({ name }) => {

  const nome = name

  return (
    <div className="nameClasse">
      <span className="NameText">{nome}</span>
    </div>
  )
}

export default Nome