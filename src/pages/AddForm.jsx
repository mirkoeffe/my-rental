import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const navigate = useNavigate();
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

  const handleSaveClick = () => {
    const savedData = JSON.parse(localStorage.getItem("properties")) || [];
    newItem.id = new Date().getTime().toString(); // Assign a unique id
    const updatedData = [...savedData, newItem];
    localStorage.setItem("properties", JSON.stringify(updatedData));
    navigate("/rentals", { state: { newItem } }); // Navigate back to the rentals page with state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  return (
    <div className="edit-form">
      <h2>Add New Property</h2>
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
        <button type="button" onClick={handleSaveClick}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddForm;
