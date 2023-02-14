import borderCollie from "media/borderCollie.jpg";
import rhodesian from "media/rhodesian.jpg";
import CardRazasPerros from "components/CardRazasPerros";


function Index() {
  return (
      <main>
        <section>
          <h1 className="tituloPagina">Razas de Perros</h1>
          <ul className="breedCardContainer">
            <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie} />
            <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
          </ul>
        </section>
      </main>
  );
}

export default Index;
