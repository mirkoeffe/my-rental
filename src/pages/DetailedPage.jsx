import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useElements } from "../context/ElementsContext";
import "../App.css";

const DetailedPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const { elements } = useElements();

  useEffect(() => {
    const selectedItem = elements.find((item) => item.id === id);
    if (!selectedItem) {
      navigate("/*");
    } else {
      setItem(selectedItem);
    }
  }, [id, elements, navigate]);

  if (!item) {
    return null;
  }

  return (
    <div>
      <div className="detailed-page">
        <img src={item.picture_url.url} alt={item.name} />
        <div className="detailed-item">
          <h2>{item.name}</h2>
          <p className="detailed-description">{item.description}</p>
          <br />
          <p>Accomodation: {item.accommodates}</p>
          <p>{item.price} € per night</p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default DetailedPage;
