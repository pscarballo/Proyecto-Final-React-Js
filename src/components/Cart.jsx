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




// import React from 'react';
// import { useCartContext } from '../CartContext';
// import ItemCart from './Item';
// import '../estilos/EstilosCart.css';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const { cart, TotalPrice, CleanCart } = useCartContext();
//   if (cart.length === 0) {
//     return (
//       <>
//         <p className="menSajecarrito">No hay elementos en el carrito. Que estas esperando para comprar</p>
//         <Link to="/">
//           <p className="linkTienda"> Haz click aqui para ver nuestros productos</p>
//         </Link>
//       </>
//     );
//   }
//   return (
//     <div className="cHango">
//       {cart.map((producto) => (
//         <ItemCart key={producto.id} producto={producto} />
//       ))}
//       <p className="precio">Total a pagar:${TotalPrice()}</p>
//       <Link className="toChekout" to="/Chekout">
//         Finalizar Compra
//       </Link>
//       <button onClick={() => CleanCart()}>Vaciar Carrito</button>
//     </div>
//   );
// };
// export default Cart;
