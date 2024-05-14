import { Cargos } from "../../data/Cargos";
import "./Trajetoria.css";

const Trajetoria = () => {
  return (
    <div className="trajetoria">

    {Cargos.map(({id, name}) => (
      <div class="card" key={id}>
      <div class="card-border-top">
      </div>
      <div class="img">
      </div>
      <span>{name}</span>
      <p class="job"> Job Title</p>
    </div>
    ))}

      
    </div>
  );
};

export default Trajetoria;
