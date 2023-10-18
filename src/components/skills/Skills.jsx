import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaLinux, FaWindows, FaReact, FaDocker } from "react-icons/fa";
import { BiLogoJavascript, BiLogoBootstrap, BiLogoTailwindCss, BiLogoGit, BiLogoFigma } from "react-icons/bi";
import { SiMysql, SiWindowsterminal, SiInkscape, SiVisualstudiocode,SiJetbrains, SiVite, SiDatagrip } from "react-icons/si";

import "./Skills.css"

const Skills = () => {
  return (
    <Container className='skill'>

        {/* .html, .css, .js, .boot, .tailw, .git, .mysql, .linux, .windows, .terminal, .react, .figma, .inks, .docker, .vscode, .brains, .vite, .mark*/}
      <Row>
        <Col  > <AiFillHtml5 className='html5' /> </Col> 
        <Col > <FaCss3Alt className='css'/>  </Col>
        <Col > <BiLogoJavascript className='js'/> </Col>
        <Col > <BiLogoBootstrap className='boot'/> </Col>
        <Col > <BiLogoTailwindCss className='tailw'/> </Col>
        <Col > <BiLogoGit className='git'/> </Col>
        <Col > <SiMysql className='mysql'/> </Col>
        <Col > <FaLinux className='linux'/> </Col>
        <Col > <FaWindows className='windows'/> </Col>
        <Col > <SiWindowsterminal className='terminal'/> </Col>
        <Col > <FaReact className='react'/> </Col>
        <Col > <BiLogoFigma className='figma'/> </Col>
        <Col > <SiInkscape className='inks'/> </Col>
        <Col > <FaDocker className='docker'/> </Col>
        <Col > <SiVisualstudiocode className='vscode'/> </Col>
        <Col > <SiJetbrains className='brains'/> </Col>
        <Col > <SiVite className='vite'/> </Col>
        <Col > <SiDatagrip className='datagrip'/> </Col>
      </Row>
    </Container>
  )
}

export default Skills