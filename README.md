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
## 1. GET `/books` — Get All Books

### Request

```http
GET http://localhost:3000/books
```

### Response — `200 OK`

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "category": "Fiction",
    "available": true
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "isbn": "978-0-06-112008-4",
    "category": "Fiction",
    "available": false
  },
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "isbn": "978-0-452-28423-4",
    "category": "Dystopian Fiction",
    "available": true
  },
  {
    "id": 4,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "isbn": "978-0-14-143951-8",
    "category": "Romance",
    "available": false
  },
  {
    "id": 5,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "isbn": "978-0-316-76948-0",
    "category": "Fiction",
    "available": true
  }
]
```

---

## 2. GET `/books/:id` — Get a Single Book

### Request

```http
GET http://localhost:3000/books/1
```

### Response — `200 OK`

```json
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "978-0-7432-7356-5",
  "category": "Fiction",
  "available": true
}
```

### If the book does not exist — `404 Not Found`

```json
{
  "message": "Book not found",
  "statusCode": 404
}
```

---

## 3. POST `/books` — Add a New Book

### Request

```http
POST http://localhost:3000/books
Content-Type: application/json
```

### Request Body

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "isbn": "978-0-13-235088-4",
  "category": "Programming",
  "available": true
}
```

### Response - `201 Created`

```json
{
  "id": 6,
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "isbn": "978-0-13-235088-4",
  "category": "Programming",
  "available": true
}
```


### If required fields are missing — `400 Bad Request`

```json
{
  "message": "title, author, isbn, category and available are required",
  "statusCode": 400
}
```

### If `available` is not a boolean — `400 Bad Request`

```json
{
  "message": "available must be a boolean",
  "statusCode": 400
}
```

---

## 4. PUT `/books/:id` — Update a Book

### Request

```http
PUT http://localhost:3000/books/6
Content-Type: application/json
```

### Request Body

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "isbn": "978-0-13-235088-4",
  "category": "Programming",
  "available": false
}
```

### Response — `200 OK`

```json
{
  "id": 6,
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "isbn": "978-0-13-235088-4",
  "category": "Programming",
  "available": false
}
```

### If the book does not exist — `404 Not Found`

```json
{
  "message": "Book not found",
  "statusCode": 404
}
```

---

## 5. DELETE `/books/:id` — Delete a Book

### Request

```http
DELETE http://localhost:3000/books/6
```

### Response — `204 No Content`

The book is deleted successfully. The API returns no response body.

### If the book does not exist — `404 Not Found`

```json
{
  "message": "Book not found",
  "statusCode": 404
}
```

---

## 6. GET `/books?category=Fiction` — Filter by Category

### Request

```http
GET http://localhost:3000/books?category=Fiction
```

### Response — `200 OK`

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "category": "Fiction",
    "available": true
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "isbn": "978-0-06-112008-4",
    "category": "Fiction",
    "available": false
  },
  {
    "id": 5,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "isbn": "978-0-316-76948-0",
    "category": "Fiction",
    "available": true
  }
]
```

The category filter is case-insensitive, so `fiction` and `Fiction` produce the same result.

---

## 7. GET `/books?available=true` — Filter by Availability

### Request

```http
GET http://localhost:3000/books?available=true
```

### Response — `200 OK`

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "category": "Fiction",
    "available": true
  },
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "isbn": "978-0-452-28423-4",
    "category": "Dystopian Fiction",
    "available": true
  },
  {
    "id": 5,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "isbn": "978-0-316-76948-0",
    "category": "Fiction",
    "available": true
  }
]
```

### Invalid availability value — `400 Bad Request`

For example:

```http
GET http://localhost:3000/books?available=yes
```

Response:

```json
{
  "message": "available must be true or false",
  "statusCode": 400
}
```

---

## 8. GET `/books?category=Fiction&available=true` — Combined Filters

### Request

```http
GET http://localhost:3000/books?category=Fiction&available=true
```

### Response — `200 OK`

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "category": "Fiction",
    "available": true
  },
  {
    "id": 5,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "isbn": "978-0-316-76948-0",
    "category": "Fiction",
    "available": true
  }
]
```
