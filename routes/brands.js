const express = require('express');

const Brands = express.Router();

// http://localhost:3001/brands
Brands.get('/', (req, res) => {
  res.json({msg: 'get all brands'});
});

// POST http://localhost:3001/brands/
Brands.post('/', (req, res) => {
  res.json({msg: 'post a brand'});
});

// GET http://localhost:3001/brands/:brand_id
Brands.get('/:brand_id', (req, res) => {
  res.json({msg: `get brand by id ${req.brand_id}`});
});

// PUT http://localhost:3001/brands/:brand_id
Brands.put('/:brand_id', (req, res) => {
  res.json({msg: `update brand by id ${req.brand_id}`});
});

// DELETE http://localhost:3001/brands/:brand_id
Brands.delete('/:brand_id', (req, res) => {
  res.json({msg: `delete brand by id ${req.brand_id}`});
});

module.exports = {
  Brands,
}
