# Library Management REST API
A simple REST API for Library Management system using Node.js and Express.js and in-memory array as the data store

## Features

- Get all books
- Get a single book
- Add a new book
- Update a book
- Delete a book
- Filter books by category
- Filter books by availability
- Request validation
- Proper HTTP status codes
- Consistent error responses


## Tech Stack
 
- Node.js
- Express.js

## Structure


```text
Library Management System/

 src/
    controllers/
       bookController.js
    data/
       books.js
    routes/
       bookRoutes.js
    server.js

 gitignore
 package.json
 package-lock.json
 README.md
```

## How to run
  
  ## Install dependencies
    npm install
  ## Sart the server
    npm start 
    or, for auto restar on file change
    npm run dev
  ## The API will be available at
   http://localhost:3000

 The app starts pre-loaded with 5 sample books, so you can start testing immediately with no setup.


## List of implemented APIs
 Method             EndPoint                        Description
  GET               /books                          Get all books
  GET               /books/:id                      Get a single book
  POST              /books                          Add a new book
  PUT               /books/:id                      Upadate a book
  DELETE            /books/:id                      Delete a book
  GET               /books?category:Programming     Filter books by category
  GET               /books?available:true           Filter books by availability


## Example Request & Response
  
  Get All Book
  