import "./error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container-error">
      <img src="/404-error.png" alt="error 404" />
      <h1>Página Não Encontrada!</h1>
      <Link to="/">Voltar Para Home</Link>
    </div>
  );
}

export default Error;
