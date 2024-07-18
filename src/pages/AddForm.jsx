import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useElements } from "../context/ElementsContext";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import Button from "../components/Button/index";

const AddForm = () => {
  const navigate = useNavigate();
  const { addElement } = useElements();
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    picture_url: { url: "" },
    city: "",
    country: "",
    neighbourhood: "",
  });
  const [error, setError] = useState("");

  const handleSaveClick = () => {
    if (
      !newItem.name ||
      !newItem.description ||
      !newItem.price ||
      !newItem.picture_url.url ||
      !newItem.city ||
      !newItem.country ||
      !newItem.neighbourhood
    ) {
      setError("All fields are required");
      return;
    }
    const newId = uuidv4();
    const itemWithId = { ...newItem, id: newId };
    addElement(itemWithId);
    navigate("/rentals");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  return (
    <div className="edit-form">
      <h2>Add New Property</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newItem.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={newItem.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="picture_url"
            value={newItem.picture_url.url}
            onChange={(e) =>
              setNewItem((prevItem) => ({
                ...prevItem,
                picture_url: { url: e.target.value },
              }))
            }
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={newItem.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={newItem.country}
            onChange={handleChange}
          />
        </label>
        <label>
          Neighbourhood:
          <input
            type="text"
            name="neighbourhood"
            value={newItem.neighbourhood}
            onChange={handleChange}
          />
        </label>
        <Button onClick={handleSaveClick}>Save</Button>
      </form>
    </div>
  );
};

export default AddForm;
