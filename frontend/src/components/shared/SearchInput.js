import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import "../../styles/searchInput.css";

export const SearchInput = () => {
  const [formValues, handleInputChange] = useForm({ productToSearch: "" });

  //to navigate to other screens
  const navigate = useNavigate();

  //destruct the values of the form
  const { productToSearch } = formValues;

  //useRef for reference the view navigation and the demount
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productToSearch.trim().length > 2) {
      navigate(`/items?search=${productToSearch}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productToSearch"
          value={productToSearch}
          onChange={handleInputChange}
          placeholder="Nunca dejes de buscar"
        />
        <button type="submit">
          <img className="searchIcon" src="/assets/ic_Search.png" alt="search-icon" />
        </button>
      </form>
    </>
  );
};
