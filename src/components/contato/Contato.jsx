"use client";

import { useState } from "react";
import "./Contato.css";
import { FiMessageSquare, FiSend, FiClock, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppLink, buildContactMessage } from "../../config/whatsapp";

const ASSUNTOS = [
  { label: "Orçamento", mensagem: "Gostaria de solicitar um orçamento para um projeto." },
  { label: "Proposta de projeto", mensagem: "Tenho uma proposta de projeto para conversar com você." },
  { label: "Dúvida", mensagem: "Tenho uma dúvida rápida." },
  { label: "Trabalhar juntos", mensagem: "Vi seu portfólio e adoraria trabalhar com você." },
];

const Contato = () => {
  const [formData, setFormData] = useState({ name: "", assunto: "", mensagem: "" });
  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (erro) setErro("");
  };

  const handleChip = (chip) => {
    setFormData((prev) => ({
      ...prev,
      assunto: chip.label,
      mensagem: prev.mensagem || chip.mensagem,
    }));
    if (erro) setErro("");
  };

  function handleSubmit(e) {
    e.preventDefault();

    const { name, assunto, mensagem } = formData;
    if (!name || !mensagem) {
      setErro("Preencha ao menos seu nome e a mensagem.");
      return;
    }

    const texto = buildContactMessage({ name, assunto, mensagem });
    window.open(buildWhatsAppLink(texto), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="containerContato">
      <div className="contatoWrapper">
        <div className="contatoPitch">
          <h2 className="contrateme">Vamos conversar</h2>
          <p className="pitchTexto">
            Me conta sobre a sua ideia, projeto ou vaga. Escolha um assunto, escreva a
            mensagem e ela chega direto no meu WhatsApp — sem formulário perdido em
            caixa de e-mail.
          </p>

          <div className="pitchInfo">
            <div className="pitchInfoItem">
              <FiClock />
              <span>Costumo responder no mesmo dia</span>
            </div>
            <div className="pitchInfoItem">
              <FiMapPin />
              <span>Disponível para projetos remotos</span>
            </div>
          </div>

          <a
            href={buildWhatsAppLink("Olá, Gabriel! Vim pelo seu portfólio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="pitchWhatsappLink"
          >
            <FaWhatsapp size={18} />
            Prefiro chamar direto no WhatsApp
          </a>
        </div>

        <div className="formularioContato">
          <div className="assuntoChips">
            {ASSUNTOS.map((chip) => (
              <button
                key={chip.label}
                type="button"
                className={`assuntoChip ${formData.assunto === chip.label ? "active" : ""}`}
                onClick={() => handleChip(chip)}
              >
                {chip.label}
              </button>
            ))}
          </div>

          <form className="inputFormulario" onSubmit={handleSubmit}>
            <div className="inputGroupContato">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="inputFieldContato"
              />
            </div>

            <div className="inputGroupContato">
              <FiMessageSquare className="inputIconContato" />
              <input
                type="text"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                placeholder="Assunto"
                className="inputFieldContato withIcon"
              />
            </div>

            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Digite sua mensagem"
              className="textareaFieldContato"
            />

            {erro && <p className="erroContato">{erro}</p>}

            <button type="submit" className="whatsappSubmitContato">
              <FaWhatsapp size={20} />
              <span>Enviar no WhatsApp</span>
              <FiSend size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
