const { sequelize } = require('./models');

async function seed() {
  try {
    // seed stuff :)
  }
  catch(evt) {
    console.error(evt);
  }
  finally {
    process.exit();
  }
};

seed();
