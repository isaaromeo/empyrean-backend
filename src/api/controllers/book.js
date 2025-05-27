const Book= require("../models/book");

const mongoose = require("mongoose");

const getBooks = async (req, res, next) =>{
    try {
        const books = await Book.find();
        return res.status(200).json(books)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const getBookByid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getBookByName = async (req, res, next) => {
  const { name } = req.params;  
  try {
    
    const book = await Book.find({
      name: { $eq: name },
    });
    if (book) {
      return res.status(200).json(book);
      
    } else {
      return res.status(400).json("No book by that name");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
    getBooks,
    getBookByName,
    getBookByid
   
}