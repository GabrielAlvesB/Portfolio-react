import React from 'react'

import "./RedeSocialList.css"

import {AiFillLinkedin, AiOutlineGithub,AiOutlineInstagram} from "react-icons/ai"
import RedeSocial from './RedeSocial'


const listSocial = [
	{id:1, children: <AiOutlineInstagram/>, indentifier: "gabeel.dev"},
	{id:2, children: <AiFillLinkedin/>, indentifier: "gabrielalvesbatista"},
	{id:3, children: <AiOutlineGithub/>, indentifier: "GabrielAlvesB"},
]


const RedeSocialList = () => {
  return (
    <div className="social-links">
		{listSocial.map(social => {
			return(
				<RedeSocial key={social.id} indentifier={social.indentifier} children={social.children}/>
			)
		})}
	</div>
  )
}

export default RedeSocialList