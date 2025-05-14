import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='rodape'>
            <div className="container">
                <p>© 2024 Gabriel Alves Batista. Todos os direitos reservados.</p>
                <div className="social-links">
                    <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer