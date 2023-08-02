require("dotenv").config();
const { Dog, Temperament } = require("../db");

const postdogsAll = async (req, res) => {
  try {
    const { name, height, weight, life_span, image, temperament } = req.body;
    const newDog = await Dog.create({
      image,
      name,
      height,
      weight,
      life_span,
      });

    const tempEncontrado = await Temperament.findAll();
    const tempes = tempEncontrado.filter((tempi) =>
    temperament.includes(tempi.name)
  );
  await newDog.addTemperament(tempes);
    const tempsDog = (await newDog.getTemperaments()).map(tempe =>tempe.name).join(", ")
    return res.status(200).json({...newDog.dataValues, temperament:tempsDog});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = postdogsAll;
