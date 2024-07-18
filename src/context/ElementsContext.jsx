import { useContext, createContext, useState } from "react";
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

  return (
    <ElementsContext.Provider value={{ elements, setElements, addElement }}>
      {children}
    </ElementsContext.Provider>
  );
};

export const useElements = () => useContext(ElementsContext);
