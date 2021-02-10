const mongoose = require("mongoose"); // import mongoose

const Schema = mongoose.Schema;

// Create the Schema for Mongoose that corresponds to that type we set in GraphQL
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  demolink: {
    type: String,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
