const { sequelize } = require('./models');

async function testConDb() {
  try {
    await sequelize.authenticate({force: true});
    console.log('Connetion to database is successful');
  }
  catch(evt) {
    console.error(evt);
  }
  finally {
    process.exit();
  }
};

testConDb();
