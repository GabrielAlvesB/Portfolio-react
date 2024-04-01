import React from 'react';
import Container from 'react-bootstrap/Container';
import Marquee from 'react-fast-marquee';
import { SkillsDb } from '../../data/SkillsDb';
import Technologies from './Technologies';

const Skills = () => {
  return (
    <Container>
      <Marquee>
        {SkillsDb.map(({ id, nome, img }) => (
          <Technologies key={id} srcImg={img} skill={nome} />
        ))}
      </Marquee>
    </Container>
  );
};

export default Skills;
