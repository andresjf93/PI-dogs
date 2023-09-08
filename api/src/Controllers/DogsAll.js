require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds`;

const getdogsAll = async (req, res) => {
  try {
    const { data } = await axios.get(`${URL}?api_key=${API_KEY}`);
    const dogsAllApi = [];
    data.forEach((dogA) => {
      const dogApi = {
        id: dogA.id,
        name: dogA.name,
        image: dogA.image.url,
        temperament: dogA.temperament,
        weight: dogA.weight.metric,
        height: dogA.height.metric,
        life_span: dogA.life_span,
      };dogsAllApi.push(dogApi);
    });
        res.status(200).json(dogsAllApi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getdogsAll;
