import React from "react";
import Navigation from "./Navigation";
import MainImage from "./ImageHero";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <Navigation />
      <MainImage />
    </header>
  );
};

export default Header;
