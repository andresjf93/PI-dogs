require("dotenv").config();
const { Dog, Temperament } = require("../db");


const postdogsAll= async (req, res) => {
    try {
        const { name, height, weight, life_span, image, temperament } = req.body;

      const newDog = await Dog.create({
          image,
          name,
          height,
          weight,
          life_span,
          temperament
      })
      const tempi = temperament.split(",")
      const tempEncontrado =  await Temperament.findAll({where: {
          name: tempi
        }})
        console.log(tempEncontrado)
      await newDog.addTemperament(tempEncontrado.map(temp => temp.id));
      return res.status(200).json(newDog);
  } catch (error) {
      return res.status(500).json({error: error.message});
       }
  }
  module.exports = postdogsAll