const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const urlSchema = new Schema({
  url: {
    type: String,
    required: true,
    trim: true,
  },
  customSuffix: {
    type: String,
    trim: true,
    unique: true,
    sparse: true,
    minlength:1
  },
});

module.exports = mongoose.model("url", urlSchema);
