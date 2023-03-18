import React, { useEffect, useState } from "react";
import "./Navbar2.css";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../Home/SidebarData";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { RxCross1 } from "react-icons/rx";

const Navbar2 = () => {
  const [isTop, setIsTop] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#e3d53e" : "white",
    };
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      setIsTop(isTop);
    });
  }, []);

  return (
    <>
      <div className={`navbar2 ${!isTop ? "navbarScrolled1" : ""}`}>
        <nav className="aboutNav">
          <IconContext.Provider
            value={{ color: "#d6d638", className: "icon1" }}
          >
            <div className="leftNav">
              <NavLink to="/" className="link">
                <div className=" divineLogo">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FdivineLogo.png?alt=media&token=866b1568-ba61-44b7-8706-f61fe44b8c70"
                    alt="Logo"
                  />
                </div>
              </NavLink>
            </div>
            <div className="menu-icon1" onClick={handleShowNavbar}>
              <GiHamburgerMenu />
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <div className="menu-icon2" onClick={handleShowNavbar}>
                <RxCross1 />
              </div>
              <ul>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.className}>
                      <NavLink
                        style={navLinkStyles}
                        to={item.path}
                        data-text={item.text}
                      >
                        <span>{item.title}</span>
                      </NavLink>
                      <hr className="aboutLine" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </IconContext.Provider>
        </nav>
      </div>
    </>
  );
};
// };
export default Navbar2;

// const [colorChange, setColorchange] = useState(false);
// const changeNavbarColor = () => {
//   if (window.scrollY <= 100) {
//     setColorchange(true);
//   } else {
//     setColorchange(false);
//   }
// };
// window.addEventListener("scroll", changeNavbarColor);

// const navLinkStyles = ({ isActive }) => {
//   return {
//     color: isActive ? "#e3d53e" : "white",
//   };
// };
