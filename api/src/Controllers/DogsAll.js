require("dotenv").config();
const axios = require("axios");
const { API_KEY, URL_API} = process.env;


const getdogsAll = async (req, res) => {
  try {
    const { data } = await axios.get(`${URL_API}?api_key=${API_KEY}`);
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
