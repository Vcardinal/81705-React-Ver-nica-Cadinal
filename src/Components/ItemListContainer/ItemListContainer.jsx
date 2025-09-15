import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/asyncmocks.js";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => console.error("Error cargando productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]); 

  if (loading) return <p>Cargando productos...</p>;

  return (
    <>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;


