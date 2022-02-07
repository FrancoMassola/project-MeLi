const axios = require("axios");
const jsonMapper = require("json-mapper-json");

//api MeLi request
const apiMeLiRequest = async (url = "") => {
  const apiMeliResponse = await axios.get(url);
  const dataFormatted = await formatResponse(apiMeliResponse);
};

const formatResponse = (apiMeliResponse) => {
  //filters - results -> (items)
  const { filters, results } = apiMeliResponse.data;

  //categories
  const { values } = filters.find((category) => category.id === "category");
  const categoryValues = values[0].path_from_root;

  //map to a new json response object
  jsonMapper(
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
          nickname: {
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
        //add the name of categories into a new array
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
              price,
              currency_id: currency,
              thumbnail,
              condition,
              shipping: { free_shipping },
            }) => {
              return {
                id,
                title,
                price: {
                  price,
                  currency,
                },
                picture: thumbnail,
                condition: condition,
                free_shipping,
              };
            }
          ),
      },
    }
  ).then((result) => {
    console.log(result);
  });
};

//export all the functions
module.exports = {
  apiMeLiRequest,
};
