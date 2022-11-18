// // import { getDownloadURL, ref } from "firebase/storage";
// // import { storage, storageRef } from "../firebase.config";
// import { GiHamburgerMenu } from "react-icons/gi";
// // import { collection, getDocs } from "firebase/firestore";
// // import { app, db } from "../firebase.config"
// import "./Navbar.css";
// const Navbar = async () => {
//   // var imageRef = storageRef.child('home/divineLogo.jpg');
//   // imageRef.getDownloadURL()
//   // .then((url) => {
//   //   console.log(url);
//   // })
//   // const querySnapshot = await getDocs(collection(db, "home"));
//   // querySnapshot.forEach((doc) => {
//   //   console.log(`${doc.id} => ${doc.data()}`);
//   // });

//   return (
//     <>
//       <div className="navbar">
//         {/* <div class="logo">
//           <a href="/">
//           <img src="https://firebasestorage.googleapis.com/v0/b/dps-web-cc638.appspot.com/o/home%2FdivineLogo.png?alt=media&token=a9e2b0be-094d-493a-8776-f2a47191c900" alt="logo" />
//           </a>
//         </div> */}

//         <div className="right-nav">
//           <h1>MENU</h1>
//           <div className="dropdown">
//             <button className="dropbtn">
//               <GiHamburgerMenu />
//             </button>
//             <div className="dropdown-content">
//               <a href="#">Home</a>
//               <a href="#">Home</a>
//               <a href="#">Home</a>
//               <a href="#">Home</a>
//               <a href="#">Home</a>
//               <a href="#">Home</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/Group 25.png'

const Navbar = () => {
  const storageRef = doc(db, "home", "banner");

  onSnapshot(storageRef, (doc) => {
    console.log(doc.data(), doc.id);
  });
  return (
    <>
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
                <h1>MENU</h1>  <GiHamburgerMenu/>
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

    </>
  );
};

export default Navbar;

// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar
