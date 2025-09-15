import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncmocks.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(id)
      .then((respuesta) => setProduct(respuesta))
      .catch((error) => console.error("Error cargando producto:", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>No se encontró el producto solicitado.</p>;

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;

