const express = require("express");
const hbs = require("express-handlebars");
const { engine } = require("express-handlebars");

const usersData = require("./database/users");
const carsData = require("./database/cars");

const app = express();

app.engine(".hbs", engine({ defaultLayout: false }));
app.set("view engine", ".hbs");
app.set("views", "./static");

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/users", (req, res) => {
  res.render("users", { usersData });
});

app.get("/users/:userID", (req, res) => {
  const { userID } = req.params;
  res.json(usersData[userID]);
});

app.get("/cars", (req, res) => {
  res.render("cars", { carsData });
});

app.get("/cars/:carID", (req, res) => {
  const { carID } = req.params;
  res.json(carsData[carID]);
});

app.listen(5000, () => {
  console.log("App in running on port 5000");
});