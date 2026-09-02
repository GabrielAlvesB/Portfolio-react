import { CertificadosDb } from "../../data/CertificadosDb";
import CertificadoCard from "../../components/certificados/CertificadoCard";
import "./certificados.css";

export const metadata = {
  title: "Certificados — Gabriel Alves",
  description: "Certificados e qualificações profissionais de Gabriel Alves Batista.",
};

export default function CertificadosPage() {
  return (
    <div className="certificados-page">
      <div className="certificados-header">
        <h1 className="certificados-titulo">Certificados</h1>
        <p className="certificados-subtitulo">Minhas conquistas e qualificações profissionais</p>
      </div>
      <div className="certificados-grid">
        {CertificadosDb.map((certificado) => (
          <CertificadoCard key={certificado.id} certificado={certificado} />
        ))}
      </div>
    </div>
  );
}
