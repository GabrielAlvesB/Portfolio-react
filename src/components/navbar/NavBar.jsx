import "./NavBar.css";
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '/img/iconePrincipal/logoazul.png'
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Projetos', id: 'projetos' },
  ];

  const handleNavigation = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo e Nome */}
        <div 
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('home');
          }}
          role="button"
          tabIndex={0}
        >
          <div className="navbar-logo">
            <img src={Logo} alt="Logo Gabriel Alves" />
          </div>
          <div className="navbar-name">
            <span>Gabriel Alves</span>
            <div className="name-underline"></div>
          </div>
        </div>

        {/* Menu Toggle Mobile */}
        <button 
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menu Links */}
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => handleNavigation(item.id)}
              >
                <span className="nav-link-text">{item.label}</span>
                <span className="nav-link-underline"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            className="contact-cta"
            onClick={() => handleNavigation('contato')}
          >
            <span>Contato</span>
            <span className="cta-icon">→</span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
};

export default NavBar;