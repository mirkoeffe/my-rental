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
      <div className="elements-list">
        {elements.map((item) => (
          <Link
            key={item.id}
            to={`/detail/${item.id}`}
            className="element-item-link"
          >
            <div className="element-item">
              <img src={item.picture_url.url} alt={item.name} />
              <div className="element-description">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <br />
                <p>{item.price} € per night</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Rentals;
