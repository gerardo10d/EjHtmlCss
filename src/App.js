import './styles/styles.css';
import logo from './media/logoGrande.jpg';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="logo" className="logo"/>
            </li>
            <li>
                <button className="button mainButton">Nuevo Post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza" type="text"/>
                    <i className="fa-solid fa-magnifying-glass button iconoBusqueda"></i> {/* insertar ícono de lupa de fontawesome */}
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Login</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h1 className="tituloPagina">Razas de Perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={borderCollie} alt="Border Collie"/>
                    </div>
                    <span className="breedTitle">Border Collie</span>
                    <div className="barraReacciones">
                        <span><i className="fa-solid fa-heart"></i> 220</span>
                        <span><i className="fa-regular fa-comment"></i> 1.7k</span>
                        <span><i className="fa-regular fa-eye"></i> 345</span>
                    </div>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={rhodesian} alt="Rhodesian"/>
                    </div>
                    <span className="breedTitle">Rhodesian</span>
                    <div className="barraReacciones">
                        <span><i className="fa-solid fa-heart"></i> 150</span>
                        <span><i className="fa-regular fa-comment"></i> 1.5k</span>
                        <span><i className="fa-regular fa-eye"></i> 120</span>
                    </div>
                </li>
            </ul>

        </section>
        <section>
            
        </section>
    </main>
    <footer>

    </footer>
    </div>
  );
}

export default App;
