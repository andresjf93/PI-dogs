require("dotenv").config();
const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const getdogsAll = require("../Controllers/DogsAll")
const getIDDogs = require('../Controllers/IdDogs');
const getNameDogs = require('../Controllers/nameDogs');
const postdogsAll = require('../Controllers/createDog');

const router = Router();

//! RUTA PARA OBTENER TODOS LOS PERROS DESDE LA API
router.get("/", getdogsAll)
//! RUTA PARA OBTENER PERROS POR NAME
router.get("/name", getNameDogs)
//! RUTA PARA PERRO POR ID
router.get("/:idRaza", getIDDogs)
//! RUTA PARA CREAR PERROS
router.post("/", postdogsAll);
/*
router.post("/dogs", async (req, res) => {
  const { name, height, weight, yearsLife, image, temperaments } = req.body;
  try {
    const newDog = await Dog.create({
        image,
        name,
        height,
        weight,
        yearsLife
    })
    newDog.addTemperaments(temperaments);
    return res.status(200).json(newDog);
} catch (error) {
    return res.status(500).json({error: error.message});
}
})*/
module.exports = router;
