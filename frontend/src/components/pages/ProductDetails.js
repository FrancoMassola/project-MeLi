import React from "react";
import { SearchBar } from "../shared/SearchBar";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { ProductDetailsCard } from "../details-product/ProductDetailsCard";
import { Categories } from "../shared/Categories";
import "../../styles/loading.css";
import "../../styles/cardsProductDetails.css";
// import { CategoriesContext } from "../shared/CategoriesContext";

export const ProductDetails = () => {
  //get the id param of a product
  const params = useParams();

  const url = `http://localhost:4000/api/items`;

  const { data, loading } = useFetch(url, params);

  //I use localstorage to handle the categories of nav bar -- other method for this shared information is using Context -- useContext as a consumer
  // const { categoriesContext, setCategoriesContext } = useContext(CategoriesContext);

  //to handle the pass of props
  if (!loading) {
    var { item } = data;
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
        <div className="detailsCategory">
          <div className=" categories-containerDetails">
            <div className="categories">
              <Categories
                categories={JSON.parse(localStorage.getItem("categories"))}
              />
            </div>
          </div>
          <ProductDetailsCard {...item} />
        </div>
      )}
    </>
  );
};
