import React from "react";
import "./Header.css"
import "../../index.css"

export const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-menu h-container">
        <img src="../public/logo.png" alt="logo" width={100} />
        <div className=" flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact us</a>
          <a href="">Get started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header
