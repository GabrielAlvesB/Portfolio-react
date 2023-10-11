import React from 'react'

import "./RedeSocial1.css"


const RedeSocial = ({indentifier, children}) => {
  return (

    <div class="social-btn flex-center rede-social-color">
		{children} <span>{indentifier}</span>
	</div>
  )
}

export default RedeSocial