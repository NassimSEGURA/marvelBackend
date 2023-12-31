require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const charactersRoutes = require("./routes/characterRoutes");
const comicsRoutes = require("./routes/comicRoutes");

app.use(cors({ origin: true }), charactersRoutes, comicsRoutes, express.json());

app.get("/", (req, res) => {
  return res.status(200).json("Welcome to Marvel API");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
