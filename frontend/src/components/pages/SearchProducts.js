import React, { useState } from "react";
import { SearchBar } from "../SearchBar";
import "../../styles/searchProducts.css";

export const SearchProducts = (defaultProduct = "") => {
  //state for handle the product to search
  const [productToSearch, setproductToSearch] = useState(defaultProduct);
  console.log(productToSearch);
  return (
    <>
      <SearchBar setproductToSearch={setproductToSearch} />
    </>
  );
};
