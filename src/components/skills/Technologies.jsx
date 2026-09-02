import "./Skills.css";

const Technologies = ({ srcImg, Icon, mono, color, skill }) => {
  return (
    <div className="Skill">
      <div
        className={`skill-icon-wrapper ${mono && !srcImg && !Icon ? "has-mono" : ""}`}
        style={color ? { "--skill-color": color } : undefined}
      >
        {srcImg && <img className="imagemskill" src={srcImg} alt="" />}
        {!srcImg && Icon && <Icon className="reactIconSkill" />}
        {!srcImg && !Icon && mono && <span className="monoSkill">{mono}</span>}
      </div>
      <p className="nomeSkil">{skill}</p>
    </div>
  );
};

export default Technologies;
