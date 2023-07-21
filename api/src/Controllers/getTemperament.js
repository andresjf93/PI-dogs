const { Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds`;

const getTemperaments = async (req, res) => {
  const temperamentsApi = await axios.get(`${URL}?api_key=${API_KEY}`);
  const temperaments = temperamentsApi.data.map((t) => t.temperament);
  const temps = temperaments.toString().split(",");
  temps.forEach((el) => {
    let i = el.trim();
    Temperament.findOrCreate({
      where: { name: i },
    });
  });

  const allTemp = await Temperament.findAll();
  res.send(allTemp);
};
module.exports = getTemperaments;
