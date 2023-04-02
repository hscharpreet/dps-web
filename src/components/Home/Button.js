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
      <IconContext.Provider
        value={{ color: "var(--yellow)", className: "icon1" }}
      >
        <div className="sidebarIcon">
          <GiHamburgerMenu
            onClick={showSidebar}
            className="menuBars"
          ></GiHamburgerMenu>
        </div>
        <nav className={sidebar ? "navMenu active" : "navMenu"}>
          <RxCross1 onClick={showSidebar} className="menuBars2"></RxCross1>
          <div className="menuImage">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2Fchildrenback_11zon%20(1).webp?alt=media&token=e7684118-402d-4ada-af5f-8b796f3f1031"
              alt="menuImage"
            />
          </div>
          <div className="navMenuItem">
            <ul onClick={showSidebar}>
              <li className="navbarToggle"></li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                    {/* <hr className="line5" /> */}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Button;
