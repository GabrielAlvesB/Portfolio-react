import { useRouteError, useLocation } from "react-router-dom"
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
          
        </div>
    </div>
  )
}

export default ErrorPage