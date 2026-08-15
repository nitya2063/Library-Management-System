const express = require("express");

const bookRoutes = require("./routes/bookRoutes");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/books", bookRoutes);

// Root route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Library Management REST API is running"
    });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
        statusCode: 404
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});