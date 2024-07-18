import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useElements } from "../context/ElementsContext";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editItem, setEditItem] = useState(null);
  const { elements, setElements } = useElements();

  useEffect(() => {
    const itemToEdit = elements.find((item) => item.id === id);
    if (itemToEdit) {
      setEditItem(itemToEdit);
    } else {
      setEditItem(null);
    }
  }, [id, elements]);

  const handleSaveClick = () => {
    const updatedData = elements.map((item) =>
      item.id === editItem.id ? editItem : item
    );
    setElements(updatedData);
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
            value={editItem.name || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={editItem.description || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={editItem.price || ""}
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
