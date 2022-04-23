const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const urlSchema = new Schema({
  url: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("url", urlSchema);
