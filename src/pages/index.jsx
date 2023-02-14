import borderCollie from "media/borderCollie.jpg";
import rhodesian from "media/rhodesian.jpg";
import CardRazasPerros from "components/CardRazasPerros";
import Header from "components/Header";
import Footer from "components/Footer";


function Index() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1 className="tituloPagina">Razas de Perros</h1>
          <ul className="breedCardContainer">
            <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie} />
            <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
          </ul>
        </section>
        <section></section>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
