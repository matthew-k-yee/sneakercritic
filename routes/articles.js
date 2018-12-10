const express = require('express');
const {Comments} = require('./comments');
const { BrandsRouter } = require('./brands');


const Articles = express.Router();
Articles.use('/comments', Comments);
Articles.use('/brands', BrandsRouter);

// GET http://localhost:3001/articles/
Articles.get('/', (req, res) => {
  //const articles = a
  res.json({msg: 'get all articles'});
});

// POST http://localhost:3001/articles/
Articles.post('/', (req, res) => {

  res.json({msg: 'post a article'});
});

// GET http://localhost:3001/articles/:article_id
Articles.get('/:article_id', (req, res) => {
  res.json({msg: `get article by id ${req.params.article_id}`});
});

// PUT http://localhost:3001/articles/:article_id
Articles.put('/:article_id', (req, res) => {
  res.json({msg: `update article by id ${req.params.article_id}`});
});

// DELETE http://localhost:3001/articles/:article_id
Articles.delete('/:article_id', (req, res) => {
  res.json({msg: `delete article by id ${req.params.article_id}`});
});

module.exports = {
  Articles,
}
