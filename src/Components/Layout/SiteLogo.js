import React from "react";
import logo from "../../assets/img/favicon.svg";
import style from "./SiteLogo.module.css";

const SiteLogo = () => {
  return (
    <div className={style.logoContainer}>
      <img src={logo} alt="logo" />
      <h1>FoodExtreme</h1>
    </div>
  );
};

export default SiteLogo;
