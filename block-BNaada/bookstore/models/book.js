let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let bookSchema = new Schema(
  {
    tittle: String,
    description: { type: String },
    price: Number,
    author: String,
  },
  { timestamps: true }
);

let Book = mongoose.model("Book", bookSchema);

module.exports = Book;
