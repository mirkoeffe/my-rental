import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/index.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import ElementsList from "../components/ElementsList/index.jsx";

function Homepage() {
  const [selectedCity, setSelectedCity] = useState("");
  const [elements, setElements] = useState([]);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  /* useEffect(() => {
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
  }, []); */

  return (
    <>
      <Navbar onCityClick={handleCityClick} />
      {!selectedCity && <Carousel />}
      <ElementsList elements={elements} />
      {selectedCity && (
        <div className="city-content">
          <h1>{selectedCity}</h1>
        </div>
      )}
    </>
  );
}

export default Homepage;
