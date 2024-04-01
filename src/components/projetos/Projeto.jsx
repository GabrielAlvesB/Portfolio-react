import React from 'react'
import ProjetoCard from './ProjetoCard'
import { ProjetosList } from '../../data/ProjetosList'

const Projeto = () => {
  return (
    <div class="container d-flex  justify-content-around mb-4 mt-2 ">
      <div class="row">
        {ProjetosList.map(({ id, name, img, link, logo, icones }) => (
          <div class="col" key={id}>
            <ProjetoCard name={name} img={img} link={link} logo={logo} icones={icones} />
          </div>
        ))}

      </div>
    </div>
  )
}

export default Projeto