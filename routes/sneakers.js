const express = require('express');
const { Sneaker } = require('../models')
const SneakersRouter = express.Router();

// http://localhost:3001/sneakers
SneakersRouter.get('/',
  async (req, res) => {
    // res.json({msg: 'get all sneakers'});
    try {
      const sneaker = await Sneaker.findAll();
      res.json({sneaker})
    }
    catch(evt) {
      res.status(500).json({msg: evt.message})
    }
  }
);

// POST http://localhost:3001/sneakers/
SneakersRouter.post('/',
  async (req, res) => {
    // res.json({msg: 'post a sneaker'});
    try {
      const sneaker = await Sneaker.create(req.body);
      res.json({sneaker})
    }
    catch(evt) {
      res.status(500).json({msg: evt.message})
    }
  }
);

// GET http://localhost:3001/sneakers/:sneaker_id
SneakersRouter.get('/:sneaker_id',
  async (req, res) => {
    // res.json({msg: `get sneaker by id ${req.params.sneaker_id}`});
    try {
      const sneaker = await Sneaker.findByPk(req.params.sneaker_id);
      res.json({sneaker})
    }
    catch(evt) {
      res.status(500).json({msg: evt.message});
    }
  }
);

// // PUT http://localhost:3001/sneakers/:sneaker_id
SneakersRouter.put('/:sneaker_id',
  async (req, res) => {
    // res.json({msg: `update sneaker by id ${req.params.sneaker_id}`});
    try {
      const data = req.body;
      const sneaker = await Sneaker.findByPk(req.params.sneaker_id);
      const resp = await Sneaker.update(
        {
          name: data.name || sneaker.name,
        },
        {
          where: {
            id: req.params.sneaker_id,
          }
        }
      );
      res.json(data);
    }
    catch(evt) {
      res.status(500).json({msg: evt.message})
    }
  }
);

// DELETE http://localhost:3001/sneakers/:sneaker_id
SneakersRouter.delete('/:sneaker_id',
  async (req, res) => {
    // res.json({msg: `delete sneaker by id ${req.params.sneaker_id}`});
    try {
      await Sneaker.destroy(
        {
          where: {
            id: req.params.sneaker_id,
          }
        },
        {
          truncate: true
        }
      );
      res.json({msg: `delete sneaker with id ${req.params.sneaker_id}`})
    }
    catch(evt) {
      res.status(500).json({msg: evt.message})
    }
  }
);

module.exports = {
  SneakersRouter,
}
