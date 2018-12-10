const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
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
class CArticle{
  constructor(title, site_score, users_score, sneaker_id = null) {
    this.title = title;
    this.site_score = site_score;
    this.users_score = users_score;
    this.sneaker_id = sneakers_id;
  }
};

const Comment = sequelize.define('comment', {
  title: Sequelize.STRING,
  text: Sequelize.TEXT,
  // user_id: Sequelize.INTEGER,
  // article_id: Sequelize.INTEGER,
  // users_score: Sequelize.INTEGER
});
class CComment {
  constructor(title, text, user_id, article_id, users_score = null) {
    this.title = title;
    this.text = text;
    this.user_id = user_id;
    this.article_id = article_id;
    this.users_score = users_score;
  }
}

const User = sequelize.define('user', {
  user_name: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING
});

class CUser {
  constructor(user_name, password, email, first_name, last_name){
    this.user_name = user_name;
    this.password = password;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
  }
}

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

class CSneaker {
  constructor(name, type, num_colors, product_detail, description, brand_id,
     site_score = null, users_score = null){
    this.name = name;
    this.type = type;
    this.num_colors = num_colors;
    this.product_detail = product_detail;
    this.description = description;
    this.brand_id = brand_id;
    this.site_score = site_score;
    this.users_score = users_score;
  }
}

const Brand = sequelize.define('brand', {
  brand_name: Sequelize.STRING
});

class CBrand{
  constructor(brand_name) {
    this.brand_name = brand_name;

  }
}

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
  Brand,
  CArticle,
  CComment,
  CUser,
  CSneaker,
  CBrand
};
