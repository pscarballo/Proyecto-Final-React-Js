import React from 'react'
import { useContext } from 'react';
import { contextoGeneral } from '../components/ContextContainer';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { carrito, totalAPagar, totalProductos, removeItem } = useContext(contextoGeneral);

    return (
        <>
            {carrito.map((item) => (
                <div>{item.name + " " + item.quantity} <span onClick={() => removeItem(item.id)}>🗑️</span></div>
            ))}
            <div>
                tiene {totalProductos} pagar {totalAPagar}
            </div>
            <Link to="/checkout">FINALIZAR COMPRA</Link>
        </>
    )
}





