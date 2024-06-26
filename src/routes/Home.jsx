import React from 'react'
import SocialUni from '../components/social/socialUni/SocialUni';
import Sobre from '../components/titulos/Sobre';
import SobreCard from '../components/sobre/SobreCard';
import Skill from '../components/titulos/Skill';
import Skills from '../components/skills/Skills';
import Projetos from '../components/titulos/Projetos';
import Empregos from '../components/titulos/Empregos';
import Trajetoria from '../components/trajetoria/Trajetoria';
import Contract from '../components/titulos/Contract';
import Contato from '../components/contato/Contato';
import Projeto from '../components/projetos/Projeto';




const Home = () => {
  return (
    <div>
      <SocialUni/>
      <Sobre />
      <SobreCard />
      <Skill />
      <Skills />
      <Projetos />
      <Projeto/>
      <Empregos />
      <Trajetoria />
      <Contract />
      <Contato /> 
    </div>
  )
}

export default Home