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
    console.log(`Delete item`);
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

  
  const cartContext = {
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    delItem: delItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};