const books = require("../data/books");

// GET /books
const getAllBooks = (req, res) => {
    let result = books;

    const { category, available } = req.query;

    // Filter by category
    if (category) {
        result = result.filter(
            book => book.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Filter by availability
    if (available !== undefined) {
        if (available !== "true" && available !== "false") {
            return res.status(400).json({
                message: "available must be true or false",
                statusCode: 400
            });
        }

        const isAvailable = available === "true";

        result = result.filter(
            book => book.available === isAvailable
        );
    }

    res.status(200).json(result);
};


// GET /books/:id
const getBookById = (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found",
            statusCode: 404
        });
    }

    res.status(200).json(book);
};


// POST /books
const createBook = (req, res) => {
    const { title, author, isbn, category, available } = req.body;

    // Validation
    if (!title || !author || !isbn || !category || available === undefined) {
        return res.status(400).json({
            message: "title, author, isbn, category and available are required",
            statusCode: 400
        });
    }

    if (typeof available !== "boolean") {
        return res.status(400).json({
            message: "available must be a boolean",
            statusCode: 400
        });
    }

    const newBook = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
        title,
        author,
        isbn,
        category,
        available
    };

    books.push(newBook);

    res.status(201).json(newBook);
};


// PUT /books/:id
const updateBook = (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found",
            statusCode: 404
        });
    }

    const { title, author, isbn, category, available } = req.body;

    // Validation
    if (!title || !author || !isbn || !category || available === undefined) {
        return res.status(400).json({
            message: "title, author, isbn, category and available are required",
            statusCode: 400
        });
    }

    if (typeof available !== "boolean") {
        return res.status(400).json({
            message: "available must be a boolean",
            statusCode: 400
        });
    }

    book.title = title;
    book.author = author;
    book.isbn = isbn;
    book.category = category;
    book.available = available;

    res.status(200).json(book);
};


// DELETE /books/:id
const deleteBook = (req, res) => {
    const id = Number(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found",
            statusCode: 404
        });
    }

    books.splice(index, 1);

    res.status(204).send();
};


module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};