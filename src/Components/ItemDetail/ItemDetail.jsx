import { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ id, title, price, pictureUrl, description, category, stock }) => {
  const [addedQty, setAddedQty] = useState(0); 

  const handleAdd = (qty) => {
    setAddedQty(qty);
  };

  return (
    <section className="item-detail">
      <img className="detail-image" src={pictureUrl} alt={title} />

      <div className="detail-info">
        <h2 className="detail-title">{title}</h2>
        <p className="detail-price">Precio: ${price}</p>
        <p className="detail-category">Categoría: {category}</p>
        <p className="detail-description">{description}</p>
        <p className="detail-id">ID: {id}</p>
        <p className="detail-stock">Stock: {stock}</p>

        {addedQty === 0 ? (
          <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
        ) : (
          <>
            <p style={{ marginTop: 12 }}>
              Agregaste <strong>{addedQty}</strong> unidad(es) al carrito ✅
            </p>
                   </>
        )}
      </div>
    </section>
  );
};

export default ItemDetail;



