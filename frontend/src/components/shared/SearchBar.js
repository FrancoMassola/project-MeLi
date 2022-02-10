import React from "react";
import { SearchInput } from "./SearchInput";
import "../../styles/searchBar.css";

export const SearchBar = () => {
  return (
    <>
      <div className="container">
        <div className="logo_ML-box">
          <img src={"/assets/Logo_ML@2x.png"} />
        </div>
        <div className="searchInput">
          <SearchInput />
        </div>
      </div>
    </>
  );
};
