import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useElements } from "../context/ElementsContext";
import "../App.css";
import Button from "../components/Button/index";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editItem, setEditItem] = useState(null);
  const { elements, updateElement } = useElements();

  useEffect(() => {
    const itemToEdit = elements.find((item) => item.id === id);
    if (!itemToEdit) {
      navigate("/*");
    } else {
      setEditItem(itemToEdit);
    }
  }, [id, elements, navigate]);

  const handleSaveClick = () => {
    updateElement(editItem);
    navigate("/rentals");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  if (!editItem) {
    return null;
  }

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
        <Button onClick={handleSaveClick}>Save</Button>
      </form>
    </div>
  );
};

export default EditForm;
