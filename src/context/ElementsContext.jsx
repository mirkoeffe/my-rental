import { createContext, useContext, useState } from "react";
import data from "../assets/project-data.json";

const ElementsContext = createContext();

export const ElementsProvider = ({ children }) => {
  const uniqueData = data.results.reduce((acc, item) => {
    if (!acc.some((existingItem) => existingItem.id === item.id)) {
      acc.push(item);
    }
    return acc;
  }, []);

  const [elements, setElements] = useState(uniqueData);

  const addElement = (newItem) => {
    setElements((prevElements) => [...prevElements, newItem]);
  };

  const updateElement = (updatedItem) => {
    setElements((prevElements) =>
      prevElements.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  return (
    <ElementsContext.Provider
      value={{ elements, addElement, setElements, updateElement }}
    >
      {children}
    </ElementsContext.Provider>
  );
};

export const useElements = () => useContext(ElementsContext);
