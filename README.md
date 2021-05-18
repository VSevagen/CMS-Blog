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
The Admin page is the where you can edit, delete or create your blogs.

## The Login page

![Login](/public/Login.png)
The Login page is the route you must go through to access the admin section.

# CRUD Demo

This is a demo of how the admin section works.
![](/public/BlogDemo.gif)
