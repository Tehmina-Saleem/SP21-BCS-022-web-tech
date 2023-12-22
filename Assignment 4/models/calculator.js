
const mongoose = require('mongoose');

const calculatorSchema = new mongoose.Schema({
  operand1: { type: Number, required: true },
  operation: { type: Number, required: true },
  operand2:{ type: Number, required: true },
  result:{ type: Number, required: true }
});

const Calculator = mongoose.model('Calculator', calculatorSchema);

module.exports = Calculator;
