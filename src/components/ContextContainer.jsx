import React, { useState, createContext } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import Item from './Item';

export const contextoGeneral = createContext();

export default function ContextContainer({ children }) {
    const [carrito, setCarrito] = useState([]);
    // const {carrito} = useContext (contextoGeneral);

    const [totalAPagar, setTotalAPagar] = useState(0);

    function posInCart(id) {
        const pos = carrito.findIndex((item) => item.id == id);
        return pos;
    }

    function addItem(carrito, quantity) {
        console.log(Item,quantity);
         const pos = posInCart(Item.id);
         if (pos == -1) {
             setCarrito([...carrito, { ...Item, quantity }]);
         } else {
             const carritoAux = [...carrito];
             carritoAux[pos] = { ...carritoAux[pos], quantity: carritoAux[pos].quantity + quantity };
             setCarrito(carritoAux);
         }
    }
    // // // // // useEffect(() => {
    // // // // //     console.log(carrito);
    // // // // //   }, [carrito]);

    function removeItem(id) {
        setCarrito(carrito.filter((product) => product.id !== id));
    }
    

    function clear() {
        setCarrito([]);
    }

    useEffect(() => {
        const total = carrito.reduce((acc, item) => acc + item.quantity * item.precio, 0)
        setTotalAPagar(total)
        
        
    }, [carrito]);



    return (
        <contextoGeneral.Provider value={{ carrito, addItem, removeItem, clear, totalAPagar }}>
            {children}
        </contextoGeneral.Provider>
    );
}