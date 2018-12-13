onst express = require('express');
const { Brand, Article, Sneaker } = require('../models');


const BrandsRouter = express.Router();

// http://localhost:3001/brands
BrandsRouter.get('/',
  async (req, res) => {
    try {
      const brands = await Brand.findAll( {
        include: [{
          model: Sneaker,
          require: true,

          include: [{
            model: Article,
            require: true,

          }],
        }],

      });
      res.json({brands});
    }
    catch(evt) {
      res.status(500).json({msg: evt.message})
    }
  }
);

// POST http://localhost:3001/brands/
BrandsRouter.post('/',
  async (req, res) => {
    try {
      const brands = await Brand.create(req.body);
      res.json({brands});
    }
    catch(evt) {
      res.status(500).json({msg: evt.message})
    }
  }
);

// GET http://localhost:3001/brands/:brand_id
BrandsRouter.get('/:brand_id',
  async (req, res) => {
    try {
      const brand = await Brand.findByPk(req.params.brand_id, {
        include: [{
          model: Sneaker,
          require: true,

          include: [{
            model: Article,
            require: true,

          }],
        }],

      });
      const sneakers = brand.sneakers;
      const sneakersArry = [];
      for(let i = 0; i < sneakers.length; i++) {
        sneakersArry.push(sneakers[i].article);
      }

      res.json({brand,sneakersArry});
    }
    catch(evt) {
      res.status(500).json({msg: evt.message})
    }
  }
);
//
// PUT http://localhost:3001/brands/:brand_id
BrandsRouter.put('/:brand_id',
  async (req, res) => {
    try {
      //res.json({msg: `update brand by id ${req.params.brand_id}`});
      const data = req.body;
      const brand = await Brand.findByPk(req.params.brand_id);
      const resp = await Brand.update(
        {
          brand_name: data.brand_name || brand.brand_name,
        },
        {
          where: {
            id: req.params.brand_id,
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

// DELETE http://localhost:3001/brands/:brand_id
BrandsRouter.delete('/:brand_id', async (req, res) => {
  try {
    await Brand.destroy(
      {
        where: {
          id: req.params.brand_id,
        }
      },
      {
        truncate: true
      }
    );
    res.json({msg: `delete brand by id ${req.params.brand_id}`});
  }
  catch(evt) {
    res.status(500).json({msg: evt.message})
  }
});

module.exports = {
  BrandsRouter,
}
