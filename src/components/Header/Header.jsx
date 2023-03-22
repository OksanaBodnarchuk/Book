import React from "react";
import IconsHeader from "../Icons/IconsHeader";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import OrderBtn from "../OrderBtn/OrderBtn";
import s from "./header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.info}>
        <Logo />
        <IconsHeader />
      </div>
      <Nav />
      <OrderBtn />
    </div>
  );
};

export default Header;
