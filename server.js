const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { ArticlesRouter } = require('./routes/articles');
const { BrandsRouter } = require('./routes/brands');
const { CommentsRouter } = require('./routes/comments');
const { UsersRouter } = require('./routes/users');
const { SneakersRouter } = require('./routes/sneakers')


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/articles', ArticlesRouter);
app.use('/brands', BrandsRouter);
app.use('/comments', CommentsRouter);
app.use('/users', UsersRouter);
app.use('/sneakers', SneakersRouter);


const PORT = process.env.PORT || 3001;





app.get('/', (req, res) => {
  res.json({msg: 'you have reached the home of the sneakercritic server, Hello :)'})
})

app.listen(PORT, () => {
  console.log('The server is listening on port: ', PORT);
});
