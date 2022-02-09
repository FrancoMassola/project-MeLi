import React, { useState } from "react";
import { SearchBar } from "../shared/SearchBar";
import "../../styles/cardsProductDetails.css";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  //state for handle the product to search
  const [, setproductToSearch] = useState("");

  //get the id param of a product
  const params = useParams();

  const url = `http://localhost:4000/api/items`

  const { data, loading } =useFetch(url,params);

  console.log(data);

  return (
    <>
      <SearchBar setproductToSearch={setproductToSearch} />
      <div className="product-details-container">
        <div className="product-image">product image</div>
        <div>
          <ul>
            <li>nuevo cant vendidos</li>
            <li>title</li>
            <li>price</li>
            <li>button comprar</li>
          </ul>
        </div>
      </div>
    </>
  );
};
