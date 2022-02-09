import React, { useState } from "react";
import "../styles/searchBar.css";
import { SearchInput } from "./SearchInput";

export const SearchBar = ({ setproductToSearch }) => {
  return (
    <>
      <div className="container">
        <div className="logo_ML-box">
          <img src={"/assets/Logo_ML@2x.png"} />
        </div>
        <div className="searchInput">
          <SearchInput setproductToSearch={setproductToSearch} />
        </div>
      </div>
    </>
  );
};
