import Link from "next/link";
import Button from "../@lib/button/Button";
import Glitch from "../components/animacao/glitch/Glitch";
import ErrorPagina from "../components/animacao/errorpagina/ErrorPagina";
import "./not-found.css";

export default function NotFound() {
  return (
    <div className="errorPage d-flex flex-column justify-content-center align-items-center">
      <div className="codigError">
        <Glitch name="Error 404" />
      </div>
      <div className="imagemError">
        <ErrorPagina />
      </div>
      <div className="errorInfo">
        <h3>Esta página não existe</h3>
        <Link href="/" className="BotaoDeVoltarParaPrincipal">
          <Button size="medium" name="Voltar" />
        </Link>
      </div>
    </div>
  );
}
