const db = require("../db/index.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const path = require("path");
const routes = require("./routes/routes.js");

console.log(port);

app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "../client")));

app.use("/", routes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
