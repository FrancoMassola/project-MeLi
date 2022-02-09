export const getProducts = async (url, params = "") => {
  //to get all the products searched
  if (window.location.pathname === "/items") {
    const apiUrl = url;
    const apiResponse = await fetch(apiUrl);
    const apiResponseJson = await apiResponse.json();
    return apiResponseJson;
  }
  //to get the details of one product
  if (window.location.pathname === `/items/${params.id}`) {
    const apiUrl = `${url}/${params.id}`;
    const apiResponse = await fetch(apiUrl);
    const apiResponseJson = await apiResponse.json();
    return apiResponseJson;
  }
};
