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
                image: `https://cdn2.thedogapi.com/images/${response.data.reference_image_id}.jpg`,
                weight: response.data.weight.metric,
                height: response.data.weight.metric,
                yearsLife: response.data.life_span,
                temperament: response.data.temperament,
            }
            return res.json(dogData)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud de /dogs por Id falló. The request for / dogs by Id failed.'})
    }
};


module.exports = {
    getDogsById
}

