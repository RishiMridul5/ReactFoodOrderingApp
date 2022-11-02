import React, { useContext } from "react";
import style from "./CartButton.module.css";
import { ShowCart } from "../../store/showCart-ctx";
const CartButton = (props) => {
  const { showCartHandler } = useContext(ShowCart);
  return (
    <button className={style.cartButton} onClick={() => showCartHandler()}>
      <span>Yout Cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      <span className={style.badge}></span>
    </button>
  );
};

export default CartButton;
