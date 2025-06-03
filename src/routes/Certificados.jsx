import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CertificadosDb } from '../data/CertificadosDb';
import CertificadoCard from '../components/certificados/CertificadoCard';

const Certificados = () => {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold" style={{
          background: 'linear-gradient(45deg, #2196F3, #00BCD4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          letterSpacing: '1px'
        }}>
          Certificados
        </h1>
        <p className="mt-2" style={{ color: '#fff' }}>Minhas conquistas e qualificações profissionais</p>
      </div>
      <Row className="g-4 justify-content-center">
        {CertificadosDb.map((certificado) => (
          <Col xs={12} sm={6} md={4} key={certificado.id}>
            <CertificadoCard certificado={certificado} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certificados;