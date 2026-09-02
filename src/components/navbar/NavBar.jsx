"use client";

import "./NavBar.css";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Logo = "/img/iconePrincipal/logoazul.png";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Início", id: "home" },
    { label: "Sobre", id: "sobre" },
    { label: "Experiência", id: "experiencia" },
    { label: "Habilidades", id: "habilidades" },
    { label: "Projetos", id: "projetos" },
    { label: "Contato", id: "contato" },
  ];

  const handleNavigation = (sectionId) => {
    setIsOpen(false);

    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("home");
          }}
          role="button"
          tabIndex={0}
        >
          <div className="navbar-logo">
            <img src={Logo} alt="Logo Gabriel Alves" />
          </div>
          <span className="navbar-name">Gabriel Alves</span>
        </div>

        <button
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
};

export default NavBar;
