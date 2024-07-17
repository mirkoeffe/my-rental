import React from "react";
import { useParams } from "react-router-dom";
import data from "../assets/project-data.json";
import "../App.css";
import Navbar from "../components/Navbar/index.jsx";

const FilteredElements = () => {
  const { city } = useParams();
  const filteredData = data.results.filter(
    (item) => item.city.toLowerCase() === city.toLowerCase()
  );

  return (
    <div>
      <Navbar />
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
                <p>{item.price} € per night</p>
              </div>
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
