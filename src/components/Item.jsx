import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { contextoGeneral } from '../components/ContextContainer';

export default function Item({ item }) {

  const { x } = useContext(contextoGeneral);
  return (
    <div style={{ border: "2px solid yellow", margin: "10px" }} key={item.id}>
      {JSON.stringify(item)}
      <Link to={"/item/" + item.id}> Detalles</Link>
      <br />
      <br />
    </div>
  );
}