import React from 'react'
import FooterLogo from './footerLogo/FooterLogo';
import FooterInfo from './footerInfo/FooterInfo';
import './Footer.css'
const Footer = () => {
    return (
        <div className='rodape'>
            <div className='footer'>
            <div className="footerLogo1">
                <FooterLogo />
            </div>
            <div className="footerInfo">
                <FooterInfo />
            </div>
            </div>



            <div className='direitosReservados'>
                <p>Direitos reservados: <a href="https://github.com/GabrielAlvesB" target="_blank" rel="noopener noreferrer">Gabriel Alves</a></p>
            </div>

        </div>
    )
}

export default Footer