import React from "react";
import "../App.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  return (
    <div id="home">
      <nav>
        <AnchorLink className="hoverstyle nav-item" href="#home">
          {" "}
          About
        </AnchorLink>
        <AnchorLink className="hoverstyle nav-item" href="#portfolio">
          Portfolio
        </AnchorLink>

        <AnchorLink className="hoverstyle nav-item" href="#contact">
          Contact
        </AnchorLink>
      </nav>
    </div>
  );
}

export default Navbar;
