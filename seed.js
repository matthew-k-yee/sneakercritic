const { sequelize, Article, Comment, User, Sneaker, Brand, CArticle, CComment,
  CUser, CSneaker, CBrand } = require('./models');

async function seed() {
  try {
    // seed stuff :)
    const brand = await Brand.bulkCreate(
      [
        new CBrand('Nike'),
        new CBrand('Adidas'),
        new CBrand('Jordan'),
        new CBrand('New Balance'),
        new CBrand('Reebok'),
        new CBrand('Puma')
      ]
    );

    const sneaker = await Sneaker.bulkCreate(
      [
        new CSneaker('Nike Air Max 97', 'low-top', 3, 'Fulllength Air Sole unit offers extreme comfort', 'With more than 20 years under its belt, the Air Max 97 is back and better than ever. Experience the ultimate ride with the Men\'s Nike Air Max 97 QS Casual Shoes.', 1),
        new CSneaker('Adidas Orginals YEEZY Boost 350 V2 ', 'low-top', 1, 'Energy-returning, responsive BOOST midsole', 'Runners and sneaker fanatics alike are marveling over the cloud like Boost technology, get ready for the latest update to the famed UltraBOOST. Designed to naturally expand with your foot and adapt to your personal gait cycle, you\'ve never felt technology like this before. With the updated Men\'s adidas UltraBOOST Running Shoes you\'ll feel cushioning unlike anything ever before', 2),
        new CSneaker('Air Jordan 12', 'hi-top', 2, 'Solid and translucent rubber outsole for durable traction', 'Since it’s original release in 1996 the Men\'s Air Jordan Retro 12 Basketball Shoes has been considered a classic. Originally inspired by the Japanese war flag that features a Rising Sun and a 19th century women\’s dress boot, this model has been apart of many classic hoops moments (who can forget the infamous "Flu Game").', 3),
        new CSneaker('NIKE AIR MAX 95', 'low-top', 3, 'UPPER: Mesh, MIDSOLE: Air-Sole, OUTSOLE: Waffle and flex grooves', 'Featuring a unique lacing system, nylon eye stays to secure the foot in place, breathable lightweight mesh enhance the upper for a lighter feel. With visible Air in the heel and forefoot, this classic vintage style delivers the same flexible cushioning as the original model.").', 3)
      ]
    );

    const user = await User.bulkCreate(
      [
        new CUser('mky', '123', '123@gmail.com', 'matt', 'yee'),
        new CUser('tar', '456', '456@gmail.com', 'troy', 'richardson'),
        new CUser('st', '789', '789@gmail.com', 'seth', 'torres')
      ]
    );

    const article = await Article.bulkCreate(
      [
        new CArticle('The Nike Air Max 97 Appears In Yet Another Gold And Red Colorway', 4, 3, 1),
        new CArticle('Official Images Of The adidas Yeezy Boost 350 v2 “Static”', 2, 1, 2),
        new CArticle('Another OG Colorway Of The Nike Air Max 95 Is Coming', 3, 3, 4),
        new CArticle('Air Jordan 12 Releasing During Holiday 2019', 4, 5, 3)
      ]
    );

    const comment = await Comment.bulkCreate(
      [
        new CComment('DEFINITELY NOT THE MOST COMFORTABLE SHOE.', 'Jordan should enhance their products to facilitate comfort like the adidas orthopedic shoes', 1, 4),
        new CComment('QUALITY IS NOT WORTH THE PRICE', 'Jordans these days have a quality of hit or miss. The edges where the upper and the sole are not connected all the way. You see glue marks on the suede and between suede and rubber.', 2, 4)
      ]
    );

  }
  catch(evt) {
    console.error(evt);
  }
  finally {
    process.exit();
  }
};

seed();
