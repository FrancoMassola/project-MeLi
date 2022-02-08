import React, { useState } from "react";
import MeLi_icon from "../assets/Logo_ML@2x.png"
import "../styles/searchBar.css";
import { SearchInput } from "./SearchInput";

export const SearchBar = ({setproductToSearch}) => {

  return (
    <>
      <div className="container">
        <div className="logo_ML-box">
          <img src={MeLi_icon} />
        </div>
        <div className="input">
          <SearchInput setproductToSearch={setproductToSearch}/>
        </div>
      </div>

    </>
  );
};
