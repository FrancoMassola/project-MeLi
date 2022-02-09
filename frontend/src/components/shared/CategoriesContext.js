import { createContext, useState } from "react";

export const CategoriesContext = createContext(null);

const CategoriesProvider = ({ children }) => {
  const [categoriesContext, setCategoriesContext] = useState([]);

  return (
    <CategoriesContext.Provider
      value={{ categoriesContext, setCategoriesContext }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider };
