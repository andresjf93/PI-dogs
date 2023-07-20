require("dotenv").config();
const Sequelize = require("sequelize");
const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");


const URL = `https://api.thedogapi.com/v1/breeds`;


const getdogsAll=  async (req, res) => {
    try {
      const response = await axios.get(`${URL}`);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  module.exports = getdogsAll

