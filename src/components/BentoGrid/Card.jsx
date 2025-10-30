// src/components/BentoGrid/Card.jsx
import { Link } from 'react-router-dom';

export default function Card({ title, bg, logo, link }) {
  return (
    <article className="card">
      <div className="card-img">
        <img className="card-img-background" src={bg} alt={title} />
        <img className="img-logo" src={logo} alt="" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <Link to={link}><button className="btn-fichaTecnica">Más información</button></Link>
        <div className="p-box"></div>
      </div>
    </article>
  );
}
