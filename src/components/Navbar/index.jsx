import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import SidebarData from "../SidebarData";

import Logo from "../../assets/my.png";

import "./style.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);
  const location = useLocation();

  const isHomepage = location.pathname === "/";

  const toggleSidebar = () => {
    if (!sidebar) {
      setHideLogo(false);
      setSidebar(true);
    } else {
      setSidebar(false);
      setHideLogo(false);
    }
  };

  const renderButtons = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Link to="/about">
              <button className="nav-buttons">About</button>
            </Link>
            <Link to="/contact">
              <button className="nav-buttons">Contacts</button>
            </Link>
          </>
        );
      case "/about":
        return (
          <>
            <Link to="/">
              <button className="nav-buttons homepage">Homepage</button>
            </Link>
            <Link to="/contact">
              <button className="nav-buttons">Contacts</button>
            </Link>
          </>
        );
      case "/contact":
        return (
          <>
            <Link to="/about">
              <button className="nav-buttons">About</button>
            </Link>
            <Link to="/">
              <button className="nav-buttons homepage">Homepage</button>
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="navbar">
        <div
          className={`logo ${isHomepage ? "pointer" : ""}`}
          onClick={isHomepage ? toggleSidebar : null}
        >
          {sidebar ? (
            <Link to="#" className="menu-bars" onClick={toggleSidebar}>
              <AiOutlineClose className="side-icon" />
            </Link>
          ) : (
            <img
              src={Logo}
              alt="myRental logo"
              className={`default-logo ${
                isHomepage && hideLogo ? "hidden" : ""
              }`}
            />
          )}
        </div>
        <div className="links">{renderButtons()}</div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <SidebarData />
      </nav>
    </>
  );
}

export default Navbar;
