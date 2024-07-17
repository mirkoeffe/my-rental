import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../assets/project-data.json";
import "../App.css";

const FilteredElements = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const savedData =
      JSON.parse(localStorage.getItem("properties")) || data.results;
    const cityFilteredData = savedData.filter(
      (item) => item.city.toLowerCase() === city.toLowerCase()
    );
    setFilteredData(cityFilteredData);
  }, [city]);

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = (id) => {
    const updatedData = filteredData.filter((item) => item.id !== id);
    setFilteredData(updatedData);
    const savedData = JSON.parse(localStorage.getItem("properties")) || [];
    const updatedSavedData = savedData.filter((item) => item.id !== id);
    localStorage.setItem("properties", JSON.stringify(updatedSavedData));
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
              <img src={item.picture_url.url} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <br />
                <p>{item.accomodates}</p>
                <p>{item.price} € per night</p>
              </div>
              <button onClick={() => handleEditClick(item.id)}>EDIT</button>
              <button onClick={() => handleDeleteClick(item.id)}>DELETE</button>
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
