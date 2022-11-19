
import React from "react";
import "./Navbar.css";
import {
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/Group 25.png'
import { IconContext } from "react-icons";

const Navbar = () => {
  const storageRef = doc(db, "home", "banner");
  onSnapshot(storageRef, (doc) => {
    console.log(doc.data(), doc.id);
  });
  return (
    <>  
    <IconContext.Provider
      value={{ size: '30px' }}
    >
          <div class="menu-container">
            <nav>
            <a href="/" class="navbar-header logo">
            <img
              src={logo}
              alt="Logo"
            />
          </a>
               
              <ul class="menu">
                <li class="dropdown dropdown-5">
                <h1 className="underline">MENU</h1> <i className="icon"> <GiHamburgerMenu/></i>
                  <ul class="dropdown_menu dropdown_menu-5">
                    <li class="dropdown_item-1">Item 1</li>
                    <li class="dropdown_item-2">Item 2</li>
                    <li class="dropdown_item-3">Item 3</li>
                    <li class="dropdown_item-4">Item 4</li>
                    <li class="dropdown_item-5">Item 5</li>
                  </ul>
                </li>
              </ul>
            </nav>
           

          </div>
          </IconContext.Provider>
    </>
  );
};

export default Navbar;


