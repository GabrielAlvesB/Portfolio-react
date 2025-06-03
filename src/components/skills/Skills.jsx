import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { SkillsDb } from '../../data/SkillsDb';
import Technologies from './Technologies';

const Skills = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Marquee>
        {SkillsDb.map(({ id, nome, img }) => (
          <Technologies key={id} srcImg={img} skill={nome} />
        ))}
      </Marquee>
      <div className="text-center mt-4">
        <Button 
          variant="primary" 
          onClick={() => navigate('/certificados')}
          style={{
            background: 'linear-gradient(45deg, #2196F3, #00BCD4)',
            border: 'none',
            padding: '10px 25px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 20px rgba(33, 150, 243, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(33, 150, 243, 0.3)';
          }}
        >
          Certificados
        </Button>
      </div>
    </Container>
  );
};

export default Skills;
