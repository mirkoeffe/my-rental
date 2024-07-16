import { Link } from "react-router-dom";
import "./Navbar/style.css";

function SidebarData() {
  return (
    <ul className="sidebar">
      <li className="sidebar-links">
        <Link to="/about">Berlin</Link>
      </li>
      <li className="sidebar-links">
        <Link to="/contact">Madrid</Link>
      </li>
      <li className="sidebar-links">
        <Link to="/rentals">Paris</Link>
      </li>
    </ul>
  );
}

export default SidebarData;
