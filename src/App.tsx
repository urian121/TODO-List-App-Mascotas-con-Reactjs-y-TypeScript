import { useState } from "react";

import FormularioMascota from "./components/FormularioMascota";
import ListaMascotas from "./components/ListMascotas";
import "./assets/styles/App.css";

interface Mascota {
  id: number;
  nombre: string;
  edad: number;
  sexo: "macho" | "hembra" | "";
  gusto: "poco" | "medio" | "bastante" | "mucho";
}

function App() {
  const [nombre, setNombre] = useState<string>("");
  const [edad, setEdad] = useState<number>(0);
  const [sexo, setSexo] = useState<"macho" | "hembra">("macho");
  const [gusto, setGusto] = useState<"poco" | "medio" | "bastante" | "mucho">(
    "poco"
  );
  const [mascotas, setMascotas] = useState<Mascota[]>([]);

  const edades: number[] = Array.from({ length: 16 }, (_, i) => i); // Lista de 0 a 15

  const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
  };

  const handleEdadChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEdad(Number(event.target.value));
  };

  const handleSexoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSexo(event.target.value as "macho" | "hembra");
  };

  const handleGustoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGusto(event.target.value as "poco" | "medio" | "bastante" | "mucho");
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nombre.trim() === "") return;

    const nuevaMascota: Mascota = {
      id: new Date().getTime(),
      nombre: nombre.trim(),
      edad: edad,
      sexo: sexo,
      gusto: gusto,
    };

    setMascotas([...mascotas, nuevaMascota]);
    setNombre("");
    setEdad(0);
    setSexo("macho");
    setGusto("poco");
  };

  const handleEliminarMascota = (id: number) => {
    setMascotas(mascotas.filter((mascota) => mascota.id !== id));
  };
  return (
    <>
      <h1 className="text-center titulo">
        TODO List App con React y TypeScript <hr />
      </h1>
      <div className="row justify-content-between">
        <div className="col-md-5">
          <FormularioMascota
            handleFormSubmit={handleFormSubmit}
            handleNombreChange={handleNombreChange}
            handleEdadChange={handleEdadChange}
            handleSexoChange={handleSexoChange}
            handleGustoChange={handleGustoChange}
            nombre={nombre}
            edades={edades}
            edad={edad}
            sexo={sexo}
            gusto={gusto}
          />
        </div>
        <div className="col-md-5">
          <ListaMascotas
            handleizarMascota={handleEliminarMascota} // Utiliza el nuevo nombre de la propiedad
            mascotas={mascotas}
          />
        </div>
      </div>
    </>
  );
}

export default App;
