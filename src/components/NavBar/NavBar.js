import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper grey">
        <a href="/page/1" className="brand-logo">
          <img src="/images/navbar-brand.png" alt="" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/page/1">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/photos/1">Photos</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
