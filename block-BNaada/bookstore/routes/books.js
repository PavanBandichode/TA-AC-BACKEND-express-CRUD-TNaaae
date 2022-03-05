let express = require("express");
let router = express.Router();
let Book = require("../models/book");

router.get("/", (req, res) => {
  Book.find({}, (err, books) => {
    console.log(err, books);
    if (err) {
      return next(err);
    }
    res.render("books", { books: books });
  });
});

router.get("/new", (req, res) => {
  res.render("addBook");
});

router.post("/", (req, res, next) => {
  Book.create(req.body, (err, createdBook) => {
    if (err) {
      return next(err);
    }
    res.redirect("/books");
  });
});

module.exports = router;
