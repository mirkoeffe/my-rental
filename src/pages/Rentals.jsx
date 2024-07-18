import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useElements } from "../context/ElementsContext.jsx";
import Button from "../components/Button/index.jsx";

function Rentals() {
  const { elements, setElements } = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Rentals component mounted");
  }, []);

  useEffect(() => {
    console.log("Elements updated in Rentals:", elements);
  }, [elements]);

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
      <div>
        <Button onClick={handleAddClick}>Add New Element</Button>
        <div className="elements-list">
          {elements.map((item) => (
            <div key={item.id} className="element-item">
              <Link to={`/detail/${item.id}`} className="element-item-link">
                <div>
                  <img src={item.picture_url.url} alt={item.name} />
                  <div className="element-description">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>Accomodates: {item.accommodates}</p>
                    <p>{item.price} € per night</p>
                  </div>
                </div>
              </Link>
              <Button onClick={() => handleEditClick(item.id)}>EDIT</Button>
              <Button onClick={() => handleDeleteClick(item.id)}>DELETE</Button>
            </div>
          ))}
        </div>
        <br />
      </div>
    </div>
  );
}

export default Rentals;
