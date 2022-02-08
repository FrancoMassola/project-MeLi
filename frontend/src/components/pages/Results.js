import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/loading.css";

export const Results = () => {
  const location = useLocation();
  //se queryString to get and parse the value of query
  const { search = "" } = queryString.parse(location.search);

  const { data, loading } = useFetch(search);

  return (
    <div>

      {/* loading flag */}
      {loading ? (
        <div id="loading">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <ul>
          <li>ListOfItems</li>
        </ul>
      )}
    </div>
  );
};
