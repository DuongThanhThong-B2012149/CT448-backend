const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route
const contactRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

app.use("/api/contacts", contactRouter);

// Handle 404 response
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

app.use((error, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    message: error.message || "Internal Server Error",
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to contact book application",
  });
});

module.exports = app;
