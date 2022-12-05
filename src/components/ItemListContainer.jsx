
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemListContainer";

export default function ItemListContainer({ greeting }) {
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    let productos;
    if (idcategory) {
      productos = query(collection(db, "productos"), where("category", "==", idcategory));
    } else {
      productos = collection(db, "productos");
    }

    getDocs(productos).then((res) => {
      const arrayNorm = res.docs.map((element) => {
        return { img: element.data().imgUrl, id: element.id, name: element.data().name, category: element.data().category, precio: element.data().precio, stock: element.data().stock, descripcion: element.data().descripcion };
      });
      
      setProductos(arrayNorm);

    });

  }, [idcategory]);

  return (
    <div style={{ border: "2px solid red", margin: "10px" }}>
      {<ItemList productos={productos} />}
    </div>
  );
}