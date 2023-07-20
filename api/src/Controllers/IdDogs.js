require("dotenv").config();
const Sequelize = require("sequelize");
const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");

const URL = `https://api.thedogapi.com/v1/breeds`;


const getIDDogs = async (req, res) => {
    const { idRaza } = req.params;
    try {
      const apiDog = await axios.get(`${URL}/${idRaza}`
      );
  
      const dog = apiDog.data;
      if (dog) {
        res.status(200).json(dog);
      } else {
        res.status(404).json({ error: "Raza no encontrada" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  module.exports = getIDDogs