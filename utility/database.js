const mongoose = require("mongoose");

const url =
  "mongodb+srv://viwil10372:Hcmb9AIzaKaOWShA@cluster0.npkjz.mongodb.net/urldb?retryWrites=true&w=majority";
const db = mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

// module.exports = new Promise(db);
module.exports = db;
