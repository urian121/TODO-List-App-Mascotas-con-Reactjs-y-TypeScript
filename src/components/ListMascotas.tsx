const ListMascotas = () => {
  return (
    <>
      <h1>
        Lista de Mascotas <hr />
      </h1>
      <div className="scrollable-div">
        {Array.from({ length: 50 }, (_, index) => (
          <div key={index} className="mi_media">
            <img
              src="https://images.emojiterra.com/twitter/v13.1/512px/1f436.png"
              style={{ width: "64px", height: "64px" }}
              className="mr-3"
              alt="..."
            />
            <div className="text">
              This is a media object example. We can use grid-template-areas to
              switch around the image and text part of the media object.
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListMascotas;
