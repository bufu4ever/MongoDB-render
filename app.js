const express = require("express");// חיבור לסיפריית אקפרס
const app = express();// יצירת אובייקט 
const hbs = require("express-handlebars").engine;
const moragan = require("morgan");//חיבור לסיפריית מורגן
//Debugging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(moragan("dev"));// הוספת שכבת מורגן
app.use(express.static("public"));

app.set("views", "./views");

app.engine("hbs", hbs({
  extname: "hbs",
  defaultView: "page",
  layoutsDir: __dirname + "/views/layouts/",
  partialsDir: __dirname + "/views/partials/",
}));
  


app.set("view engine", "hbs");

app.use(express.static("public"));
const Productrouter = require("./api/routes/product");
const mongoose = require("mongoose");// קישור לסיפריית מונו

mongoose.set("strictQuery", true);
const Conn_str = `mongodb+srv://shawnDB:bufu4ever@cluster0.lssdz12.mongodb.net/ecomdb`;
mongoose.connect(Conn_str);// פתיחת חיבור למונגו
app.use("/product", Productrouter);// הוספת שכבת ניתוב

app.get("/contact", (req, res) => {
  res.render("contact", { layout: "page" });
});
app.get("/gallery", (req, res) => {
  res.render("gallery", { layout: "page" });
});
app.get("/product", (req, res) => {
  res.render("product", { layout: "page" });
});



module.exports = app;
