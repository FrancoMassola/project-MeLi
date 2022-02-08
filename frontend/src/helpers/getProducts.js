export const getProducts = async (productToSearch) => {
  const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${productToSearch}`;
  const apiResponse = await fetch(apiUrl);
  const apiResponseJson = await apiResponse.json();

  return apiResponseJson;
};
