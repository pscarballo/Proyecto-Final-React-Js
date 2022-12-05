import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextoGeneral } from '../components/ContextContainer';

export default function Item({ item }) {

  const { x } = useContext(contextoGeneral);
  return (
    <>
    <div style={{ border: "2px solid yellow", margin: "10px",display: "inline-block"}} key={item.id}>
      <img style={{height:"200px"}} src={item.img} alt={item.name} />
      <p>ID: {item.id}</p>
      <p>NOMBRE: {item.name}</p>
      <p>CATEGORIA: {item.category}</p>
      <p>PRECIO: ${item.precio}</p>
      <p>STOCK: {item.stock}</p>
      <p style={{width:"300px",height:"210px"}}>DESCRIPCION: {item.descripcion}</p>
      
      <Link to={"/item/" + item.id}> Detalles</Link>
      <br />
      <br />
    </div>
    </>
  );
}