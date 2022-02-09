import React, { useState } from "react";
import { SearchBar } from "../SearchBar";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/loading.css";
import "../../styles/cards.css";
import { ProductCard } from "../ProductCard";
import { Categories } from "../result-view/Categories";

export const Results = () => {
  const location = useLocation();
  //se queryString to get and parse the value of query
  const { search = "" } = queryString.parse(location.search);

  const { data, loading } = useFetch(search);

  //state for handle the product to search
  const [, setproductToSearch] = useState(search);

  //limit to only 4 randoms products to show
  if (!loading) {
    //destruct props of the data, for get items and categories
    var { categories, items } = data;
    var productArrayToShow = [];

    for (let index = 0; index < 4; index++) {
      productArrayToShow.push(
        items[parseInt(Math.random() * (items.length - 0) + 0)]
      );
    }
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
        <div className="card-container">
          <ul className="ul-list-items">
            <div className="categories">
              <Categories categories={categories} />
            </div>
            {productArrayToShow.map((product) => {
              console.log(product.id);
              return (
                <li key={product.id}>
                  <ProductCard {...product} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
