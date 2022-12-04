import React from 'react';
import { useContext } from 'react';
import { contextoGeneral } from './ContextContainer';

export default function Cart() {
  const { carrito, cant, totalAPagar } = useContext(contextoGeneral);
  alert(totalAPagar)

  return (
    <>
      {carrito.map((item) => (
        <>
          {/* <div>{item.name + "" + <span> onclick</span></div> */}
        </>

      ))}
      <div>
        Tienes en el carro: {cant} a pagar {totalAPagar}
      </div>
    </>
  )
}
