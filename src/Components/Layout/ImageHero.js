import style from "./ImageHero.module.css";
import heroImage from "../../assets/img/hero.jpg";
import React from "react";

const MainImage = () => {
  return (
    <div className={style.heroContainer}>
      <img src={heroImage} alt="main-banner" />
    </div>
  );
};

export default MainImage;
