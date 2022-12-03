

import React, { useContext, useState } from 'react'
import { contextoGeneral } from './ContextContainer'


export default function Checkout() {
    const { carrito, totalAPagar } = useContext(contextoGeneral);
    const [nombre, setNombre] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    function handleClickBuyButton() {
        // alert(nombre + "" + tel + "" + email + ' quiere comprar ' + JSON.stringify(carrito) + ' total a pagar: ' + totalAPagar);
        const pedido = {
            comprador: { nombre, tel, email },
            carrito,
            total: totalAPagar,
        };
        console.log('quiere comprar', pedido)
    }
    return (
        <div>
            <div>{carrito.map(item => <p>{item.name + ' ' + item.precio + ' ' + 'Cant:' + item.quantity}</p>)}</div>
            <div>TOTAL A PAGAR: {totalAPagar}</div>
            <div>
                <input placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input placeholder='Tel' value={tel} onChange={(e) => setTel(e.target.value)} />
                <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="button" onClick={handleClickBuyButton} value="PAGAR" />
            </div>
        </div>
    );
}

