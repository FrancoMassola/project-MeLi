import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const SearchInput = ({ setproductToSearch }) => {
  const [inputValue, setinputValue] = useState("");

  //to navigate to other screens
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setproductToSearch(inputValue);
      setinputValue("");
      navigate(`/items?search=${inputValue}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

SearchInput.propTypes = {
  setproductToSearch: PropTypes.func.isRequired,
};
