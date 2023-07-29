const { Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds`;

const getTemperaments = async (req,res)=> {
  try {
      const response = await axios(`${URL}?api_key=${API_KEY}`);
      const dogs = response.data;
      const temperaments = dogs.map( element => element.temperament );
      temperaments.forEach( element => {
          if(element) {
              let temperamentArray = element.split(",")
              temperamentArray.forEach( temperament => {
                  Temperament.findOrCreate({
                      where: {
                          name: temperament.trim()
                      }
                  })
              });
          }
      });
      const allTemperament = await Temperament.findAll();
      return res.status(200).json(allTemperament);
  } catch (error) {
      return res.status(500).json({error: error.message})
  }
}

module.exports = getTemperaments;