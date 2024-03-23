import { useState } from "react";

interface Mascota {
  id: number;
  nombre: string;
  edad: number;
  sexo: "macho" | "hembra" | "";
  gusto: "poco" | "medio" | "bastante" | "mucho";
}

const FormularioMascota = () => {
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
      <h1>
        Registro de Mascotas <hr />
      </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="nombreMascota" className="form-label">
            Nombre de la Mascota
          </label>
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="EdadMascota" className="form-label">
            Edad de la Mascota
          </label>
          <select
            value={edad}
            onChange={handleEdadChange}
            className="form-select"
            required>
            {edades.map((edad) => (
              <option key={edad} value={edad}>
                {edad === 0 ? `${edad} Año` : `${edad} Años`}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="sexoMascota" className="form-label">
            Sexo de la Mascota
          </label>
          <select
            value={sexo}
            onChange={handleSexoChange}
            className="form-select"
            required>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="sexoMascota" className="form-label">
            ¿Que tento te gusta de la mascota?
          </label>
          <select
            value={gusto}
            onChange={handleGustoChange}
            className="form-select"
            required>
            <option value="poco">Poco</option>
            <option value="medio">Medio</option>
            <option value="bastante">Bastante</option>
            <option value="mucho">Mucho</option>
          </select>
        </div>
        <button type="submit" className="btn btn_add ">
          Registrar Mascota
        </button>
      </form>

      <ul>
        {mascotas.map((mascota) => (
          <li key={mascota.id}>
            <div>{mascota.nombre}</div>
            <div>Edad: {mascota.edad}</div>
            <div>Sexo: {mascota.sexo}</div>
            <div>Gusto: {mascota.gusto}</div>
            <button onClick={() => handleEliminarMascota(mascota.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FormularioMascota;
