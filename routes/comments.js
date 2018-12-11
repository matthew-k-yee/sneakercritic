const express = require('express');
const { Comment } = require('../models');

const CommentsRouter = express.Router();

// http://localhost:3001/comments
CommentsRouter.get('/', async (req, res) => {
  try {
    const comment = await Comment.findAll();
    res.json({ comment })
  }
  catch(evt) {
    res.status(500).json({
      msg: evt.message
    });
  }
});

// POST http://localhost:3001/comments/
CommentsRouter.post('/', async (req, res) => {
  try{
    const comment = await Comment.create(req.body)
  } catch(evt) {
    res.status(500).json({
    msg: evt.message
  })
  }
});

// GET http://localhost:3001/comments/:comment_id
CommentsRouter.get('/:comment_id', async (req, res) => {
  try{
    const comment = await Comment.findByPk(req.params.comment_id);
    res.json({ comment })
  } catch(evt) {
    res.status(500).json({
      msg: evt.message
    });
  }
});

// PUT http://localhost:3001/comments/:comment_id
CommentsRouter.put('/:comment_id', async (req, res) => {
  // res.json({msg: `update comment by id ${req.params.comment_id}`});
  try{
    const data = req.body;
    const comment = await Comment.findByPk(req.params.comment_id);
    const resp = await Comment.update({
      title: data.title || comment.title,
    },
    {
      where: {
        id: req.params.comment_id,
      }
    });
    console.log(data)
    res.json(data);
  }
  catch(evt) {
    res.status(500).json({msg: evt.message})
  }
});

// DELETE http://localhost:3001/comments/:comment_id
CommentsRouter.delete('/:comment_id', async (req, res) => {
  try{
    await Comment.destroy({
      where: {
        id: req.params.comment_id
      }
    },{truncate: true});
    res.json({ msg: `delete comment by id ${req.params.comment_id}`})
  } catch(evt) {
    res.status(500).json({
      msg: evt.message
    })
  }
});

module.exports = {
  CommentsRouter,
}
