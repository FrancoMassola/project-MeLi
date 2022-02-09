import React from "react";
import "../../styles/categories.css";

export const Categories = ({ categories }) => {
  //to handle the ">"" of categories I use the length of categories and the index of the map
  const lengthCategories = categories.length;
  console.log(lengthCategories);
  return (
    <div className="categories-container">
      {categories.map((category, index) => {
        return (
          <span className="category">
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
