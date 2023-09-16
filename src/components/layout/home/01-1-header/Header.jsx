import React from "react";
import Nav from "../01-1.5-nav/Nav.jsx";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className="Header">
        <div>
          <h2>Profile</h2>
          <hr className="w-40 border-t-4 border-[#4444fc]"/>
        </div>
        <div className="Nav">
          <Nav></Nav>
        </div>
      </section>
    </div>
  );
};

export default Header;
