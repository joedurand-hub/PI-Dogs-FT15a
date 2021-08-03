'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Dog } = require('../db');
const {API_KEY} = process.env;


async function getDogsById(req, res) {
    try {
        const { id } = req.params;  
     
        if(id.includes('-')) {
            const dogId = await Dog.findOne({
                where: {
                    id: id,
                }
            });
            return res.json(dogId);
       
        } else {
            const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?key=${API_KEY}`)
            console.log(response.data)
            const dogData = {
                id: response.data.id,
                name: response.data.name,
                image: response.data.reference_image_id,
                temperament: response.data.temperament,
                weightImperial: response.data.weight.imperial,
                weightMetric: response.data.weight.metric,
                heightImperial: response.data.weight.imperial,
                heightMetric: response.data.weight.metric,
                yearsLife: response.data.life_span,
            }
            return res.json(dogData)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud de /videogame por Id falló'})
    }
};


module.exports = {
    getDogsById
}
