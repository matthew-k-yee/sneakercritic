const express = require('express');
const bcrypt = require('bcrypt');
const { sign, passport } = require('../auth');
const { User } = require('../models');


const UsersRouter = express.Router();


// http://localhost:3001/users
UsersRouter.get('/', (req, res) => {
  res.json({msg: 'get all users'});
});

// POST http://localhost:3001/users/
UsersRouter.post('/', async (req, res) => {
  //res.json({msg: 'post a user'});
  try {
    const data = req.body;
    const user = await User.create(data);
    const { id, user_name, first_name } = user;
    const token = sign({user_name, first_name, id});
    res.json({user, token});
  }
  catch(evt) {
    res.status(500).json({msg: evt.message})
  }
});

// GET http://localhost:3001/users/:user_id
// UsersRouter.get('/:user_id', (req, res) => {
//   res.json({msg: `get user by id ${req.params.user_id}`});
// });

UsersRouter.post('/login', async (req, res) => {
  try {
    console.log(req.body);
    const {user_name, password} = req.body;
    const user = await User.findOne({where: {user_name}});
    const valid =  await bcrypt.compare(password, user.password);

    if (valid) {
      const { id, user_name, first_name } = user;
      const token = sign({user_name, first_name, id});
      res.json({token,valid});
    }
    else {
      throw Error('Invalid username or password');
    }
  }
  catch(evt) {
    res.status(401).json(evt.message);
  }
});

UsersRouter.get('/profile', passport.authenticate('jwt', {session: false}),
  async (req, res) => {
    try {
      res.json({user: req.user});
    }
    catch(evt) {
      res.status(401).json(evt.message);
    }
  }
);

// PUT http://localhost:3001/users/:user_id
UsersRouter.put('/:user_id', passport.authenticate('jwt', {session: false}),
  async (req, res) => {
    //res.json({msg: `update user by id ${req.params.user_id}`});
    try {
      const data = req.body;
      const user = await User.findByPk(req.params.user_id);
      const resp = await User.update(
        {
          user_name: data.user_name || user.user_name,
          password: data.password || user.password,
          email: data.email || user.email,
          first_name: data.first_name || user.first_name,
          last_name: data.last_name || user.last_name,
        },
        {
          where: {
            id: req.params.user_id,
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

// DELETE http://localhost:3001/users/:user_id
UsersRouter.delete('/:user_id', passport.authenticate('jwt', {session: false}),
  async (req, res) => {
    try {
      await User.destroy(
        {
          where: {
            id: req.params.user_id,
          }
        },
        {
          truncate: true
        }
      );
      res.json({msg: `delete user by id ${req.params.user_id}`});
    }
    catch(evt) {
      res.status(500).json({msg: evt.message})
    }
  }
);

module.exports = {
  UsersRouter,
}
