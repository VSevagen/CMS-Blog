const express = require("express"); // import express
const bodyParser = require("body-parser"); // import body-parser
const graphqlHttp = require("express-graphql").graphqlHTTP; // import graphql to use as middleware
const { buildSchema } = require("graphql"); // import the function to build our schema
const mongoose = require("mongoose"); // impor the mongoose drivers
const Blog = require("./models/blog");
const cors = require("cors");

const app = express(); // create express server
app.options("*", cors());
app.use(bodyParser.json()); // use body-parser middleware to parse incoming json

app.use(
  "/graphql",
  graphqlHttp({
    schema: buildSchema(`
        type Blog {
            _id: ID!
            title: String!
            text: String!
            description: String!
            date: String!
        }

        input BlogInput {
            title: String!
            text: String!
            description: String!
            date: String!
        }


        type blogQuery {
            blogs: [Blog!]!
        }

        type blogMutation {
            createBlog(blogInput: BlogInput): Blog
        }

        schema {
            query: blogQuery
            mutation: blogMutation
        }
    `),
    rootValue: {
      blogs: () => {
        return Blog.find()
          .then((blogs) => {
            return blogs;
          })
          .catch((err) => {
            throw err;
          });
      },
      createBlog: (args) => {
        const blog = new Blog({
          title: args.blogInput.title,
          text: args.blogInput.text,
          description: args.blogInput.description,
          date: args.blogInput.date,
        });

        return blog
          .save()
          .then((result) => {
            console.log(result);
            return result;
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
      },
    },
    graphiql: true,
  })
);

var allowlist = ["http://localhost:3000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.get("/graphql", function (req, res, next) {
  console.log("Graphql path");
});

app.use(cors(corsOptionsDelegate));
mongoose
  .connect(
    "mongodb+srv://sevagen:V130499100084G@cluster0.q4vjy.mongodb.net/blogs?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Connected to db and server running at 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
