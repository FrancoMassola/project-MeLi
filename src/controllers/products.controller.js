const { apiMeLiRequest } = require("../helpers/apiMeLi");

//define the function to search products
const searchProducts = async (req, res) => {
  try {
    let productToSearch = req.query.q;
    let meliURL = `https://api.mercadolibre.com/sites/MLA/search?q=${productToSearch}`;
    const responseMapped = await apiMeLiRequest(meliURL);
    res.json(responseMapped);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

//export all the functions
module.exports = {
  searchProducts,
};
