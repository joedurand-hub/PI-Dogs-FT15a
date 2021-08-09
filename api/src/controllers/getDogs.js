'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize')
const axios = require('axios').default;
const { Dog, Temperament } = require('../db');
const {API_KEY} = process.env;

async function getDogs(req, res) {
    const { name } = req.query

    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${API_KEY}`)
    const allData = response.data;

    const responseBreed = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&?api_key=${API_KEY}`)
    const dataAPI = responseBreed.data;

    if(name) {
        try {
            // const temperamentsByApi = [];
            // allData.map(element => temperamentsByApi.push(element.temperament))
            // const repeats = temperamentsByApi.map(element => element && element.split(",")).flat()
            // const temps = [];

            let dogsData = await Dog.findAll({
                where: {
                  name: {
                    [Op.like]: `%${name}%`
                  }
                },
              });
              for (let data of allData) {
                let arr = []
                arr.push(data.temperament)
                let arrTemp = arr.map(el => el && el.split(",")).flat()
    
                dogsAllData.push({
                    id: data.id,
                    name: data.name,
                    image: data.image.url,
                    temperament: arrTemp.map(temperament => temperament), 
                    weight: data.weight.metric.split("-").map(string => string.trim()).toString()
                    
                })
            }
            return res.json(dogsData)

        } catch(error) {
            console.log(error)
            res.status(500).json({error: 'La solicitud de /dogs por coincidencia de nombre falló. The / dogs request for name match failed.'})
        }
    } else {

       try {
        let dogsAllData = await Dog.findAll({include: Temperament})

        for (let data of allData) {
            let arr = []
            arr.push(data.temperament)
            let arrTemp = arr.map(el => el && el.split(",")).flat()

            dogsAllData.push({
                id: data.id,
                name: data.name,
                image: data.image.url,
                temperament: arrTemp, 
                weight: data.weight.metric.split("-").map(string => string.trim()).toString()
                
            })
        }
        console.log("Consologueo un dog por las dudas y para ver rápido como es su data", dogsAllData[4])
        return res.json(dogsAllData)

       } catch(error) {
            console.log(error)
            res.status(500).json({error: 'La solicitud de /dogs para traer todas las razas falló. The / dogs request to bring all breeds failed.'})
       }
    }

}

module.exports = {
    getDogs
}