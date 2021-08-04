'use strict';
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { Dog, Temperament, dog_temperaments } = require('../db');

async function postDog(req, res) {
    try {
        const {name, image, weight, height, yearsLife, temperament} = req.body;
       console.log(req.body)
           let dogCreate = await Dog.create({
				id: uuidv4(),
				name: name,
                image: image,
				weight: weight,
				height: height,
				yearsLife: yearsLife,
			});
             await dogCreate.addTemperament(temperament)
            return res.json(dogCreate)
          
        } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud para crear información de un perro falló'})
    }
};


module.exports = {
    postDog
}

