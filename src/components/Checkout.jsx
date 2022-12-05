import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { contextoGeneral } from './ContextContainer';


export default function Checkout() {
    const { carrito, totalAPagar, clear } = useContext(contextoGeneral);
    const [nombre, setNombre] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [PedidoInsertadoId, setPedidoInsertadoId] = useState('');

    function handleClickBuyButton() {

        const pedido = {
            comprador: { nombre, tel, email },
            carrito,
            total: totalAPagar,
        };

        const db = getFirestore();
        const pedidos = collection(db, 'pedidos');
        addDoc(pedidos, pedido).then((pedidoInsertado) => {
            setPedidoInsertadoId(pedidoInsertado.id);

            clear()
        });
    }
    return (
        <>
            {PedidoInsertadoId ? ('Gracias por elegirnos. Tu id de compra es: ' + PedidoInsertadoId) : (
                <div>
                    <h3>Ingrese Sus datos para finalizar la compra</h3>
                    <p>Sus productos son:</p>
                    <div>{carrito.map(item => <p>{item.name + ' $' + item.precio + ' ' + 'Cant:' + item.quantity}</p>)}</div>
                    <div>TOTAL A PAGAR: ${totalAPagar}</div>
                    <div>
                        <input placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} /> <br />
                        <input placeholder='Tel' value={tel} onChange={(e) => setTel(e.target.value)} /> <br />
                        <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <br />
                        <input type="button" onClick={handleClickBuyButton} value="PAGAR" />
                    </div>
                </div>
            )}
        </>
    );
}

