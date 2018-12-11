const express = require('express');
const { User, CUser } = require('../models');

const UsersRouter = express.Router();

// http://localhost:3001/users
UsersRouter.get('/', async (req, res) => {
  // res.json({msg: 'get all users'});
  try{
    const user = await User.findAll();
    res.json({ user });
  } catch(evt) {
    res.status(500).json({
      msg: evt.message
    });
  }
});

// POST http://localhost:3001/users/
UsersRouter.post('/', async (req, res) => {
  // res.json({msg: 'post a user'});
  try{
    const user = await User.create(req.body);
    res.json({ user })
  } catch(evt) {
    res.status(500).json({
      msg: evt.message
    })
  }
});

// GET http://localhost:3001/users/:user_id
UsersRouter.get('/:user_id', async (req, res) => {
  // res.json({msg: `get user by id ${req.params.user_id}`});
  try{
    const user = await User.findByPk(req.params.user_id);
    res.json({ user })
  } catch(evt) {
    res.status(500).json({
      msg: evt.message
    });
  }
});

// PUT http://localhost:3001/users/:user_id
// UsersRouter.put('/:user_id', async (req, res) => {
//   // res.json({msg: `update user by id ${req.params.user_id}`});
//   try{
//     const data = req.body;
//     const user = await User.findByPk(req.params.user_id);
//     console.log(user)
//     const resp = await User.update({
//       user_name: data.user_name || user.user_name,
//     },
//     {
//       where: {
//         id: req.params.user_ud
//       }
//     });
//     res.json(data)
//   } catch(evt) {
//     res.status(500).json({
//       msg: evt.message
//     });
//   }
// });

// DELETE http://localhost:3001/users/:user_id
UsersRouter.delete('/:user_id', async (req, res) => {
  // res.json({msg: `delete user by id ${req.params.user_id}`});
  try{
    await User.destroy({
      where: {
        id: req.params.user_id,
      }
    },{truncate: true});
  } catch(evt) {
    res.status(500).json({
      msg: evt.message
    });
  }
});

module.exports = {
  UsersRouter,
}
