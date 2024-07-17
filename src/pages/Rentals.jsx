import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ElementList from "../components/ElementsList/index.jsx";
import Navbar from "../components/Navbar/index.jsx";
import "../App.css";

function Rentals() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    fetch("./src/assets/project-data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setElements(data.results || []);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div className="rentals">
      <Navbar />
      <Link to="/detail/:id">
        <ElementList elements={elements} />
      </Link>
    </div>
  );
}

export default Rentals;
