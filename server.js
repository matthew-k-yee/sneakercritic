const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { Articles } = require('./routes/articles');
const { Brands } = require('./routes/brands');
const { Users } = require('./routes/users');


const app = express();
app.use('/articles', Articles);
app.use('/brands', Brands);
app.use('/users', Users);


const PORT = process.env.PORT || 3001;



app.use(cors);
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json({msg: 'you have reached the home of the sneakercritic server, Hello :)'})
})

app.listen(PORT, () => {
  console.log('The server is listening on port: ', PORT);
});
