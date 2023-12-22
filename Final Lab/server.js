const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const coffeeRoutes = require('./routes/coffeeRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mernapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import the Coffee model
const Coffee = require('./models/Coffee');

// Coffee Shop API Routes

app.get('/api/products', async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.json(coffees);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const coffee = await Coffee.findById(productId);
    if (coffee) {
      res.json(coffee);
    } else {
      res.status(404).json({ error: 'Coffee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/products', async (req, res) => {
  const { name, price, availability } = req.body;

  if (!name || !price || price <= 0 || availability === undefined) {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  try {
    const newCoffee = new Coffee({
      name,
      price,
      availability,
    });

    const savedCoffee = await newCoffee.save();
    res.status(201).json(savedCoffee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/api/products/:id', async (req, res) => {
  const productId = req.params.id;
  const updatedCoffee = req.body;

  try {
    const result = await Coffee.findByIdAndUpdate(productId, updatedCoffee, { new: true });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'Coffee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const result = await Coffee.findByIdAndRemove(productId);
    if (result) {
      res.json({ message: 'Coffee deleted successfully' });
    } else {
      res.status(404).json({ error: 'Coffee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/auth', authRoutes);
app.use('/coffee', coffeeRoutes); // Corrected path

// End of Coffee Shop API Routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
