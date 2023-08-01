require('dotenv').config();
const { Router } = require("express");
const Sequelize = require("sequelize");
const axios = require("axios");
const { API_KEY } = process.env;
const {temperament} = require("../db");
const getTemperaments = require("../Controllers/getTemperament");

const router = Router();



//! RUTA PARA OBTENER TEMPERAMENTS Y GUARDARLOS A SU VEZ EN LA BD
router.get("/", getTemperaments);

module.exports = router;
