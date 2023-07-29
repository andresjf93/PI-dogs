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
router.get("/:id", getIDDogs)
//! RUTA PARA CREAR PERROS
router.post("/", postdogsAll);

module.exports = router;
