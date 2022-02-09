import React, { useState } from "react";
import { SearchBar } from "../shared/SearchBar";
import "../../styles/cardsProductDetails.css";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { ProductDetailsCard } from "../details-product/ProductDetailsCard";
import "../../styles/loading.css";

export const ProductDetails = () => {
  //state for handle the product to search
  const [, setproductToSearch] = useState("");

  //get the id param of a product
  const params = useParams();

  const url = `http://localhost:4000/api/items`;

  const { data, loading } = useFetch(url, params);

  //to handle the pass of props
  if (!loading) {
    var { item } = data;
    console.log(item);
  }

  return (
    <>
      <SearchBar setproductToSearch={setproductToSearch} />
      {/* loading flag */}
      {loading ? (
        <div id="loading">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <ProductDetailsCard {...item} />
      )}
    </>
  );
};
