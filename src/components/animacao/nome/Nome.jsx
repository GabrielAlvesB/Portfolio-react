import React from 'react'
import "./Nome.css"

import Typewriter from 'typewriter-effect';
const Nome = () => {

  return (
    <div className="name">
      <Typewriter
        options={{
          strings: ['Gabriel Alves Batista', 'Desenvolvedor Front End', 'Web Design' , 'Ui/UX'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}

export default Nome