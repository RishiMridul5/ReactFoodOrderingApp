import React, { useState } from "react";
export const ShowCart = React.createContext({
  showCart: false,
  showCartHandler: () => {},
  hideCartHandler: () => {},
});

export const ShowCartProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => setShowCart(true);
  const hideCartHandler = () => setShowCart(false);
  return (
    <ShowCart.Provider value={{ showCart, showCartHandler, hideCartHandler }}>
      {props.children}
    </ShowCart.Provider>
  );
};
