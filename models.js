const {Sequelize} = require('sequelize');

const bcrypt = require('bcrypt');
const THE_SECRET = 5;

const sequelize = new Sequelize(process.env.DATABASE_URL,{
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Article = sequelize.define('article', {
  title: Sequelize.STRING,
  text: Sequelize.TEXT,
  sneaker_id: Sequelize.INTEGER,
  site_score: Sequelize.INTEGER,
  users_score: Sequelize.INTEGER
});

const Comment = sequelize.define('comment', {
  title: Sequelize.STRING,
  text: Sequelize.TEXT,
  user_id: Sequelize.INTEGER,
  article_id: Sequelize.INTEGER,
  users_score: Sequelize.INTEGER
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
  users_score: Sequelize.INTEGER,
  sneaker_image: Sequelize.STRING
});

const Brand = sequelize.define('brand', {
  brand_name: Sequelize.STRING,
  brand_image: Sequelize.STRING
});

const Role = sequelize.define('role', {
  role_name: Sequelize.STRING,
});


Article.hasMany(Comment);
Comment.belongsTo(Article);

Comment.belongsTo(User);
User.hasMany(Comment);
User.belongsTo(Role);
Role.hasMany(User);

Sneaker.belongsTo(Brand);

Brand.hasMany(Sneaker);

Sneaker.hasOne(Article);
Article.belongsTo(Sneaker);
// Auth
User.beforeCreate( async (user, options) => {
  const hashedPass = await bcrypt.hash(user.password, THE_SECRET);
  user.password = hashedPass;
  return user;
});

User.beforeBulkCreate( async (users, options) => {
  for (user of users) {
    const hashedPass = await bcrypt.hash(user.password, THE_SECRET);
    user.password = hashedPass;
  }
});

module.exports = {
  sequelize,
  Article,
  Comment,
  User,
  Sneaker,
  Brand,
  Role,
};
