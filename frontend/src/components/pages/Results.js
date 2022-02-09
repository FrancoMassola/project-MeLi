import React, { useState } from "react";
import { SearchBar } from "../shared/SearchBar";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/loading.css";
import "../../styles/cards.css";
import { ProductCard } from "../results-product/ProductCard";
import { Categories } from "../shared/Categories";

export const Results = () => {
  const location = useLocation();
  //se queryString to get and parse the value of query - I could use Context API for handle the name of product to search
  const { search = "" } = queryString.parse(location.search);

  const url = `http://localhost:4000/api/items?q=${search}`;

  const { data, loading } = useFetch(url);

  //state for handle the product to search
  const [, setproductToSearch] = useState(search);

  //limit to only 4 randoms products to show
  if (!loading) {
    //destruct props of the data, for get items and categories
    var { categories, items } = data;
    var productArrayToShow = [];

    /* A possible improvement in the future should be to implement a 
     pagination so as not to have conflicts with the repeated key prop in 
     the children component of the .map, because I use random elements in the array to show 
     -- I fix it concatenating the index of the (map Loop) to the product id as a key*/

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
            {productArrayToShow.map((product, index) => {
              return (
                <li key={product.id.concat(String(index))}>
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
