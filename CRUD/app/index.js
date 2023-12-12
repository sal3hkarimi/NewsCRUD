const express = require("express");
const app = express();
const port = 3200;

require("./boot");
require("./middlewares")(app);
require("./routes")(app);

module.exports = () => {
  app.listen(port, () => {
    console.log("app running on port", port);
    console.log(`http://localhost:${port}`);
  });
};
