//require app module
const app = require("../src/app");

//set port
app.listen(app.get("port"));

console.log(`Server on port" ${app.get("port")}`);
