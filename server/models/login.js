const mongoose = require("mongoose"); // import mongoose

const Schema = mongoose.Schema;

// Create the Schema for Mongoose that corresponds to that type we set in GraphQL
const loginSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Login", loginSchema);
