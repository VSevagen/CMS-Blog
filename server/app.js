const express = require("express"); // import express
const bodyParser = require("body-parser"); // import body-parser
const graphqlHttp = require("express-graphql").graphqlHTTP; // import graphql to use as middleware
const { buildSchema } = require("graphql"); // import the function to build our schema
const mongoose = require("mongoose"); // impor the mongoose drivers
const Blog = require("./models/blog");
const About = require("./models/about");
const Project = require("./models/project");
const Login = require("./models/login");
const cors = require("cors");
require("dotenv").config();

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
            component: String!
        }

        type About {
          _id: ID!
          name: String!
          desc: String!
          email: String!
          skills: [String!]
        }

        type Project {
          _id: ID!
          title: String!
          desc: String!
          link: String!
          demolink: String!
        }

        type Login {
          _id: ID!
          username: String!
          password: String!
        }

        input BlogInput {
            title: String!
            text: String!
            description: String!
            date: String!
            component: String!
        }

        input AboutInput {
          name: String!
          desc: String!
          email: String!
          skills: [String!]
        }

        input ProjectInput {
          title: String!
          desc: String!
          link: String!
          demolink: String!
        }

        input LoginInput {
          username: String!
          password: String!
        }

        type blogQuery {
            blogs: [Blog!]!
            about: [About!]!
            projects: [Project!]!
            login: [Login!]!
        }

        type blogMutation {
            createBlog(blogInput: BlogInput): Blog
            createAbout(aboutInput: AboutInput): About
            createProject(projectInput: ProjectInput): Project
            createLogin(loginInput: LoginInput): Login
            removeBlog(id: ID!): Blog
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

      about: () => {
        return About.find()
          .then((about) => {
            return about;
          })
          .catch((err) => {
            throw err;
          });
      },

      projects: () => {
        return Project.find()
          .then((projects) => {
            return projects;
          })
          .catch((err) => {
            throw err;
          });
      },

      login: () => {
        return Login.find()
          .then((login) => {
            return login;
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
          component: args.blogInput.component,
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

      createLogin: (args) => {
        const login = new Login({
          username: args.loginInput.username,
          password: args.loginInput.password,
        });

        return login
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

      createProject: (args) => {
        const project = new Project({
          title: args.projectInput.title,
          desc: args.projectInput.desc,
          link: args.projectInput.link,
          demolink: args.projectInput.demolink,
        });

        return project
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

      removeBlog: (args) => {
        const removeUser = Blog.findByIdAndRemove(args.id).exec();
        if (!removeUser) {
          throw new Error("Error");
        }
        return removeUser;
      },

      createAbout: (args) => {
        const about = new About({
          name: args.aboutInput.name,
          desc: args.aboutInput.desc,
          email: args.aboutInput.email,
          skills: args.aboutInput.skills,
        });

        return about
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

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/graphql", function (req, res, next) {
  console.log("Graphql path");
});

app.use(cors(corsOptionsDelegate));
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}cluster0.q4vjy.mongodb.net/blogs?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Connected to db and server running at 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
