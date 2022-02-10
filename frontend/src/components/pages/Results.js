import React from "react";
import { SearchBar } from "../shared/SearchBar";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../results-product/ProductCard";
import { Categories } from "../shared/Categories";
import "../../styles/loading.css";
import "../../styles/cards.css";
import "../../styles/categories.css";
// import { CategoriesContext } from "../shared/CategoriesContext";

export const Results = () => {
  //get the data of query string - url
  const location = useLocation();
  //use queryString to get and parse the value of query
  const { search = "" } = queryString.parse(location.search);

  const url = `http://localhost:4000/api/items?q=${search}`;

  const { data, loading } = useFetch(url);

  //I use localstorage to handle the categories of nav bar -- other method for this shared information is using Context -- useContext as a consumer
  // const { categoriesContext, setCategoriesContext } = useContext(CategoriesContext);

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
    localStorage.setItem("categories", JSON.stringify(categories));
  }

  return (
    <>
      <SearchBar />
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
              <Categories
                categories={JSON.parse(localStorage.getItem("categories"))}
              />
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
