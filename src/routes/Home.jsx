import React from 'react'
import SocialUni from '../components/social/socialUni/SocialUni';

import SobreCard from '../components/sobre/SobreCard';

import Skills from '../components/skills/Skills';

import Contato from '../components/contato/Contato';
import Projeto from '../components/projetos/Projeto';
import Titulos from '../@lib/Titulos/Titulos';


const Home = () => {
  return (
    <div>
      <section id="home">
        <SocialUni/>
      </section>

      <section id="sobre">
        <Titulos>
          <span className="actual-text">&nbsp;Sobre&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;Sobre&nbsp;</span>
        </Titulos>
        <SobreCard />
      </section>

      <section id="habilidades">
        <Titulos>
          <span className="actual-text">&nbsp;Skill&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;Skill&nbsp;</span>
        </Titulos>
        <Skills />
      </section>

      <section id="projetos">
        <Titulos>
          <span className="actual-text">&nbsp;Projetos&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;Projetos&nbsp;</span>
        </Titulos>
        <Projeto/>
      </section>

      <section id="contato">
        <Titulos>
          <span className="actual-text">&nbsp;Contato&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;Contato&nbsp;</span>
        </Titulos>
        <Contato /> 
      </section>
    </div>
  )
}

export default Home