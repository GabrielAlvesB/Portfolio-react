import {BsFillArrowDownCircleFill} from "react-icons/bs";
import "./Trajetoria.css";

const Trajetoria = () => {
  return (
    <div className="trajetoria">
      <div className="containerTrajetoria d-flex justify-content-evenly align-items-center">
        <div className="logoTrajetoria d-flex justify-content-center align-items-center ">
          <img src="../../../public/sobre-mim/íconeEmprego.png" alt="" />
        </div>
        <div className="mobile-Trajetoria d-flex justify-content-center align-items-center ">
            <div className="empresa">Instituto Ensinar Brasil (Doctum)</div>
            <div className="tempoDeEmpresa">Tempo: 04/10/2021 até 26/05/2023</div>
            <div className="cagoExercido">Cargo: <b>Programador de Sistema da Informação</b></div>
        </div>
      </div>
      <div className="arrow d-flex justify-content-center align-items-center"> 
        <BsFillArrowDownCircleFill className="arrowIcon"/>
      </div>
      <div className="containerTrajetoria d-flex justify-content-evenly align-items-center">
        <div className="logoTrajetoria d-flex justify-content-center align-items-center ">
          <img src="../../../public/sobre-mim/íconeEmprego.png" alt="" />
        </div>
        <div className=" mobile-Trajetoria d-flex justify-content-center align-items-center ">
            <div className="empresa">freelancer: Desenvolvimento Web</div>
            <div className="tempoDeEmpresa">Tempo: 27/05/2023 até Atualmente</div>
            <div className="cagoExercido">Cargo: <b>Desenvolvedor Web (Front End)</b></div>
        </div>
      </div>
    </div>
  );
};

export default Trajetoria;
