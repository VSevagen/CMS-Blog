const express = require("express"); // import express
const bodyParser = require("body-parser"); // import body-parser
const graphqlHttp = require("express-graphql").graphqlHTTP; // import graphql to use as middleware
const { buildSchema } = require("graphql"); // import the function to build our schema
const mongoose = require("mongoose"); // impor the mongoose drivers
const Blog = require("./models/blog");
var cors = require("cors");

const app = express(); // create express server

var whitelist = ["http://localhost:3000", "http://localhost:5000/graphql"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(bodyParser.json()); // use body-parser middleware to parse incoming json

app.use(
  "/graphql",
  graphqlHttp({
    // set up our graphql endpoint with the express-graphql middleware
    // build a graphql schema
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
        // return all the blogs unfiltered using Model
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

        // save new blog using model which will save in MongoDB
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
    }, // an object with resolver functions
    graphiql: true, // enable the graphiql interface to test our queries
  })
);

app.get("/graphql", cors(corsOptions), function () {
  console.log("On the graphql location");
});

// connect to our MongoDB server.
mongoose
  .connect(
    "mongodb+srv://sevagen:V130499100084G@cluster0.q4vjy.mongodb.net/blogs?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Connected to db and server running at 5000");
    }); // setup server to run on port 5000
  })
  .catch((err) => {
    console.log(err);
  });
