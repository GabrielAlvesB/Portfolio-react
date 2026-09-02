"use client";

import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppLink } from "../../config/whatsapp";
import "./WhatsAppButton.css";

const DEFAULT_MESSAGE = "Olá, Gabriel! Vi seu portfólio e gostaria de conversar sobre um projeto.";

const WhatsAppButton = () => {
  return (
    <a
      href={buildWhatsAppLink(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Conversar no WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="whatsapp-float-pulse"></span>
    </a>
  );
};

export default WhatsAppButton;
