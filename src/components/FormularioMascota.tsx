interface Props {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleNombreChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEdadChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSexoChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleGustoChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  nombre: string;
  edad: number;
  sexo: "macho" | "hembra";
  gusto: "poco" | "medio" | "bastante" | "mucho";
  edades: number[];
}

/**
 * React.FC<Props> es una abreviatura de React.FunctionComponent<Props>. Es una interfaz genérica proporcionada por React que toma un parámetro de tipo Props y define un componente funcional en React.

Cuando defines un componente funcional en React utilizando React.FC<Props>, estás especificando el tipo de las props que el componente espera recibir. Esto ayuda a TypeScript a realizar comprobaciones de tipos estáticos en el componente para garantizar que se utilicen correctamente las props.
 */
const FormularioMascota: React.FC<Props> = ({
  handleFormSubmit,
  handleNombreChange,
  handleEdadChange,
  handleSexoChange,
  handleGustoChange,
  nombre,
  edad,
  sexo,
  gusto,
  edades,
}) => {
  return (
    <>
      <h1>
        Registro de Mascotas <hr />
      </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="nombreMascota" className="form-label">
            Nombre de la Mascota / Dueño
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
            ¿Que tanto te gusta la mascota?
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
    </>
  );
};

export default FormularioMascota;
