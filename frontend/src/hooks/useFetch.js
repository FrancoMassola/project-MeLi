import React, { useEffect, useState, useRef } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetch = (productToSearch) => {
  const [state, setState] = useState({ data: {}, loading: true });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    const apiResponse = getProducts(productToSearch);
    apiResponse.then((productSearched) => [console.log(productSearched)]);
  }, [productToSearch]);
};
