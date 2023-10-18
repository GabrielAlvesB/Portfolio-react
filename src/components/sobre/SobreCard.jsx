import React from 'react'
import "./SobreCard.css"
import Card from './Card'
const SobreCard = () => {
  return (
    <div className='d-flex justify-content-center align-items-center sobrecard'>

      
    <div className="p-1">
      <Card imagem="../../../public/sobre-mim/apresentação.png" titulo="Apresentação" texto="Meu nome é Gabriel Alves Batista e sou um jovem Desenvolvedor Front-end com experiência em React.js, JavaScript, TypeScript, Bootstrap e Linux. Tenho paixão por criar componentes reutilizáveis e participar de projetos que seguem Metodologias Ágeis.." />
    </div>

    <div className="p-1">
      <Card imagem="../../../public/sobre-mim/minhashabilidades.png" titulo="Minhas Habilidades" texto="Minha jornada com a tecnologia começou aos 8 anos, quando tive meu primeiro contato com o Windows XP (um sistema que ainda tenho carinho). Desde então, me tornei um entusiasta do Linux, especialmente do Ubuntu, que me fez valorizar o mundo do software de código aberto." />
    </div>

    <div className="p-1">
      <Card imagem="../../../public/sobre-mim/trajetória.png" titulo="Trajetória Tecnológica" texto="Minha jornada com a tecnologia começou aos 8 anos, quando tive meu primeiro contato com o Windows XP (um sistema que ainda tenho carinho). Desde então, me tornei um entusiasta do Linux, especialmente do Ubuntu, que me fez valorizar o mundo do software de código aberto." />
    </div>


      {/* <div class="container ">
        <div class="row ">
          <div class="g-col-6 ">
          <Card imagem="../../../public/sobre-mim/apresentação.png" titulo="Apresentação" texto="Minha jornada com a tecnologia começou aos 8 anos, quando tive meu primeiro contato com o Windows XP (um sistema que ainda tenho carinho). Desde então, me tornei um entusiasta do Linux, especialmente do Ubuntu, que me fez valorizar o mundo do software de código aberto." />
          </div>
          <div class="g-col-6 ">
          <Card imagem="../../../public/sobre-mim/apresentação.png" titulo="Apresentação" texto="Minha jornada com a tecnologia começou aos 8 anos, quando tive meu primeiro contato com o Windows XP (um sistema que ainda tenho carinho). Desde então, me tornei um entusiasta do Linux, especialmente do Ubuntu, que me fez valorizar o mundo do software de código aberto." />
          </div>
          <div class="g-col-6 ">
          <Card imagem="../../../public/sobre-mim/apresentação.png" titulo="Apresentação" texto="Minha jornada com a tecnologia começou aos 8 anos, quando tive meu primeiro contato com o Windows XP (um sistema que ainda tenho carinho). Desde então, me tornei um entusiasta do Linux, especialmente do Ubuntu, que me fez valorizar o mundo do software de código aberto." />
          </div>
        </div>
      </div> */}


      {/* <div className="imagem-sobre d-flex align-item-center justify-content-center">
            <img src="../../../public/img/avatar/Programador.png" alt="" />
        </div>
        <div className="text p-1">
            <h6 className='Apresentacao-sobre'>DEIXE-ME APRESENTAR-ME</h6>
            <p>Meu nome é Gabriel Alves Batista e sou um jovem Desenvolvedor Front-end com experiência em React.js, JavaScript, TypeScript, Bootstrap e Linux. Tenho paixão por criar componentes reutilizáveis e participar de projetos que seguem Metodologias Ágeis.</p>

            <p>Minha jornada com a tecnologia começou aos 8 anos, quando tive meu primeiro contato com o Windows XP (um sistema que ainda tenho carinho). Desde então, me tornei um entusiasta do Linux, especialmente do Ubuntu, que me fez valorizar o mundo do software de código aberto.</p>

            <p>Além das habilidades técnicas, sou reconhecido por minha capacidade de comunicação e disposição para ajudar a equipe. Tenho um instinto proativo para compartilhar conhecimento com meus colegas e sou conhecido por minha criatividade na adoção de novas tecnologias. Sou verdadeiramente apaixonado por tudo o que a tecnologia tem a oferecer e estou animado para continuar aprendendo e crescendo na minha carreira de Desenvolvedor Front-end.</p>
        </div> */}
    </div>
  )
}

export default SobreCard