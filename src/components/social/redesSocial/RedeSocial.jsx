import "./RedeSocial1.css";

const RedeSocial = ({ indentifier, href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn flex-center rede-social-color"
    >
      {children} <span>{indentifier}</span>
    </a>
  );
};

export default RedeSocial;
