import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";

const Button = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sidebar">
      <IconContext.Provider value={{ color: "#daab2b", className: "icon1" }}>
        <div className="sidebarIcon">
          <GiHamburgerMenu
            onClick={showSidebar}
            className="menuBars"
          ></GiHamburgerMenu>
        </div>
        <nav className={sidebar ? "navMenu active" : "navMenu"}>
          <RxCross1 onClick={showSidebar} className="menuBars2"></RxCross1>

          <ul className="navMenuItem" onClick={showSidebar}>
            <li className="navbarToggle"></li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <NavLink to={item.path} data-text={item.text}>
                    <span>{item.title}</span>
                  </NavLink>
                  <hr className="line5" />
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Button;
