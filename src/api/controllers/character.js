const Character= require("../models/character");
// const Book = require("../models/book");
// const User = require("../models/user");
const mongoose = require("mongoose");

const getCharacters = async (req, res, next) =>{
    try {
        const characters = await Character.find();
        return res.status(200).json(characters)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const getCharacterByid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const character = await Character.findById(id);
    return res.status(200).json(character);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getCharacterByName = async (req, res, next) => {
  const { name } = req.params;  
  try {
    
    const character = await Character.find({
      name: { $eq: name },
    });
    if (character) {
      return res.status(200).json(character);
      
    } else {
      return res.status(400).json("No character by that name");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
    getCharacters,
    getCharacterByName
   
}