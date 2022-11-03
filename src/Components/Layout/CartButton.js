import React, { useContext } from "react";
import style from "./CartButton.module.css";
import { ShowCart } from "../../store/showCart-ctx";
import { CartContext } from "../../store/cart-ctx";
const CartButton = (props) => {
  const { showCartHandler } = useContext(ShowCart);

  const { cartItems } = useContext(CartContext);

  return (
    <button className={style.cartButton} onClick={() => showCartHandler()}>
      <span>Yout Cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      <span className={style.badge}>
        <div>{cartItems.length}</div>
      </span>
    </button>
  );
};

export default CartButton;
