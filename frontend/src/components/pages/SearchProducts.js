import React, { useState } from "react";
import { SearchBar } from "../SearchBar";
import "../../styles/searchProducts.css";
import { useFetch } from "../../hooks/useFetch";

export const SearchProducts = (defaultProduct = "") => {
  //state for handle the product to search
  const [productToSearch, setproductToSearch] = useState(defaultProduct);
  useFetch(productToSearch);

  return (
    <>
      <SearchBar setproductToSearch={setproductToSearch} />
    </>
  );
};
