import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container ">
        <Link to="/">
          <img src="../public/logo.png" alt="logo" width={100} />
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className=" flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:fernandomoyano21@gmail.com">Contact</a>

            <button className="button">
              Login
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
