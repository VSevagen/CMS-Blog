# Blog Content Management System

Decided to make a management system for my blogs since the process of creating a blog component, manually edit the overview page etc... was too much of a pain. This project currently supports all of the CRUD operations with GraphQL and provides a nice interface to carry out any of those operations.

## File/Directory breakdown

```
client
├── public
├── package-lock.json
|── package.json
|── yarn.lock
├── src
│ └── components
│ └── styles
| └── public

server
├── models
│ └── about
│ └── blog
| └── project
| └── login
├── app.js
├── Procfile
├── package.json
├── package-lock.json
```

#Page breakdown

## The Overview page

![Overview](/public/Overview.png)
The Overview page as the name suggests is where you'll find the collection of all your blogs.

## The Project page

![Project](/public/Project.png)
The project page is where you can showcase your projects

## The About page

![About](/public/About.png)
The about page is where you can have a small write-up about yourself

## The Admin page

![Admin](/public/Admin.png)
The Admin page is the where you can edit, delete or create your blogs and projects. You can edit your about page as well.

## The Login page

![Login](/public/Login.png)
The Login page is the route you must go through to access the admin section.

# CRUD Demo

This is a demo of how the admin section works.
![](/public/BlogDemo.gif)

# Usage

1. Clone the repo
2. Go to both of the directories(server and client) and install the required modules using <code>npm install</code>

- Note: If you're using npm 7, you might run into some issues. I would advise downgrading to 6.

3. After the above each directory should have a <code>node_modules</code> directory.
4. The usual next step would be <code>npm start</code>, however there are a few things to take care of. In the
   server directory, you'll find an <code>app.js</code> file with the connection string to MongoAtlas at the bottom, something like <code>mongodb+srv://</code>. If you do <code>npm start</code>, you'll run into an Authentication error because DB_USER and DB_PASS are not defined yet. Create a <code>.env</code> file as well as an account on mongoAtlas. Have your variabbles in the .env and start the server again.
5. If everything went alright, you should see a "Hello from Express" message on the default route. If you got to the <code>/graphql</code> route, it should show "Unauthorized". The reason for that is due to JWT. Every path expect "/" require an authorisation token to access the server. This is done to prevent access to potentially destructive action from the graphql interface. In order to gain access to it, include a <code>SUPER_SECRET</code> in your .env file. Then declare a token variable with the actual token. One other way of gaining access is to comment out the middleware that takes care of verifying, <code>app.use(verifyToken.unless({ path: ["/"] }));</code>

- <strong>NOTE: THIS IS DONE ONLY TO GAIN ACCESS TO THE SERVER DURING DEVELOPMENT PHASE. IN NO WAY SHOULD YOU PUSH SUCH CHANGES TO GITHUB.</strong>

6. Once you got access to it, you can start feeding data to your database.
7. After getting the data ready, you can start the client. It should work if you keep the middleware for token verifying commented until you setup your secret. Once you've done that, you need to include the token as an authorisation header for ApolloClient in client in <code>App.js</code>. You'll see <code>REACT_APP_JWT_ACCESS_TOKEN</code> somewhere in that file. Have a .env and add the token there. Then you can uncomment the middleware in server.
