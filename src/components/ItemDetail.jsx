
import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { contextoGeneral } from '../components/ContextContainer';

// export default function ItemDetail({ producto }) {
//   function addItem(x) {
//     alert("quiere agregar " + x + " de este item: " + producto.name);
//   }
export default function ItemDetail({ producto }) {
  const { carrito, addItem } = useContext(contextoGeneral);
  console.log(carrito);
  function onAdd(cant) {
    // alert("quiere agregar " + cant + " de este item: " + producto.name);
    addItem(producto, cant);
  }
  return (
    <div style={{ border: "2px solid violet", margin: "10px" }}>
      {producto.id ? (
        <>
          ID: {producto.id}
          <br />
          PRODUCTO: {producto.name}
          <br />
          CATEGORIA: {producto.category}
          <br />
          PRECIO: {producto.precio}
          <br />
          STOCK: {producto.stock}
          <br />
        
          <ItemCount ini={1} max={producto.stock} onAdd={onAdd} /> 
        </>
      ) : (
        <>Cargando...</>
      )}
    </div>
  );
}