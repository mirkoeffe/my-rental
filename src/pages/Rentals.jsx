import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ElementList from "../components/ElementsList/index.jsx";
import "../App.css";

function Rentals() {
  const [elements, setElements] = useState([]);
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
        localStorage.setItem("properties", JSON.stringify(data.results || []));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  useEffect(() => {
    if (location.state && location.state.newItem) {
      setElements((prevElements) => [...prevElements, location.state.newItem]);
    }
  }, [location.state]);

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = (id) => {
    const updatedElements = elements.filter((item) => item.id !== id);
    setElements(updatedElements);
    localStorage.setItem("properties", JSON.stringify(updatedElements));
  };

  const handleAddClick = () => {
    navigate("/add");
  };

  return (
    <div className="rentals">
      <button onClick={handleAddClick}>Add New Element</button>
      <div className="elements-list">
        {elements.map((item) => (
          <div key={item.id} className="element-item">
            <Link to={`/detail/${item.id}`} className="element-item-link">
              <img src={item.picture_url.url} alt={item.name} />
              <div className="element-description">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <br />
                <p>{item.price} € per night</p>
              </div>
            </Link>
            <button onClick={() => handleEditClick(item.id)}>EDIT</button>
            <button onClick={() => handleDeleteClick(item.id)}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rentals;
