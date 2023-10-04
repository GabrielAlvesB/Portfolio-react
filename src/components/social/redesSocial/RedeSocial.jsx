import React from 'react'

import "./RedeSocial.css"

import {AiFillLinkedin, AiOutlineGithub,AiOutlineInstagram} from "react-icons/ai"

const RedeSocial = () => {
  return (
    <div class="social-links">
		<div id="instagram" class="social-btn flex-center">
			<AiOutlineInstagram/><span>@gabeel.dev</span>
		</div>
		<div id="linkedin" class="social-btn flex-center">
            <AiFillLinkedin/><span>gabrielalvesbatista</span>
		</div>
    
		<div id="github" class="social-btn flex-center">
			<AiOutlineGithub/><span>GabrielAlvesB</span>
	</div>
</div>
  )
}

export default RedeSocial