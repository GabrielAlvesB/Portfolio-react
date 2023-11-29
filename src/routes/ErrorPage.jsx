import { useRouteError, useLocation, Link } from "react-router-dom"
import Button from '../@lib/button/Button'

import "./ErrorPage.css"
import ErrorPagina from "../components/animacao/errorpagina/ErrorPagina"
import Glitch from "../components/animacao/glitch/Glitch";

const ErrorPage = () => {

  const error = useRouteError()
  const location = useLocation()

  console.log(error)


  return (
    <div className="errorPage d-flex flex-column justify-content-center align-items-center">
      <div className="codigError">
        <Glitch name="Error 404" />
      </div>
      <div className="imagemError">
        <ErrorPagina />
      </div>
      <div className="errorInfo">
        <h3>Url: {location.pathname} não existe</h3>
        <Link to="/" className="BotaoDeVoltarParaPrincipal">
          <Button size={"medium"} type='submit' name="Voltar" />

        </Link>
      </div>
    </div>
  )
}

export default ErrorPage