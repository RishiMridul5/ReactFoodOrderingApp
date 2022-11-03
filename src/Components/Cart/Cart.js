import React, { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import style from "./Cart.module.css";
import { ShowCart } from "../../store/showCart-ctx";
import { CartContext } from "../../store/cart-ctx";
import CartItem from "./CartItem";

const Cart = (props) => {
  const {
    cartItems: cartContextItems,
    totalAmount,
    delItem,
  } = useContext(CartContext);
  const [emptyCart, setEmptyCart] = useState(true);

  const { showCart, hideCartHandler: close } = useContext(ShowCart);

  useEffect(() => {
    if (cartContextItems.length > 0) setEmptyCart(false);
  }, [cartContextItems]);

  let cartItems = (
    <ul>
      {cartContextItems.map((item) => (
        <CartItem itemDetails={item} removeItemFromCart={delItem} />
      ))}
    </ul>
  );

  return (
    <>
      {showCart && (
        <Modal>
          <div className={style.cart}>
            {emptyCart ? (
              <div className={style.total}>Your cart is empty</div>
            ) : (
              <div className={style.total}>
                <span>Total Amount </span>
                <span>Rs {totalAmount}</span>
              </div>
            )}
            {cartItems}

            <div className={style.btnActions}>
              <button
                className={`${style.btn} ${style.close}`}
                onClick={() => {
                  close();
                }}
              >
                Close
              </button>
              <button className={`${style.btn} ${style.order}`}>Order</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
