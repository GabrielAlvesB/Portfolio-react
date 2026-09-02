export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5527995004781";

export function buildWhatsAppLink(message = "") {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildContactMessage({ name, assunto, mensagem }) {
  const linhas = [
    `Olá, meu nome é ${name}.`,
    assunto ? `Assunto: ${assunto}` : null,
    mensagem,
  ].filter(Boolean);

  return linhas.join("\n");
}
