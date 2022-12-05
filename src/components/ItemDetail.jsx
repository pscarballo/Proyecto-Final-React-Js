
import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {

  return (
    <div style={{ border: "2px solid violet", margin: "10px", display: "inline-block" }}>
      {producto.id ? (
        <>
          <img style={{ height: "400px" }} src={producto.imgUrl} alt={producto.name} />
          <p>ID: {producto.id}</p>
          <h3>NOMBRE: {producto.name}</h3>
          <p>CATEGORIA: {producto.category}</p>
          <p>PRECIO: ${producto.precio}</p>
          <p>STOCK: {producto.stock}</p>
          <p style={{ width: "400px", height: "210px" }}>DESCRIPCION: {producto.descripcion}</p>

          <ItemCount ini={1} max={producto.stock} producto={producto} />
        </>
      ) : (
        <>Cargando...</>
      )}
    </div>
  );
}