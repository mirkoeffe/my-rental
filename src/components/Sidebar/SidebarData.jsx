import { Link } from "react-router-dom";
import "./styles.css";

function SidebarData({ onCityClick }) {
  return (
    <ul className="sidebar">
      <li className="sidebar-links">
        <button onClick={() => onCityClick("Berlin")}>Berlin</button>
      </li>
      <li className="sidebar-links">
        <button onClick={() => onCityClick("Madrid")}>Madrid</button>
      </li>
      <li className="sidebar-links">
        <button onClick={() => onCityClick("Paris")}>Paris</button>
      </li>
    </ul>
  );
}

export default SidebarData;
