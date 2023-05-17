const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db.js");
const port = process.env.PORT || 5000;
const detailController = require("./controllers/detailController");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/names", require("./routes/nameRoutes"));
app.use("/api/details", require("./routes/detailRoutes"));

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler); //will override express's default error handler (HTML)

app.listen(port, () => console.log(`Server started on port ${port}`));
