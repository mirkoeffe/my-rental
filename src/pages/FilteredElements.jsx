import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useElements } from "../context/ElementsContext";
import "../App.css";

const FilteredElements = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const { elements, setElements } = useElements();

  useEffect(() => {
    const cityFilteredData = elements.filter(
      (item) => item.city.toLowerCase() === city.toLowerCase()
    );
    setFilteredData(cityFilteredData);
  }, [city, elements]);

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = (id) => {
    const updatedData = elements.filter((item) => item.id !== id);
    setElements(updatedData);
  };

  return (
    <div>
      <h1 className="filtered-header">
        Properties in {city.charAt(0).toUpperCase() + city.slice(1)}
      </h1>
      <div className="filtered-body">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="filtered-item">
              <Link to={`/detail/${item.id}`} className="filtered-item-link">
                <div>
                  <img src={item.picture_url.url} alt={item.name} />
                  <div>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <br />
                    <p>{item.accomodates}</p>
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
          ))
        ) : (
          <p>No properties found in {city}</p>
        )}
      </div>
    </div>
  );
};

export default FilteredElements;
