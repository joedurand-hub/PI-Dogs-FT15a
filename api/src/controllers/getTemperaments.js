'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Temperament } = require('../db');
const {API_KEY} = process.env;

async function getTemperaments(req, res) {

    try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${API_KEY}`)
    const allData = response.data;

        const temperamentsByApi = [];
        allData.map(element => temperamentsByApi.push(element.temperament))
        const repeats = temperamentsByApi.map(element => element && element.split(",")).flat()
        const temps = [];
        const tempsArray = [...repeats].sort()
        for (let i = 0; i < tempsArray.length; i++) {
            if (tempsArray[i + 1] !== tempsArray[i]) {
                temps.push(tempsArray[i]);
            }
          }
        const tempsTrim = temps.map(string => string.trim())
        const tempsInDb = tempsTrim.slice(0, 132)
        tempsInDb.forEach(element => {
            Temperament.findOrCreate(
                    {where: {name: element}
                  }
                )
            })
           const temperaments = await Temperament.findAll()
           console.log("Temperamentos cargados")
           return res.json(temperaments)

        } catch (error) {
        console.log(error);
        res.status(500).json({error: 'No se han podido traer los temperamentos de los perros. The temperaments of the dogs could not be brought'})
    }
};


module.exports = {
    getTemperaments
}

