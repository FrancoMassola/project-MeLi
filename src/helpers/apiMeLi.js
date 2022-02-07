const axios = require("axios");
const jsonMapper = require("json-mapper-json");

//api MeLi request
const apiMeLiRequest = async (url = "") => {
  const apiMeliResponse = await axios.get(url);
  const dataFormatted = await formatResponse(apiMeliResponse);
  
};

const formatResponse = (apiMeliResponse) => {
  const { filters } = apiMeliResponse.data;

  //categories
  const { values } = filters.find((category) => category.id === "category");
  const categoryValues = values[0].path_from_root;
  const categoriesFormatted = formatCategories(categoryValues);

  //map to a new json response object
  jsonMapper(
    {
      root: {
        author: {
          name: "Franco",
          lastname: "Massola",
        },
        categories: categoriesFormatted,
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
        path: "root.categories",
        type: String,
      },
    }
  ).then((result) => {
    console.log(result);
  });
};

//add the categories name into a new array
const formatCategories = (categoriesArray) => {
  const categoriesFormatted = categoriesArray.map((category) => category.name);
  return categoriesFormatted;
};

//export all the functions
module.exports = {
  apiMeLiRequest,
};
