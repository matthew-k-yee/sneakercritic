const { sequelize } = require('./models');

async function resetDb() {
  try {
    await sequelize.sync({force: true});
    console.log('The database is synced');
  }
  catch(evt) {
    console.error(evt);
  }
  finally {
    process.exit();
  }
};

resetDb();
