import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../assets/project-data.json";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const savedData =
      JSON.parse(localStorage.getItem("properties")) || data.results;
    const itemToEdit = savedData.find((item) => item.id === id);
    setEditItem(itemToEdit);
  }, [id]);

  const handleSaveClick = () => {
    const savedData =
      JSON.parse(localStorage.getItem("properties")) || data.results;
    const updatedData = savedData.map((item) =>
      item.id === editItem.id ? editItem : item
    );
    localStorage.setItem("properties", JSON.stringify(updatedData));
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  if (!editItem) return <div>Loading...</div>;

  return (
    <div className="edit-form">
      <h2>Edit Property</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editItem.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={editItem.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={editItem.price}
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

export default EditForm;
