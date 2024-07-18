import { useContext, createContext, useState } from "react";
import data from "../assets/project-data.json";

const ElementsContext = createContext();

export const ElementsProvider = ({ children }) => {
  const [elements, setElements] = useState(data.results);

  return (
    <ElementsContext.Provider value={{ elements, setElements }}>
      {children}
    </ElementsContext.Provider>
  );
};

export const useElements = () => useContext(ElementsContext);
