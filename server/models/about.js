const mongoose = require("mongoose"); // import mongoose

const Schema = mongoose.Schema;

// Create the Schema for Mongoose that corresponds to that type we set in GraphQL
const aboutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("About", aboutSchema);
