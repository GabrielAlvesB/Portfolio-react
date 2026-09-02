import "./RedeSocialList.css";

import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import RedeSocial from "./RedeSocial";

const listSocial = [
  { id: 1, children: <AiOutlineInstagram />, indentifier: "gabeel.dev", href: "https://www.instagram.com/gabeel.dev/" },
  { id: 2, children: <AiFillLinkedin />, indentifier: "gabrielalvesbatista", href: "https://www.linkedin.com/in/gabrielalvesbatista/" },
  { id: 3, children: <AiOutlineGithub />, indentifier: "GabrielAlvesB", href: "https://github.com/GabrielAlvesB" },
];

const RedeSocialList = () => {
  return (
    <div className="social-links">
      {listSocial.map((social) => (
        <RedeSocial key={social.id} indentifier={social.indentifier} href={social.href}>
          {social.children}
        </RedeSocial>
      ))}
    </div>
  );
};

export default RedeSocialList;
