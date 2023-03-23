"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var express = require('express');
var mongoose = require("mongoose");
var dotenv = require('dotenv');
var categorieRouter = require("./routes/categorie.route");
var scategorieRouter = require("./routes/scategorie.route");
var articleRouter = require("./routes/article.route");
var cors = require("cors");
dotenv.config();
var app = express();
app.use(cors());

//BodyParser Middleware
app.use(express.json());
mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Connexion à la base de données réussie");
})["catch"](function (err) {
  console.log('Impossible de se connecter à la base de données', err);
  process.exit();
});
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);
app.get("/", function (req, res) {
  res.send("bonjour");
});
app.listen(process.env.PORT, function () {
  console.log("Server is listening on port ".concat(process.env.PORT));
});
var _default = app;
exports["default"] = _default;
