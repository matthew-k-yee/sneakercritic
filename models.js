const Sequelize = require('sequelize');

const sequelize = new Sequelize.define({
  database: 'sneakercritics_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Article = sequelize.define('article', {
  title: Sequelize.STRING,
  // sneaker_id: Sequelize.INTEGER
  site_score: Sequelize.INTEGER,
  users_score: Sequelize.INTEGER
});

const Comment = sequelize.define('comment', {
  title: Sequelize.STRING,
  text: Sequelize.TEXT,
  // user_id: Sequelize.INTEGER,
  // article_id: Sequelize.INTEGER,
  // users_score: Sequelize.INTEGER
});

const User = sequelize.define('user', {
  user_name: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING
});

const Sneaker = sequelize.define('sneaker', {
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  num_colors: Sequelize.INTEGER,
  product_detail: Sequelize.STRING,
  description: Sequelize.TEXT,
  brand_id: Sequelize.INTEGER,
  site_score: Sequelize.INTEGER,
  users_score: Sequelize.INTEGER
});

const Brand = sequelize.define('brand', {
  brand_name: Sequelize.STRING
});

Article.hasMany(Comment);
Comment.belongsTo(Article);

Comment.belongsTo(User);
User.hasMany(Comment)

Sneaker.belongsTo(Brand);
Brand.hasMany(Sneaker);

Article.belongsTo(Sneaker);


module.exports = {
  sequelize,
  Article,
  Comment,
  User,
  Sneaker,
  Brand
};
