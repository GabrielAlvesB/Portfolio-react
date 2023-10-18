import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import NavBar from './components/navbar/NavBar';
import SocialUni from './components/social/socialUni/SocialUni';
import Sobre from './components/titulos/Sobre';
import SobreCard from './components/sobre/SobreCard';
import Skill from './components/titulos/Skill';
import Skills from './components/skills/Skills';
import Projetos from './components/titulos/Projetos';
import ProjetoCard from './components/projetos/ProjetoCard';
import Trajetoria from './components/trajetoria/Trajetoria';
import Empregos from './components/titulos/Empregos';




function App() {
  return (
    <div className='container'>
      <NavBar/>
      <SocialUni/>
      <Sobre />
      <SobreCard />
      <Skill />
      <Skills />
      <Projetos />
      <ProjetoCard />
      <Empregos />
      <Trajetoria />
      <Projetos />

    </div>
  )
}
export default App
