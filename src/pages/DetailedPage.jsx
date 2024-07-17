import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/project-data.json";
import "../App.css";
import Navbar from "../components/Navbar/index.jsx";

const DetailedPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = data.results.find((item) => item.id === id);
    setItem(selectedItem);
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="detailed-page">
        <img src={item.picture_url.url} alt={item.name} />
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <br />
          <p>{item.price} € per night</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
