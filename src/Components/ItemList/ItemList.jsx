import Item from "../Item/Item.jsx";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="catalog-container">
      <section className="item-list">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </section>
    </div>
  );
};

export default ItemList;
