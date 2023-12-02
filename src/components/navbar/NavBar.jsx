import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBar.css";


const NavBar = () => {
  return (

    <Navbar expand="lg" className="navbarcor" sticky="top">
      <Container className=' d-flex justify-content-center align-items-center '>
        
        <Navbar.Brand href="#" className='d-flex '>
            <div className='navbar-imagem-nome d-flex align-items-center' >
                <img src="../../../public/img/logoazul.png" alt="" />
            </div>
            <div className='navBarTitulo d-flex align-items-center'>
                Gabriel Alves
            </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar