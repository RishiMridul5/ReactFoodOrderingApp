import React, { useContext } from "react";
import Modal from "../UI/Modal";
import style from "./Cart.module.css";
import { ShowCart } from "../../store/showCart-ctx";

let cartItems = (
  <ul>
    {[
      {
        id: "m1",
        name: "Sushi",
        amt: 2,
        price: 22.99,
      },
    ].map((item) => {
      return <li key="test">{item.name}</li>;
    })}
  </ul>
);
const Cart = (props) => {
  const { showCart, hideCartHandler: close } = useContext(ShowCart);

  return (
    <>
      {showCart && (
        <Modal>
          <div className={style.cart}>
            {cartItems}
            <div className={style.total}>
              <span>Total Amount</span>
              <span>Rs 300</span>
            </div>
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
