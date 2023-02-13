import { Link } from "react-router-dom";

function CardRazasPerros({ nombreRaza, imagen }) {
  return (
    <li className="breedCard">
      <Link to='rhodesian'>
        <div className="contenedorImagen">
          <img src={imagen} alt={nombreRaza} />
        </div>
      </Link>
      <span className="breedTitle">{nombreRaza}</span>
      <div className="barraReacciones">
        <span>
          <i className="fa-solid fa-heart"> 220 </i>
          <i className="fa-regular fa-comment"> 1.7k </i>
          <i className="fa-regular fa-eye"> 345 </i>
        </span>
      </div>
    </li>
  );
}

export default CardRazasPerros;
