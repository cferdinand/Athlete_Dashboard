const db = require("../db/index.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const path = require("path");
const routes = require("./routes/routes.js");

app.use(bodyParser.json());
app.use(express.static("client"));

app.use("/", routes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
