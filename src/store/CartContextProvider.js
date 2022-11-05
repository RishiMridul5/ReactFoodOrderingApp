import React, { useEffect, useReducer } from "react";
import { CartContext } from "./cart-ctx";

const initialCartState = {
  cartItems: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  const { type } = action;
  if (type === "addItem") {
    let updatedItems = [];

    const itemExists = state.cartItems.find(
      (item) => item.id === action.item.id
    );
    if (itemExists) {
      itemExists.amount += 1;
      updatedItems = [...state.cartItems];
    } else {
      updatedItems = [...state.cartItems, action.item];
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (type === "delItem") {
    const updatedItems = state.cartItems.filter(
      (item) => action.id !== item.id
    );

    let updatedTotalAmount = 0;
    for (let i = 0; i < updatedItems.length; i++) {
      updatedTotalAmount += updatedItems[i].price * updatedItems[i].amount;
    }
    return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (type === "reduceItem") {
    const updatedItems = state.cartItems.map((item, idx) => {
      if (action.id === item.id) {
        const newAmt = item.amount - 1;
        return { ...item, amount: newAmt };
      } else return item;
    });
    const targetItem = state.cartItems.find((item) => action.id === item.id);
    const updatedTotalAmount = state.totalAmount - targetItem.price;

    return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );
  useEffect(() => {
    console.clear();
    console.log(
      `Total items in cart🛒: ${cartState.cartItems.length}, Total amount 💲: ${cartState.totalAmount}`
    );
    console.log(cartState.cartItems);
  }, [cartState]);

  const addItemHandler = (newItem) => {
    dispatchCartAction({
      type: "addItem",
      item: newItem,
    });
  };
  const delItemHandler = (id) => {
    dispatchCartAction({
      type: "delItem",
      id: id,
    });
  };
  const reduceItemHandler = (id) => {
    dispatchCartAction({
      type: "reduceItem",
      id: id,
    });
  };
  const cartContext = {
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    delItem: delItemHandler,
    reduceQuantity: reduceItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
