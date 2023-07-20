require("dotenv").config();
const Sequelize = require("sequelize");
const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");

const URL = `https://api.thedogapi.com/v1/breeds`;

  
const getNameDogs= async (req, res) => {
    const { name } = req.query;
    try {
      const response = await axios.get(
        `${URL}/search?q=${name}&${API_KEY}`
      );
      const apiDogs = response.data;
      if (apiDogs.length > 0) {
        res.status(200).json(apiDogs);
      } else {
        res
          .status(404)
          .json({ error: "No se encontraron razas de perros con ese nombre" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  module.exports = getNameDogs


