require("dotenv").config();
const Sequelize = require("sequelize");
const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");


const postdogsAll= async (req, res) => {
    const { name, height, weight, yearsLife, image, temperaments } = req.body;
    try {
      const newDog = await Dog.create({
          image,
          name,
          height,
          weight,
          yearsLife
      })
      newDog.addTemperaments(temperaments);
      return res.status(200).json(newDog);
  } catch (error) {
      return res.status(500).json({error: error.message});
  }
  }
  module.exports = postdogsAll