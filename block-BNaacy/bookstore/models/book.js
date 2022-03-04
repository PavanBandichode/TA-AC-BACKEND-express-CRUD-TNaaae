let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    description: { type: String },
    price: Number,
    author: String,
    tittle: String,
  },
  { timestamps: true }
);

let User = mongoose.model("User", userSchema);

module.exports = User;
