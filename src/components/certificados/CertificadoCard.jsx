import React from 'react';
import Card from 'react-bootstrap/Card';

const CertificadoCard = ({ certificado }) => {
  return (
    <Card className="h-100 shadow-sm" style={{ 
      width: '100%', 
      maxWidth: '350px', 
      margin: '0 auto',
      backgroundColor: '#1a1a1a',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#fff'
    }}>
      <div style={{ 
        height: '200px', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2a2a2a'
      }}>
        <Card.Img 
          variant="top" 
          src={certificado.imagem} 
          alt={certificado.titulo}
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      <Card.Body>
        <Card.Title className="text-center mb-3" style={{ color: '#fff' }}>{certificado.titulo}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge" style={{ 
            backgroundColor: '#2196F3',
            color: '#fff',
            padding: '8px 12px',
            fontSize: '0.9rem'
          }}>{certificado.horas} h</span>
          <img 
            src={certificado.empresa.logo} 
            alt={certificado.empresa.nome}
            style={{ height: '40px', width: 'auto' }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CertificadoCard; 