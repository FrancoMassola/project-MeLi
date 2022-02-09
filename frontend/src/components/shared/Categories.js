import React from "react";
import "../../styles/categories.css";

export const Categories = ({ categories }) => {
  //to handle the ">"" of categories I use the length of categories and the index of the map
  const lengthCategories = categories.length;
  return (
    /* A possible improvement in the future this box of categories should be a nav bar that  allow us to navigate between them*/
    <div className="categories-container">
      {categories.map((category, index) => {
        return (
          <span key={category.trim()} className="category">
            {category}
            {index + 1 < lengthCategories && (
              <span className="icon-categoy">{">"}</span>
            )}
          </span>
        );
      })}
    </div>
  );
};
