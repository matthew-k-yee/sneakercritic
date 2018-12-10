const express = require('express');

const Sneakers = express.Router();

// http://localhost:3001/sneakers
Sneakers.get('/', (req, res) => {
  res.json({msg: 'get all sneakers'});
});

// POST http://localhost:3001/sneakers/
Sneakers.post('/', (req, res) => {
  res.json({msg: 'post a sneaker'});
});

// GET http://localhost:3001/sneakers/:sneaker_id
Sneakers.get('/:sneaker_id', (req, res) => {
  res.json({msg: `get sneaker by id ${req.sneaker_id}`});
});

// PUT http://localhost:3001/sneakers/:sneaker_id
Sneakers.put('/:sneaker_id', (req, res) => {
  res.json({msg: `update sneaker by id ${req.sneaker_id}`});
});

// DELETE http://localhost:3001/sneakers/:sneaker_id
Sneakers.delete('/:sneaker_id', (req, res) => {
  res.json({msg: `delete sneaker by id ${req.sneaker_id}`});
});

module.exports = {
  Sneakers,
}
