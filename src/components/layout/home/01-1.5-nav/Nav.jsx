import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <button>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink to="/Cart" activeStyle>
              Store
            </NavLink>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
