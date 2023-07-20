require('dotenv').config();
const { Router } = require("express");
const Sequelize = require("sequelize");
const axios = require("axios");
const { API_KEY } = process.env;
const {Temperament} = require("../db");

const router = Router();

router.get("/temperaments", async (req, res) => {
  try {
    const temperamentsApi = await axios.get('https://api.thedogapi.com/v1/breeds');
    const temperaments = temperamentsApi.data.map((breed) => breed.temperament);
    await Promise.all(temperaments.map((temperament) => Temperament.create({ nombre: temperament })));
    res.status(200).json({ message: "Temperamentos obtenidos y guardados exitosamente en la base de datos." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
