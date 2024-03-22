import FormularioMascota from "./components/FormularioMascota";
import ListaMascotas from "./components/ListMascotas";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center titulo">
        TODO List App con React y TypeScript <hr />
      </h1>
      <div className="row justify-content-md-center">
        <div className="col-md-4">
          <FormularioMascota />
        </div>
        <div className="col-md-5">
          <ListaMascotas />
        </div>
      </div>
    </>
  );
}

export default App;
