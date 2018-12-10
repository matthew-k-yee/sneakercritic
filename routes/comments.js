const express = require('express');
const { Comment, CComment } = require('../models');

const CommentsRouter = express.Router();

// http://localhost:3001/comments
CommentsRouter.get('/', (req, res) => {
  res.json({msg: 'get all comments'});
});

// // POST http://localhost:3001/comments/
// CommentsRouter.post('/', (req, res) => {
//   res.json({msg: 'post a comment'});
// });
//
// // GET http://localhost:3001/comments/:comment_id
// CommentsRouter.get('/:comment_id', (req, res) => {
//   res.json({msg: `get comment by id ${req.params.comment_id}`});
// });
//
// // PUT http://localhost:3001/comments/:comment_id
// CommentsRouter.put('/:comment_id', (req, res) => {
//   res.json({msg: `update comment by id ${req.params.comment_id}`});
// });
//
// // DELETE http://localhost:3001/comments/:comment_id
// CommentsRouter.delete('/:comment_id', (req, res) => {
//   res.json({msg: `delete comment by id ${req.params.comment_id}`});
// });

module.exports = {
  CommentsRouter,
}
