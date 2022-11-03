import React, { useEffect, useState } from "react";
import style from "./CartItem.module.css";
const CartItem = ({
  itemDetails,
  removeItemFromCart,
  reduceItemQuantity,
  cartContextItems,
}) => {
  const { id, amount, name, price } = itemDetails;
  const [amtReducer, setamtReducer] = useState(true);

  
  useEffect(() => {
    cartContextItems.forEach((cartItem) => {
      if (cartItem.amount === 1) {
        setamtReducer(false);
      } else setamtReducer(true);
    });
  }, [cartContextItems]);

  const cartItemEl = (
    <li className={style.cartItem} key={id}>
      <div className={style.name}>{name}</div>
      <div>
        <span className={style.amtLabel}>Qty: </span>
        <span className={style.amount}> {amount}</span>
      </div>
      <div className={style.price}>Rs. {price * amount}</div>

      {amtReducer && (
        <button
          className={style.btnDelItem}
          onClick={() => reduceItemQuantity(id)}
        >
          <i className="fa-solid fa-circle-minus"></i>
        </button>
      )}

      <button
        className={style.btnDelItem}
        onClick={() => removeItemFromCart(id)}
      >
        <i className="fa-solid fa-trash icon"></i>
      </button>
    </li>
  );

  return cartItemEl;
};

export default CartItem;
