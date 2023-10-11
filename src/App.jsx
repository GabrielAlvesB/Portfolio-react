import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import NavBar from './components/navbar/NavBar';
import SocialUni from './components/social/socialUni/SocialUni';
import Sobre from './components/titulos/Sobre';
import SobreCard from './components/sobre/SobreCard';
import Skill from './components/titulos/Skill';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <NavBar/>
      <SocialUni/>
      <Sobre />
      <SobreCard />
      <Skill />
    </div>
  )
}

export default App
