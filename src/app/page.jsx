import SocialUni from "../components/social/socialUni/SocialUni";
import SobreCard from "../components/sobre/SobreCard";
import Experiencia from "../components/experiencia/Experiencia";
import Skills from "../components/skills/Skills";
import Contato from "../components/contato/Contato";
import Projeto from "../components/projetos/Projeto";
import Titulos from "../@lib/Titulos/Titulos";

export default function Home() {
  return (
    <div>
      <section id="home">
        <SocialUni />
      </section>

      <section id="sobre">
        <Titulos text="Sobre" />
        <SobreCard />
      </section>

      <section id="experiencia">
        <Titulos text="Experiência" />
        <Experiencia />
      </section>

      <section id="habilidades">
        <Titulos text="Skills" />
        <Skills />
      </section>

      <section id="projetos">
        <Titulos text="Projetos" />
        <Projeto />
      </section>

      <section id="contato">
        <Titulos text="Contato" />
        <Contato />
      </section>
    </div>
  );
}
