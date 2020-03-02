const db = require("../db/index.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const routes = require("./routes/routes.js");
const path = require("path");

app.use(bodyParser.json());
app.use(express.static("client"));
app.use("/", routes);
app.get("*", function(req, res, next) {
  res.sendfile("index.html", { root: path.join(__dirname, "../client") });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
