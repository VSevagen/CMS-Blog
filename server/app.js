const express = require("express"); // import express
const bodyParser = require("body-parser"); // import body-parser
const graphqlHttp = require("express-graphql").graphqlHTTP; // import graphql to use as middleware
const { buildSchema } = require("graphql"); // import the function to build our schema
const mongoose = require("mongoose"); // impor the mongoose drivers
const expressJwt = require("express-jwt");
const path = require("path");
const unless = require("express-unless");
const jwt = require("jsonwebtoken");
const Blog = require("./models/blog");
const About = require("./models/about");
const Project = require("./models/project");
const Login = require("./models/login");
const cors = require("cors");
require("dotenv").config();

const app = express(); // create express server
app.use(bodyParser.json()); // use body-parser middleware to parse incoming json

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS,PATCH, DELETE, PUT"
  );
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

const verifyToken = (req, res, next) => {
  jwt.verify(
    req.headers.authorization,
    process.env.SUPER_SECRET,
    (err, decoded) => {
      if (err) {
        return res.send(401);
      }
      next();
    }
  );
};
verifyToken.unless = unless;

app.use(verifyToken.unless({ path: ["/"] }));

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

        input UpdateInput {
          title: String!
          description: String!
          text: String!
        }

        type blogQuery {
            blogs: [Blog!]!
            about: [About!]!
            projects: [Project!]!
            login: [Login!]!
            blogById(id: ID!):Blog
        }

        type blogMutation {
            createBlog(blogInput: BlogInput): Blog
            createAbout(aboutInput: AboutInput): About
            createProject(projectInput: ProjectInput): Project
            createLogin(loginInput: LoginInput): Login
            removeBlog(id: ID!): Blog
            updateBlog(id: ID!, title: String!, description: String!, text: String!):Blog
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

      blogById: (args) => {
        const findblog = Blog.findById(args.id).exec();
        if (!findblog) {
          throw new Error("Error");
        }
        return findblog;
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

      updateBlog: (args) => {
        const updateContent = Blog.findByIdAndUpdate(args.id, {
          title: args.title,
          description: args.description,
          text: args.text,
        }).exec();
        if (!updateContent) {
          throw new Error("Error");
        }
        console.log(updateContent);
        return updateContent;
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

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q4vjy.mongodb.net/blogs?retryWrites=true&w=majority`,
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
