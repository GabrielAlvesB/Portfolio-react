import React from 'react'
import "./Titulos.css"

const Titulos = (props) => {
  return (
    <div className='d-flex justify-content-center '>
        <button data-text="Awesome" class="button">
            {props.children}
        </button>
    </div>
   
  )
}
export default Titulos