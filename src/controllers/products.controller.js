const {
  requestByProductName,
  requestByProductId,
} = require("../helpers/apiMeLi");

//define the function to search products
const searchProducts = async (req, res) => {
  try {
    let productToSearch = req.query.q;
    let meliURL = `https://api.mercadolibre.com/sites/MLA/search?q=${productToSearch}`;
    const responseMapped = await requestByProductName(meliURL);

    //error handler
    if (responseMapped.hasOwnProperty("errStatus")) {
      return res.status(400).send(responseMapped.errorDescription);
    }

    res.json(responseMapped);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//define the function to search the details of a product by id
const searchProductById = async (req, res) => {
  try {
    let idProductToSearch = req.params.id;
    let meliURL_id = `https://api.mercadolibre.com/items/${idProductToSearch}`;
    let meliURL_description = `https://api.mercadolibre.com/items/${idProductToSearch}/description`;
    const responseMapped = await requestByProductId(
      meliURL_id,
      meliURL_description
    );

    //error handler
    if (responseMapped.hasOwnProperty("errStatus")) {
      return res.status(400).send(responseMapped.errorDescription);
    }

    res.json(responseMapped);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

//export all the functions
module.exports = {
  searchProducts,
  searchProductById,
};
