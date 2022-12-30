import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { SidebarData } from "./slider/SidebarData";
import { IconContext } from "react-icons/lib";

const Button = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <div className="sidebarIcon">
        <NavLink to="/" className="menuBars">
          <GiHamburgerMenu onClick={showSidebar}/>
        </NavLink>
      </div>
      <nav className={sidebar ? "navMenu active" : "navMenu"}>
        <ul className="navMenuItem" onClick={showSidebar} >
          <li className="navbarToggle">
            <NavLink to="/" className="menuBars">
              <RxCross1 onClick={showSidebar}/>
            </NavLink>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <NavLink to={item.path}>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
};

export default Button;
