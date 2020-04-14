const express = require('express');
const router = express.Router();
const db = require('../../data/dbConfig');

// @desc    Return all cars
router.get('/', async (req, res) => {
    res.json(await db('cars'));
});

// @desc    Return an specific car
router.get('/:id', async (req, res) => {
    const car = await db('cars').where({ id: req.params.id }).first();
    if (!car) {
        res.status(404).json({ errorMessage: 'Invalid ID' });
    }
    res.json(car);
});

// @desc    Create a new car
router.post('/', async (req, res) => {
    try {
        const {
            vin,
            make,
            model,
            mileage
        } = req.body;
        
        if (!vin || !make || !model || !mileage) {
            return res.status(400).json({ errorMessage: 'Missing required fields' });
        }
    
        const id = await db('cars').insert(req.body, 'id');
        
        res.json(await db('cars').where({ id: id[0] }).first());
    } catch(err) {
        res.status(500).json({
            errorMessage: 'There was an error executing the operation',
            error: err
        });
    }
    
});

// @route    PATCH /api/cars/:id
// @desc    Update a car
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const count = await db('cars').where({ id }).update(req.body);
        if (!count) {
            return res.status(404).json({ errorMessage: 'Invalid ID' });
        }
        const updatedCar = await db('cars').where({ id }).first();
        res.json(updatedCar);
    } catch(err) {
        res.status(500).json({
            errorMessage: 'There was an error executing the operation',
            error: err
        });
    }
});

// @route   DELETE /api/cars/:id
// @desc    Delete a car
router.delete('/:id', async (req, res) => {
    try {
        const count = await db('cars').where({ id: req.params.id }).del();
        if (!count) {
            return res.status(404).json({ errorMessage: 'Invalid ID' });
        }
        res.json({ message: 'Car deleted successfully' });
    } catch(err) {
        res.status(500).json({
            errorMessage: 'There was an error executing the operation',
            error: err
        });
    }
});

module.exports = router;