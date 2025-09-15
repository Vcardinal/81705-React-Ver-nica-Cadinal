import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, price, pictureUrl, category }) => {
  return (
    <article className="item-card">
      <img className="item-image" src={pictureUrl} alt={title} />
      <h3 className="item-title">{title}</h3>
      <p className="price">Precio: ${price}</p>
      <p className="meta">Categoría: {category}</p>
      <p className="meta small">ID: {id}</p>

      <Link to={`/item/${id}`}>
        <button className="btn">Ver detalles</button>
      </Link>
    </article>
  );
};

export default Item;


