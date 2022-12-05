import React from 'react'
import { useContext } from 'react';
import { contextoGeneral } from '../components/ContextContainer';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { carrito, totalAPagar, totalProductos, removeItem } = useContext(contextoGeneral);

    return (
        /*{item.name + " " + item.quantity} */
        <>
            {carrito.map((item) => (

                <div style={{ border: "2px solid yellow", margin: "10px", display: "inline-block" }} key={item.id}>
                    <img style={{ height: "200px" }} src={item.imgUrl} alt={item.name} />
                    <p>ID: {item.id}</p>
                    <p>NOMBRE: {item.name}</p>
                    <p>CATEGORIA: {item.category}</p>
                    <p>PRECIO: ${item.precio}</p>
                    


                    <br />

                    <span style={{ cursor: "pointer" }} onClick={() => removeItem(item.id)}>ELIMINAR 🗑️</span>
                </div>
            ))}
            <div>
                <br />
                UD. Tiene {totalProductos} productos, y el total a pagar es: $ {totalAPagar}
            </div>
            <Link to="/checkout">FINALIZAR COMPRA</Link>
        </>
    )
}





