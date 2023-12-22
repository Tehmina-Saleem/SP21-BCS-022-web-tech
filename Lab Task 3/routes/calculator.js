// calculatorRoute.js
const express = require('express');
const router = express.Router();
const useCalculatorModel = require('./CalculatorModel');


const calculatorModel = useCalculatorModel();


router.post('/calculate', (req, res) => {
  const { operand1, operation, operand2 } = req.body;

 
  calculatorModel.setOperand1(operand1);
  calculatorModel.setOperation(operation);
  calculatorModel.setOperand2(operand2);


  calculatorModel.handleCalculate();


  res.json({ result: calculatorModel.result });
});

module.exports = router;
