const { apiMeLiRequest } = require("../helpers/apiMeLi");

//define the function to search products
const searchProducts = (req, res) => {
  try {
    let productToSearch = req.query.q;
    let meliURL = `https://api.mercadolibre.com/sites/MLA/search?q=${productToSearch}`;
    apiMeLiRequest(meliURL);
  } catch (err) {}
};

//export all the functions
module.exports = {
  searchProducts,
};
