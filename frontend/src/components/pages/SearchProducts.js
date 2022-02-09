import React, { useState } from "react";
import { SearchBar } from "../shared/SearchBar";
import "../../styles/searchProducts.css";

export const SearchProducts = (defaultProduct = "") => {
  //state for handle the product to search
  const [, setproductToSearch] = useState(defaultProduct);

  return (
    <>
      <SearchBar setproductToSearch={setproductToSearch} />
    </>
  );
};
