import { useEffect, useState, useRef } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetch = (url = "", params = "") => {
  const [state, setState] = useState({ data: {}, loading: true });

  //to handle the component dismount and the setState
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    const apiResponse = getProducts(url, params);
    //this validation is in case that the component will be dismount before to setState
    if (isMounted.current) {
      apiResponse.then((dataSearched) =>
        setState({
          data: dataSearched,
          loading: false,
        })
      );
    }
  }, [url]);

  return state;
};
