import React from 'react'
import { useContext } from 'react';
import { contextoGeneral } from '../components/ContextContainer';

export default function Cart() {
    const { carrito, cant, totalAPagar, totalProductos } = useContext(contextoGeneral);

    return (
        <div>
            tiene {totalProductos} pagar {totalAPagar};
        </div>
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
