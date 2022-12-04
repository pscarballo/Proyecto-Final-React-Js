//@ts-check
import React, { useState, useEffect, useContext } from 'react';
// import { useEffect } from 'react';
import { contextoGeneral } from './ContextContainer';
import { Link } from 'react-router-dom';
import Item from './Item';

export default function ItemCount({ ini, max, onAdd, Cant }) {
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

  // function onAdd() {
  //   alert(count + "a" + JSON.stringify(producto))
  //   addItem(Item, count);
  //   setRemoveButton(true);
  // }
  // useEffect(() => {
  //   console.log(carrito);
  // }, [carrito]);

  return (
    <div>
      <button style={{ cursor: "pointer" }} onClick={restar}>-</button>
      {count}
      <button style={{ cursor: "pointer" }} onClick={sumar}>+</button>
      <br />
      {removeButton ? (
        <>
          Producto Agregado Correctamente
          <Link to="/"> Continuar Comprando</Link>
        </>
      ) : (
        <button onClick={() => onAdd(count)}>AGREGAR</button>
      )}
    </div>
  );
}