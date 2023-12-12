const express = require("express");
const app = express();
const port = 3200;

require("./boot");
require("./middlewares")(app);
require("./routes")(app);

// app.get("/user", (req, res) => {
//   User.findAll()
//     .then((result) => {
//       console.log(result);
//       res.json(result);
//     })
//     .catch((err) =>
//       res.json({
//         status: false,
//         message: err.message,
//       })
//     );
// });

// app.post("/user", (req, res) => {
//   User.create(req.body)
//     .then((result) => {
//       console.log(result);
//       res.json({
//         status: true,
//         ...req.body,
//       });
//     })
//     .catch((err) => res.json({ status: false, message: err.message }));
// });

module.exports = () => {
  app.listen(port, () => {
    console.log("app running on port", port);
    console.log(`http://localhost:${port}`);
  });
};
