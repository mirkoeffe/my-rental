import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import SidebarData from "../Sidebar/SidebarData";
import Logo from "../../assets/my.png";
import "./styles.css";

function Navbar({ onCityClick }) {
  const [sidebar, setSidebar] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);
  const location = useLocation();
  const isTheRightPage =
    location.pathname === "/" || location.pathname === "/rentals";

  const toggleSidebar = () => {
    if (!sidebar) {
      setHideLogo(false);
      setSidebar(true);
    } else {
      setSidebar(false);
      setHideLogo(false);
    }
  };

  let renderButtons = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Link to="/rentals">
              <button className="nav-buttons">Rentals</button>
            </Link>
            <Link to="/about">
              <button className="nav-buttons">About</button>
            </Link>
            <Link to="/team">
              <button className="nav-buttons">Team</button>
            </Link>
          </>
        );
      case "/about":
        return (
          <>
            <Link to="/rentals">
              <button className="nav-buttons">Rentals</button>
            </Link>
            <Link to="/">
              <button className="nav-buttons homepage">Homepage</button>
            </Link>
            <Link to="/team">
              <button className="nav-buttons">Team</button>
            </Link>
          </>
        );
      case "/team":
        return (
          <>
            <Link to="/rentals">
              <button className="nav-buttons">Rentals</button>
            </Link>
            <Link to="/about">
              <button className="nav-buttons">About</button>
            </Link>
            <Link to="/">
              <button className="nav-buttons homepage">Homepage</button>
            </Link>
          </>
        );
      case "/rentals":
        return (
          <>
            <Link to="/">
              <button className="nav-buttons homepage">Homepage</button>
            </Link>
            <Link to="/about">
              <button className="nav-buttons">About</button>
            </Link>
            <Link to="/team">
              <button className="nav-buttons">Team</button>
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  if (!renderButtons()) {
    renderButtons = () => (
      <>
        <Link to="/">
          <button className="nav-buttons homepage">Homepage</button>
        </Link>
        <Link to="/rentals">
          <button className="nav-buttons">Rentals</button>
        </Link>
        <Link to="/about">
          <button className="nav-buttons">About</button>
        </Link>
        <Link to="/team">
          <button className="nav-buttons">Team</button>
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="navbar">
        <div
          className={`logo ${isTheRightPage ? "pointer" : ""}`}
          onClick={isTheRightPage ? toggleSidebar : null}
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
                isTheRightPage && hideLogo ? "hidden" : ""
              }`}
            />
          )}
        </div>
        <div className="links">{renderButtons()}</div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <SidebarData
          onCityClick={(city) => {
            onCityClick(city);
            toggleSidebar();
          }}
        />
      </nav>
    </>
  );
}

export default Navbar;
