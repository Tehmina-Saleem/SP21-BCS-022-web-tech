// models/Coffee.js
const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;
