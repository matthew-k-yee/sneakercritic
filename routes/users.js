const express = require('express');

const Users = express.Router();

// http://localhost:3001/users
Users.get('/', (req, res) => {
  res.json({msg: 'get all users'});
});

// POST http://localhost:3001/users/
Users.post('/', (req, res) => {
  res.json({msg: 'post a user'});
});

// GET http://localhost:3001/users/:user_id
Users.get('/:user_id', (req, res) => {
  res.json({msg: `get user by id ${req.user_id}`});
});

// PUT http://localhost:3001/users/:user_id
Users.put('/:user_id', (req, res) => {
  res.json({msg: `update user by id ${req.user_id}`});
});

// DELETE http://localhost:3001/users/:user_id
Users.delete('/:user_id', (req, res) => {
  res.json({msg: `delete user by id ${req.user_id}`});
});

module.exports = {
  Users,
}
