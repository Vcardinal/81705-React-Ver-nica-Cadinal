import { useState } from "react";

const ItemCount = ({ inicial = 1, stock = 0, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={decrementar}> - </button>
      <span style={{ margin: "0 10px" }}>{contador}</span>
      <button onClick={incrementar}> + </button>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => funcionAgregar(contador)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
