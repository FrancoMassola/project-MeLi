import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import '../../styles/searchInput.css'

export const SearchInput = ({ setproductToSearch }) => {
  const [formValues, handleInputChange] = useForm({ productToSearch: "" });

  //to navigate to other screens
  const navigate = useNavigate();

  //destruct the values of the form
  const { productToSearch } = formValues;

  //useRef for reference the view navigation and the demount
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productToSearch.trim().length > 2) {
      setproductToSearch(productToSearch);
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
        />
        <a type="submit">
          <img className="searchIcon" src="/assets/ic_Search.png" alt="" />
        </a>
      </form>
    </>
  );
};

SearchInput.propTypes = {
  setproductToSearch: PropTypes.func.isRequired,
};
