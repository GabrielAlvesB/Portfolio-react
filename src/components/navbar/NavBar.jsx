import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Oculos from '/img/iconePrincipal/logoazul.png'
import "./NavBar.css";
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [displayName, setDisplayName] = useState('Gabriel Alves');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const programmingVariations = [
    'Gabriel Alves',
    'Gabriel Alves.Batista',
    'Gabriel Alves.dev',
    'Gabriel Alves.js',
    'Gabriel Alves.jsx',
    'Gabriel Alves.ts',
    'Gabriel Alves.tsx',
    'Gabriel Alves.react',
    'Gabriel Alves.node',
    'Gabriel Alves.express',
    'Gabriel Alves.tailwind',
    'Gabriel Alves.code',
    'Gabriel Alves.tech',
    'Gabriel Alves.script',
    'Gabriel Alves.algo',
    'Gabriel Alves.bug',
    'Gabriel Alves.fix',
    'Gabriel Alves.merge',
    'Gabriel Alves.push',
    'Gabriel Alves.pull',
    'Gabriel Alves.commit',
    'Gabriel Alves.branch',
    'Gabriel Alves.terminal',
    'Gabriel Alves.console',
    'Gabriel Alves.debug',
  ];

  useEffect(() => {
    // Espera 3 segundos antes de começar a animação
    const initialDelay = setTimeout(() => {
      setIsAnimating(true);
    }, 3000);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (isAnimating) {
        currentIndex = (currentIndex + 1) % programmingVariations.length;
        setDisplayName(programmingVariations[currentIndex]);
      }
    }, 2000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isAnimating]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className="navbarcor" sticky="top">
      <Container>
        <Navbar.Brand 
          href="#" 
          className='d-flex align-items-center brand-container justify-content-center justify-content-lg-between'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <div className='navbar-imagem-nome d-flex align-items-center'>
            <img src={Oculos} alt="Logo" />
          </div>
          <div className='navBarTitulo d-flex align-items-center'>
            <span className={`name-animation ${isAnimating ? 'animating' : ''}`}>
              {displayName}
            </span>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              href="#home" 
              className="nav-link-custom"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Início
            </Nav.Link>
            <Nav.Link 
              href="#sobre" 
              className="nav-link-custom"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('sobre');
              }}
            >
              Sobre
            </Nav.Link>
            <Nav.Link 
              href="#habilidades" 
              className="nav-link-custom"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('habilidades');
              }}
            >
              Habilidades
            </Nav.Link>
            <Nav.Link 
              href="#projetos" 
              className="nav-link-custom"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projetos');
              }}
            >
              Projetos
            </Nav.Link>
            <Button 
              href="#contato" 
              className="contact-button ms-3"
              variant="outline-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contato');
              }}
            >
              Contato
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar