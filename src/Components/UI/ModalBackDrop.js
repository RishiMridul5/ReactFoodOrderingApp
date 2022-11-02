import React, { useContext } from "react";
import { ShowCart } from "../../store/showCart-ctx";
import style from "./ModalBackDrop.module.css";
const ModalBackDrop = () => {
  const { showCart } = useContext(ShowCart);

  return <>{showCart && <div className={style.backDrop}></div>}</>;
};

export default ModalBackDrop;
