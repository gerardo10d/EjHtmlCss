function CardRazasPerros( { nombreRaza, imagen } ){
    return (
    <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={imagen} alt={nombreRaza}/>
                    </div>
                    <span className="breedTitle">{nombreRaza}</span>
                    <div className="barraReacciones">
                        <span><i className="fa-solid fa-heart"></i> 220</span>
                        <span><i className="fa-regular fa-comment"></i> 1.7k</span>
                        <span><i className="fa-regular fa-eye"></i> 345</span>
                    </div>
                </li>
    );
}

export default CardRazasPerros;