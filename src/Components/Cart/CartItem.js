import React from "react";
import style from "./CartItem.module.css";
const CartItem = ({ itemDetails }) => {
  const { id, amount, name, price } = itemDetails;

  const cartItemEl = (
    <li className={style.cartItem} key={id}>
      <div className={style.name}>{name}</div>
      <div>
        <span className={style.amtLabel}>Qty: </span>
        <span className={style.amount}> {amount}</span>
      </div>
      <div className={style.price}>Rs. {price * amount}</div>
      <button className={style.btnDelItem}>
        <i className="fa-solid fa-trash icon"></i>
      </button>
    </li>
  );

  return cartItemEl;
};

export default CartItem;
