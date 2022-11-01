import React from "react";
import style from "./Button.module.css";
const Button = (props) => {
  const { type, className } = props;
  let btnClasses = className.split(" ");
  return (
    <button
      style={{ width: "100%" }}
      type={type || ""}
      className={`${style.btn} ${style[btnClasses[1]]} ${style[btnClasses[2]]}`}
    >
      <span style={{ marginRight: ".25rem" }}>
        <i className="fa-solid fa-cart-plus"></i>
      </span>
      <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
        +Add
      </span>
    </button>
  );
};

export default Button;
