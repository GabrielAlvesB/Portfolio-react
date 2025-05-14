import React from 'react'
import "./Nome.css"

import Typewriter from 'typewriter-effect';
const Nome = () => {

  return (
    <div className="name">
      <Typewriter
        options={{
          strings: [
            'Desenvolvedor Full Stack',
            'Criador de Soluções',
            'Especialista em React',
            'Desenvolvedor Web',
            'Entusiasta de UI/UX',
            'Resolvedor de Problemas',
            'Inovador Digital',
            'Desenvolvedor Full Stack',
            'Criador de Experiências',
            'Especialista em JavaScript',
            'Desenvolvedor Full Stack'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 50,
          cursor: '|',
          wrapperClassName: 'typewriter-wrapper'
        }}
      />
    </div>
  )
}

export default Nome