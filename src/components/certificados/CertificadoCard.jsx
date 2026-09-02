import "./CertificadoCard.css";

const CertificadoCard = ({ certificado }) => {
  return (
    <div className="certificado-card">
      <div className="certificado-imagem-wrapper">
        <img src={certificado.imagem} alt={certificado.titulo} className="certificado-imagem" />
      </div>
      <div className="certificado-body">
        <h3 className="certificado-titulo">{certificado.titulo}</h3>
        <div className="certificado-footer">
          <span className="certificado-horas">{certificado.horas} h</span>
          <img src={certificado.empresa.logo} alt={certificado.empresa.nome} className="certificado-logo" />
        </div>
      </div>
    </div>
  );
};

export default CertificadoCard;
