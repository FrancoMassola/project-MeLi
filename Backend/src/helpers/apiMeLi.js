const axios = require("axios");
const jsonMapper = require("json-mapper-json");

//api MeLi request - search items by name
const requestByProductName = async (url = "") => {
  const apiMeliResponse = await axios.get(url);
  //error handler
  try {
    const responseMapped = await formatResponse_searchByName(apiMeliResponse);
    if (Object.entries(responseMapped).length === 0) {
      throw "data not exist";
    }
    return responseMapped;
  } catch (err) {
    return {
      errorDescription: err,
      errStatus: true,
    };
  }
};

//api MeLi request - search items by id for details
const requestByProductId = async (url_id = "", url_details = "") => {
  const apiMeliResponse_id = await axios.get(url_id);
  const apiMeliResponse_details = await axios.get(url_details);
  //error handler
  try {
    const responseMapped = await formatResponse_searchById(
      apiMeliResponse_id,
      apiMeliResponse_details
    );
    return responseMapped;
  } catch (err) {
    return {
      errorDescription: err,
      errStatus: true,
    };
  }
};

//Mappers
const formatResponse_searchByName = (apiMeliResponse) => {
  //filters - results -> (items)
  const { filters, results } = apiMeliResponse.data;
  if (filters.length !== 0 && results.length !== 0) {
    //categories
    const { values } = filters.find((category) => category.id === "category");
    const categoryValues = values[0].path_from_root;

    //map to a new json response object
    return jsonMapper(
      {
        root: {
          author: {
            name: "Franco",
            lastname: "Massola",
          },
          categories: categoryValues,
          items: results,
        },
      },
      {
        author: {
          path: "root.author",
          nested: {
            name: {
              path: "name",
              type: String,
            },
            lastname: {
              path: "lastname",
              type: String,
            },
          },
        },
        categories: {
          //add the name of categories into a new string array
          path: "root.categories",
          type: Array[String],
          formatting: (categoryValues) => {
            return categoryValues.map((category) => category.name);
          },
        },
        items: {
          //format the items Array with all the items into a new object structure
          path: "root.items",
          type: Array,
          formatting: (arrayItemsValues) =>
            arrayItemsValues.map(
              ({
                id,
                title,
                price: amount,
                currency_id: currency,
                thumbnail: picture,
                condition,
                shipping: { free_shipping },
              }) => {
                return {
                  id,
                  title,
                  price: {
                    amount,
                    currency,
                    decimals: getDecimalsOfPrice(amount),
                  },
                  picture,
                  condition,
                  free_shipping,
                };
              }
            ),
        },
      }
    );
  } else {
    throw "error setting filters";
  }
};

const formatResponse_searchById = (
  apiMeliResponse_id,
  apiMeliResponse_details
) => {
  const {
    id,
    title,
    price: amount,
    currency_id: currency,
    thumbnail: picture,
    condition,
    shipping: { free_shipping },
    sold_quantity,
  } = apiMeliResponse_id.data;
  const { plain_text: description } = apiMeliResponse_details.data;

  if (
    Object.entries(apiMeliResponse_details.data).length !== 0 &&
    Object.entries(apiMeliResponse_id.data).length !== 0
  ) {
    //map the details of one product to a new object
    return jsonMapper(
      {
        root: {
          author: {
            name: "Franco",
            lastname: "Massola",
          },
          item: {
            id,
            title,
            price: {
              currency,
              amount,
              decimals: getDecimalsOfPrice(amount),
            },
            picture,
            condition,
            free_shipping,
            sold_quantity,
            description,
          },
        },
      },
      {
        author: {
          path: "root.author",
          nested: {
            name: {
              path: "name",
              type: String,
            },
            lastname: {
              path: "lastname",
              type: String,
            },
          },
        },
        item: {
          path: "root.item",
          nested: {
            id: { path: "id", type: String },
            title: { path: "title", type: String },
            currency: { path: "price.currency", type: Number },
            amount: { path: "price.amount", type: Number },
            decimals: { path: "price.decimals", type: Number },
            picture: { path: "picture", type: String },
            condition: { path: "condition", type: String },
            free_shipping: { path: "free_shipping", type: Boolean },
            sold_quantity: { path: "sold_quantity", type: String },
            description: { path: "description", type: String },
          },
        },
      }
    );
  } else {
    throw "error setting product id";
  }
};

const getDecimalsOfPrice = (amount) => {
  if (String(amount).includes(".")) {
    let decPart = (String(amount) + "").split(".")[1];
    return parseInt(decPart);
  } else {
    return 0;
  }
};

//export all the functions
module.exports = {
  requestByProductName,
  requestByProductId,
};
