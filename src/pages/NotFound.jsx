import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar/index";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="back-home-link">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
