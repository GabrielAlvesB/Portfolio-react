import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBar.css";


const NavBar = () => {
  return (

    <Navbar expand="lg" className="navbarcor" sticky="top">
      <Container className=' d-flex justify-content-center align-items-center m-2'>
        
        <Navbar.Brand href="#" className='d-flex'>
            <div className='navbar-imagem-nome p-2' >
                <img src="../../../public/img/logoazul.png" alt="" />
            </div>
            <div className='p-2'>
                Gabriel Alves
            </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar