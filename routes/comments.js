const express = require('express');
const { Comment } = require('../models');

const CommentsRouter = express.Router();

CommentsRouter.get('/',
async (req, res) => {
  try {
    const comment = await Comment.findAll();
    res.json({ comment })
  }
  catch(evt) {
    res.status(500).json({msg: evt.message});
  }
}
);

CommentsRouter.post('/', async (req, res) => {
  try{
    const comment = await Comment.create(req.body)
    res.json({ comment })

  }
  catch(evt) {
    res.status(500).json({
      msg: evt.message
    })
  }
});



CommentsRouter.get('/:comment_id', async (req, res) => {
  try{
    const comment = await Comment.findByPk(req.params.comment_id);
    res.json({ comment })
  } catch(evt) {
    res.status(500).json({msg: evt.message});
  }
});

CommentsRouter.put('/:comment_id', async (req, res) => {
  try{
    const data = req.body;
    const comment = await Comment.findByPk(req.params.comment_id);
    const resp = await Comment.update({
      title: data.title || comment.title,
      text: data.text || comment.text,
      users_score: data.users_score || comment.users_score,
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
