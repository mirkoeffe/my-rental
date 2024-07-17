import { Link } from "react-router-dom";
import "./styles.css";

function SidebarData() {
  return (
    <ul className="sidebar">
      <li className="sidebar-links">Filter by City</li>
      <li>
        <Link to="/filter/berlin" className="sidebar-links">
          Berlin
        </Link>
      </li>
      <li>
        <Link to="/filter/madrid" className="sidebar-links">
          Madrid
        </Link>
      </li>
      <li>
        <Link to="/filter/paris" className="sidebar-links">
          Paris
        </Link>
      </li>
    </ul>
  );
}

export default SidebarData;
