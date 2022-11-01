import Modal from "../UI/Modal";
import style from "./Cart.module.css";

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
      return <li>{item.name}</li>;
    })}
  </ul>
);
const Cart = (props) => {
  return (
    <Modal>
      <div className={style.cart}>
        {cartItems}
        <div className={style.total}>
          <span>Total Amount</span>
          <span>Rs 300</span>
        </div>
        <div className={style.btnActions}>
          <button className={style.btnClose}>Close</button>
          <button className={style.btnOrder}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
