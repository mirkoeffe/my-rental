import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../App.css";
import { useElements } from "../context/ElementsContext.jsx";

function Rentals() {
  const { elements, setElements } = useElements();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = (id) => {
    const updatedElements = elements.filter((item) => item.id !== id);
    setElements(updatedElements);
  };

  const handleAddClick = () => {
    navigate("/add");
  };

  return (
    <div className="rentals">
      <button className="add-element-button" onClick={handleAddClick}>
        Add New Element
      </button>
      <div className="elements-list">
        {elements.map((item) => (
          <div key={item.id} className="element-item">
            <Link to={`/detail/${item.id}`} className="element-item-link">
              <div>
                <img src={item.picture_url.url} alt={item.name} />
                <div className="element-description">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <br />
                  <p>{item.price} € per night</p>
                </div>
              </div>
            </Link>
            <button
              className="items-buttons"
              onClick={() => handleEditClick(item.id)}
            >
              EDIT
            </button>
            <button
              className="items-buttons"
              onClick={() => handleDeleteClick(item.id)}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default Rentals;
