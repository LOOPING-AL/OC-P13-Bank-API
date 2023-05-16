import { Link } from "react-router-dom";
import { argentBankLogo, iconExit } from "../../../assets";
import React from "react";

const Header = () => (
  <nav className="main-nav">
    <Link className="main-nav-logo" to="/home">
      <img
        className="main-nav-logo-image"
        src={argentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>

    <Link to={"/sign-in"} className="header-right">
      <img src={iconExit} className="header-logo" alt="icon exit" />
      Sign In
    </Link>
  </nav>
);
export default Header;
