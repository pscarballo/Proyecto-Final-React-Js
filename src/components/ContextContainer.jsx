import React, { createContext, useEffect, useState } from 'react';

export const contextoGeneral = createContext();

export default function ContextContainer({ children }) {
    const [carrito, setCarrito] = useState([]);
    const [totalAPagar, setTotalAPagar] = useState(0);
    const [totalProductos, setTotalAProductos] = useState(0);

    function posInCart(id) {
        const pos = carrito.findIndex((item) => item.id == id);
        return pos;
    }

    function addItem(item, quantity) {

        console.log("agregando", item, quantity);

        const pos = posInCart(item.id);
        if (pos == -1) {
            setCarrito([...carrito, { ...item, quantity }]);
        } else {
            const carritoAux = [...carrito];
            carritoAux[pos] = { ...carritoAux[pos], quantity: carritoAux[pos].quantity + quantity };
            setCarrito(carritoAux);
        }
    };


    function removeItem(id) {
        setCarrito(carrito.filter((product) => product.id !== id));
    };


    function clear() {
        setCarrito([]);
    }

    useEffect(() => {
        setTotalAPagar(carrito.reduce((acc, item) => acc + item.quantity * item.precio, 0));
        setTotalAProductos(carrito.reduce((acc, item) => acc + item.quantity, 0));


    }, [carrito]);



    return (
        <contextoGeneral.Provider value={{ carrito, addItem, removeItem, clear, totalAPagar, totalProductos }}>
            {children}
        </contextoGeneral.Provider>
    );
}