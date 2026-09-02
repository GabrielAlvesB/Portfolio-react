import "./Titulos.css";

const Titulos = ({ text }) => {
  return (
    <div className="titulo-container">
      <button data-text={text} className="button" type="button" tabIndex={-1}>
        <span className="actual-text">&nbsp;{text}&nbsp;</span>
        <span className="hover-text" aria-hidden="true">&nbsp;{text}&nbsp;</span>
      </button>
    </div>
  );
};

export default Titulos;
