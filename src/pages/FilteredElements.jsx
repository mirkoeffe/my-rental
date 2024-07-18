import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useElements } from "../context/ElementsContext";
import "../App.css";
import Button from "../components/Button/index";

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
                    <p>{item.accommodates}</p>
                    <p>{item.price} € per night</p>
                  </div>
                </div>
              </Link>
              <Button onClick={() => handleEditClick(item.id)}>EDIT</Button>
              <Button onClick={() => handleDeleteClick(item.id)}>DELETE</Button>
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
