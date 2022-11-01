import React from "react";
import style from "./CartButton.module.css";
const CartButton = (props) => {
  return (
    <button className={style.cartButton}>
      <span>Yout Cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      <span className={style.badge}></span>
    </button>
  );
};

export default CartButton;
