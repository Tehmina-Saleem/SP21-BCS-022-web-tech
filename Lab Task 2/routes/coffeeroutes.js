// routes/coffeeRoutes.js
const express = require('express');
const router = express.Router();
const Coffee = require('../models/Coffee');

// Get all coffees
router.get('/', async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.json(coffees);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Create a new coffee
router.post('/', async (req, res) => {
  const coffee = new Coffee({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const savedCoffee = await coffee.save();
    res.json(savedCoffee);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
