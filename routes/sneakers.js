const express = require('express');
const { Sneaker } = require('../models')
const SneakersRouter = express.Router();

SneakersRouter.get('/',
  async (req, res) => {
    try {
      const sneaker = await Sneaker.findAll();
      res.json({sneaker})
    }
    catch(evt) {
      res.status(500).json({msg: evt.message})
    }
  }
);

SneakersRouter.post('/',
  async (req, res) => {
    try {
      const sneaker = await Sneaker.create(req.body);
      res.json({sneaker})
    }
    catch(evt) {
      res.status(500).json({msg: evt.message})
    }
  }
);

SneakersRouter.get('/:sneaker_id',
  async (req, res) => {
    try {
      const sneaker = await Sneaker.findByPk(req.params.sneaker_id);
      res.json({sneaker})
    }
    catch(evt) {
      res.status(500).json({msg: evt.message});
    }
  }
);

SneakersRouter.put('/:sneaker_id',
  async (req, res) => {
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

SneakersRouter.delete('/:sneaker_id',
  async (req, res) => {
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
