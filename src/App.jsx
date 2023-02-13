import CardRazasPerros from "./components/CardRazasPerros"
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
                <CardRazasPerros nombreRaza="Border Collie" imagen = {borderCollie}/>
                <CardRazasPerros nombreRaza="Rhodesian" imagen = {rhodesian}/>
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
