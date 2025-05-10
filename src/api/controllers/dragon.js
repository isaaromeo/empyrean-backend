const Dragon= require("../models/dragon");
// const Book = require("../models/book");
// const User = require("../models/user");
const mongoose = require("mongoose");

const getDragons = async (req, res, next) =>{
    try {
        const dragons = await Dragon.find();
        return res.status(200).json(dragons)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const getDragonByid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dragon = await Dragon.findById(id);
    return res.status(200).json(dragon);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getDragonByName = async (req, res, next) => {
  const { name } = req.params; 
  try {
    
    const dragon = await Dragon.find({
      name: { $eq: name },
    });
    if (dragon) {
      return res.status(200).json(dragon);
      
    } else {
      return res.status(400).json("No dragon by that name");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
    getDragons,
    getDragonByName
   
}