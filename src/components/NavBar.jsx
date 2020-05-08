import React from "react";
import logo from "../images/logo.jpg";

const NavBar = () => (
  <div className="column nav">
    <div className="nav-top">
      <img className="nav-img" src={logo} alt="" height="100" width="100" />
      <h1 className="nav-clg-name">Dayanand Sagar College Of Engineering</h1>
    </div>
    <h1 className="nav-title">Library</h1>
  </div>
);

export default NavBar;
