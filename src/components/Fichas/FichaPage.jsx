// src/components/Fichas/FichaPage.jsx
import AudioPlayer from "./AudioPlayer.jsx";

export default function FichaPage({ data }) {
  if (!data) return <p style={{ padding: 16 }}>Ficha no encontrada.</p>;

  const { titulo, cover, avatar, imagenes = [], audio, telefono } = data;

  return (
    <section className="fbp-card">
      <div className="fbp-cover" style={{ backgroundImage: `url('${cover}')` }} />
      <div className="fbp-body">
        <img className="fbp-avatar2" src={avatar} alt={titulo} />
        <div className="fbp-info">
          {/* contenido principal */}
          <div className="fichas-tecnicas">
            {/* imágenes de la ficha */}
            {imagenes[0] && <img src={imagenes[0]} alt={titulo} />}
            <br /><br />
            {/* audio con autoplay bajo interacción */}
            <AudioPlayer src={audio} auto />
            <br /><br />
            {imagenes[1] && <img src={imagenes[1]} alt={`${titulo} (montaje)`} />}
            <br /><br />
            {telefono && (
              <center>
                <label>
                  <a href={`tel:${telefono}`}>
                    <h3>Para más información, contactar al nutriólogo al {telefono}.</h3>
                  </a>
                </label>
              </center>
              
            )}
            <div style={{ height: 96 }} aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
