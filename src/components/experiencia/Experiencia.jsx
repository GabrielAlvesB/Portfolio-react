import { FiBriefcase } from "react-icons/fi";
import { Cargos } from "../../data/Cargos";
import "./Experiencia.css";

function parseData(str) {
  const [dia, mes, ano] = str.split("/").map(Number);
  return new Date(ano, mes - 1, dia);
}

function calcularDuracao(inicio, termino) {
  const dataInicio = parseData(inicio);
  const dataFim = termino === "Atualmente" ? new Date() : parseData(termino);

  let meses =
    (dataFim.getFullYear() - dataInicio.getFullYear()) * 12 +
    (dataFim.getMonth() - dataInicio.getMonth());
  if (meses < 1) meses = 1;

  const anos = Math.floor(meses / 12);
  const mesesRestantes = meses % 12;

  const partes = [];
  if (anos > 0) partes.push(`${anos} ano${anos > 1 ? "s" : ""}`);
  if (mesesRestantes > 0) partes.push(`${mesesRestantes} mes${mesesRestantes > 1 ? "es" : ""}`);

  return partes.join(" e ") || "1 mês";
}

const Experiencia = () => {
  return (
    <div className="experiencia-container">
      <p className="experiencia-intro">
        Uma linha do tempo da minha caminhada profissional — da educação ao freelance,
        até o time da Hora de Codar.
      </p>

      <div className="experiencia-timeline">
        {Cargos.map((cargo, index) => (
          <div key={cargo.id} className="experiencia-item">
            <div className="experiencia-marker">
              <FiBriefcase size={20} />
            </div>

            <div className="experiencia-card">
              <div className="experiencia-card-header">
                <h3>{cargo.name}</h3>
                {cargo.termino === "Atualmente" && (
                  <span className="experiencia-atual">Atual</span>
                )}
              </div>
              <span className="experiencia-periodo">
                {cargo.inicio} — {cargo.termino}
              </span>
              <span className="experiencia-duracao">
                {calcularDuracao(cargo.inicio, cargo.termino)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiencia;
