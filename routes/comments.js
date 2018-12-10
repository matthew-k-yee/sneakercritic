const express = require('express');

const Comments = express.Router();

// http://localhost:3001/comments
Comments.get('/', (req, res) => {
  res.json({msg: 'get all comments'});
});

// POST http://localhost:3001/comments/
Comments.post('/', (req, res) => {
  res.json({msg: 'post a comment'});
});

// GET http://localhost:3001/comments/:comment_id
Comments.get('/:comment_id', (req, res) => {
  res.json({msg: `get comment by id ${req.comment_id}`});
});

// PUT http://localhost:3001/comments/:comment_id
Comments.put('/:comment_id', (req, res) => {
  res.json({msg: `update comment by id ${req.comment_id}`});
});

// DELETE http://localhost:3001/comments/:comment_id
Comments.delete('/:comment_id', (req, res) => {
  res.json({msg: `delete comment by id ${req.comment_id}`});
});

module.exports = {
  Comments,
}
