require("dotenv").config();
const Sequelize = require("sequelize");
const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");

const URL = `https://api.thedogapi.com/v1/breeds`;

  
const getNameDogs= async (req, res) => {
  try {
    const { name } = req.query;

    const allDogs = await axios.get(`${URL}`);
    const dogsApi = allDogs.data.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));

    const dbDogs = await Dog.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },  
      include: Temperament
    });

    const dogsMap = [];
    
    dogsApi.forEach((dogR) => {
      const dogNews = {
        id: dogR.id,
        name: dogR.name,
        weight: dogR.weight.imperial,
        height: dogR.height.imperial,
        life_span: dogR.life_span,
        temperament: dogR.temperament,
        image: dogR.image.url
      };
      dogsMap.push(dogNews);
    });

    dbDogs.forEach((dbDog) => {
      const dbDogData = {
        id: dbDog.id,
        name: dbDog.name,
        weight: dbDog.weight,
        height: dbDog.height,
        life_span: dbDog.life_span,
        temperament: dbDog.temperaments.map((temp) => temp.name).join(', '),
        image: dbDog.image
      };
      dogsMap.push(dbDogData);
    });

    if (dogsMap.length > 0) {
      res.status(STATUS_OK).json(dogsMap);
    } else {
      res.status(STATUS_ERROR).json({ message: 'No se encontró una raza de perro con el nombre especificado.' });
    }
  } catch (error) {
    res.status(STATUS_ERROR).json({ error: error.message});
}
}
  module.exports = getNameDogs


