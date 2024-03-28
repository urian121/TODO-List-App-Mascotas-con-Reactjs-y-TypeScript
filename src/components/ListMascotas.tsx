interface Props {
  handleizarMascota: (id: number) => void; // Cambiar nombre de la propiedad
  mascotas: {
    id: number;
    nombre: string;
    edad: number;
    sexo: "macho" | "hembra" | "";
    gusto: "poco" | "medio" | "bastante" | "mucho";
  }[];
}

const ListMascotas: React.FC<Props> = ({ handleizarMascota, mascotas }) => {
  const getClassForGusto = (gusto: "poco" | "medio" | "bastante" | "mucho") => {
    switch (gusto) {
      case "poco":
        return "btn btn-info";
      case "medio":
        return "btn btn-success";
      case "bastante":
        return "btn btn-warning";
      case "mucho":
        return "btn btn-danger";
      default:
        return "";
    }
  };

  // Cambiar nombre de la propiedad
  console.log(handleizarMascota);
  console.log(mascotas);
  return (
    <>
      <h1>
        Lista de Mascotas <hr />
      </h1>
      <div className="scrollable-div">
        {mascotas.map((mascota, index) => (
          <div key={index} className="mi_media">
            <img
              src="https://images.emojiterra.com/twitter/v13.1/512px/1f436.png"
              style={{ width: "64px", height: "64px" }}
              className="mr-3"
              alt="..."
            />
            <div className="text">
              <span style={{ color: "Orange" }}>{mascota.nombre}</span>
              <p>
                Edad: {mascota.edad} / Sexo: {mascota.sexo}
                <span style={{ float: "right" }}>
                  Gusto:{" "}
                  <span className={getClassForGusto(mascota.gusto)}>
                    {mascota.gusto}
                  </span>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListMascotas;
