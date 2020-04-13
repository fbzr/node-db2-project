const express = require('express');
const router = express.Router();
const db = require('../../data/dbConfig');

// @desc    Return all cars
router.get('/', async (req, res) => {
    res.json(await db('cars'));
});

// @desc    Return an specific car
router.get('/:id', async (req, res) => {
    const car = await db('cars').where({ vin: req.params.id });
    res.json(car);
});

// @desc    Create a new car
router.post('/', async (req, res) => {
    try {
        const {
            vin,
            make,
            model,
            mileage,
            transmission,
            title
        } = req.body;
        
        if (!vin || !make || !model || !mileage) {
            return res.status(400).json({ errorMessage: 'Missing required fields' });
        }
    
        const test = await db('cars').insert({ vin, make, model, mileage, transmission, title });
        console.log(test);
        res.json(test);
    } catch(err) {
        res.status(500).json({
            errorMessage: 'There was an error executing the operation',
            error: err
        });
    }
    
});

module.exports = router;