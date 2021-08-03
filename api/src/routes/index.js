const { Router } = require('express');
const router = require('express').Router();


const { getDogs } = require('../controllers/getDogs')
const { getDogsById } = require('../controllers/getDogsById')
const { getTemperaments } = require('../controllers/getTemperaments')
const { postDog } = require('../controllers/postDog')


router.get('/dogs', getDogs)        
router.get('/dogs/:id', getDogsById)  
router.get('/temperament', getTemperaments)           
router.post('/dog', postDog) 

module.exports = router;