import React from "react";
import style from "./Navigation.module.css";
import CartButton from "./CartButton";
import SiteLogo from "./SiteLogo";
const Navigation = () => {
  return (
    <nav className={style.navbar}>
      <SiteLogo />
      <CartButton />
    </nav>
  );
};

export default Navigation;
