const express = require("express");

const urlRoute = require("./routes/url");
const visitUrlRoute = require("./routes/visit-url");

const db = require("./utility/database");

const app = express();

app.use(express.json());

app.use("/api", urlRoute);

app.use(visitUrlRoute);

db.then(() =>
  app.listen(3000, (err) => {
    console.log("Server is running on port 3000");
  })
).catch((err) => console.log(err));
