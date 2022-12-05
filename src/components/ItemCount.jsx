import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { contextoGeneral } from './ContextContainer';

export default function ItemCount({ ini, max, producto }) {
  const [count, setCount] = useState(ini);
  const [removeButton, setRemoveButton] = useState(false);
  const { carrito, addItem } = useContext(contextoGeneral);

  function restar() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  function sumar() {
    if (count < max) {
      setCount(count + 1);
    }
  }

  function onAdd() {
   
    addItem(producto, count);
    setRemoveButton(true);
  }
  useEffect(() => {

  }, [carrito]);

  return (
    <div>
      <button style={{ cursor: "pointer" }} onClick={restar}>-</button>
      {count}
      <button style={{ cursor: "pointer" }} onClick={sumar}>+</button>
      <br />
      {removeButton ? (
        <>
          Producto Agregado Correctamente <br />
          <Link to="/"> CONTINUAR COMPRANDO</Link><br />
          <Link to="/checkout"> FINALIZAR COMPRA</Link>
        </>
      ) : (
        <button style={{ cursor: "pointer" }} onClick={onAdd}>AGREGAR</button>
      )}
    </div>
  );
}