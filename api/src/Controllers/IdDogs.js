require("dotenv").config();
const Sequelize = require("sequelize");
const axios = require("axios");
const { API_KEY, URL_API } = process.env;
const { Dog, Temperament } = require("../db");


const getIDDogs = async (req, res) => {
  try {
    const { id } = req.params;
    const resultDogs = await axios.get(`${URL_API}?api_key=${API_KEY}`);
    const allDogs = resultDogs.data;
    const dogsMap = [];
    allDogs.forEach((dog) => {
      const newDog = {
        id: dog.id,
        name: dog.name,
        weight: dog.weight.imperial,
        height: dog.height.imperial,
        yearsLife: dog.yearsLife,
        image: dog.image.url,
        temperament: dog.temperament,
      };
      dogsMap.push(newDog);
    });

    const dogsApi = dogsMap.find((dog) => dog.id === Number(id));
    let resDb;

    if (!dogsApi) {
      const dogDb = await Dog.findByPk(id, {
        include: [
          {
            model: Temperament,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      });

      if (dogDb) {
        resDb = {
          id: dogDb.id,
          name: dogDb.name,
          weight: dogDb.weight,
          height: dogDb.height,
          yearsLife: dogDb.yearsLife,
          image: dogDb.image,
          temperaments: dogDb.temperaments.map((temp) => temp.name),
        };
      }
    }

    res.status(200).json(dogsApi || resDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getIDDogs;
