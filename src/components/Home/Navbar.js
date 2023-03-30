import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Button from "./Button";
import ProgressiveImage from "react-progressive-graceful-image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const image1 =
    "https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2FGroup%201.png?alt=media&token=2af23d25-d3ce-4e0d-bd8d-92c9759108f7";

  const image2 =
    "https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FcompressedImages%2FGroup_1-removebg-preview_11zon.png?alt=media&token=aa9d217f-18ed-4b22-96f1-bfea41d7f769";

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header className="navbar">
        <nav className="homeNav">
          <div className={scrolled ? "navLogo scrolled" : "navLogo"}>
            <a href="/dps-web">
              <ProgressiveImage src={image1} placeholder={image2}>
                {(src, loading) => (
                  <img
                    src={src}
                    alt="Logo"
                    className={`image1${loading ? " loading" : " loaded"}`}
                    width="100%"
                    height="100%"
                  />
                )}
              </ProgressiveImage>
            </a>
          </div>
          <div className={scrolled ? "navigation1" : "navigation"}>
            <Button />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
