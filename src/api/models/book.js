const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    publish_date: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    publisher: { type: String, required: true, trim: true },
    genres: [{ type: String, trim: true }],
    pages: { type: Number, required: true },
    synopsis: [{ type: String, required: true, trim: true }],
    summary: [{ type: String, required: true, trim: true }],
    cover: { type: String, required: true, trim: true },
    rating: { type: Number, required: true }
    
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("books", bookSchema, "books");
module.exports = Book;
