import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


export default function CartWidget({ cant }) {
  return (
    <>
      <Link to="/cart">
        <button>
          <ShoppingCartIcon />
          {cant}
        </button>
      </Link>
    </>
  );
}