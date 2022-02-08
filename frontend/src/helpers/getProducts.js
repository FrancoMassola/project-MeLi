export const getProducts = async (productToSearch) => {
  const apiUrl = `http://localhost:4000/api/items?q=${productToSearch}`;
  const apiResponse = await fetch(apiUrl);
  const apiResponseJson = await apiResponse.json();

  return apiResponseJson;
};
