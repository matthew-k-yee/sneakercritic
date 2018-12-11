const { sequelize, Article, Comment, User, Sneaker, Brand } = require('./models');

async function seed() {
  try {
    // seed stuff :)
    const brand = await Brand.bulkCreate([
      {brand_name: 'Nike'},
      {brand_name: 'Adidas'},
      {brand_name: 'New Balance'},
      {brand_name: 'Jordan'},
      {brand_name: 'Puma'}
    ]);

    const sneaker = await Sneaker.bulkCreate([
      {
        name: 'Air Jordan 11 “Bred” ',
        type: 'low-top',
        num_colors: 1,
        product_detail: 'Fulllength Air Sole unit offers extreme comfort',
        description: 'With more than 20 years under its belt, the Air Max 97 is back and better than ever. Experience the ultimate ride with the Men\'s Nike Air Max 97 QS Casual Shoes.',
        brand_id: 1,
        site_score: 5,
        users_score: 3
      },
      {
        name: 'Adidas Orginals YEEZY Boost 350 V2',
        type: 'low-top',
        num_colors: 1,
        product_detail: 'Energy-returning, responsive BOOST midsole',
        description: 'Runners and sneaker fanatics alike are marveling over the cloud like Boost technology, get ready for the latest update to the famed UltraBOOST. Designed to naturally expand with your foot and adapt to your personal gait cycle, you\'ve never felt technology like this before. With the updated Men\'s adidas UltraBOOST Running Shoes you\'ll feel cushioning unlike anything ever before.',
        brand_id: 2,
        site_score: 3,
        users_score: 4
      },
      {
        name: 'Air Jordan 12',
        type: 'hi-top',
        num_colors: 2,
        product_detail: 'Solid and translucent rubber outsole for durable traction',
        description: 'Since it’s original release in 1996 the Men\'s Air Jordan Retro 12 Basketball Shoes has been considered a classic. Originally inspired by the Japanese war flag that features a Rising Sun and a 19th century women\’s dress boot, this model has been apart of many classic hoops moments (who can forget the infamous "Flu Game").',
        brand_id: 2,
        site_score: 3,
        users_score: 4
      },
      {
        name: 'NIKE AIR MAX 95',
        type: 'low-top',
        num_colors: 3,
        product_detail: 'UPPER: Mesh, MIDSOLE: Air-Sole, OUTSOLE: Waffle and flex grooves',
        description: 'Featuring a unique lacing system, nylon eye stays to secure the foot in place, breathable lightweight mesh enhance the upper for a lighter feel. With visible Air in the heel and forefoot, this classic vintage style delivers the same flexible cushioning as the original model.',
        brand_id: 3,
        site_score: 3,
        users_score: 4
      }
    ]);

    const user = await User.bulkCreate([
      {
        user_name: 'mky',
        password: '123',
        email: '123@gmail.com',
        first_name: 'matt',
        last_name: 'yee'
      },
      {
        user_name: 'tar',
        password: '456',
        email: '456@gmail.com',
        first_name: 'troy',
        last_name: 'richardson'
      },
      {
        user_name: 'st',
        password: '789',
        email: '789@gmail.com',
        first_name: 'seth',
        last_name: 'torres'
      }
    ]);

    const article = await Article.bulkCreate([
      {
        title: 'Air Jordan 11 “Bred” Releasing During Holiday 2019',
        text: 'Now, it is being reported that the Chicago Bulls-friendly Bred variety will be following in its predecessors place with an official Holiday, 2019 drop. While it is not confirmed, it is likely that the 2019 pairs will come dressed in the new remastered construction that boasts a higher cut patent leather mudguard more resemblant of the original 1995 pairs and the number “45” comes emblazoned on its heel as opposed to the customary “23” hit. With no concrete release date at the moment or actual looks, there will be plenty more information out of the Jordan 11 “Bred” camp over the next year.',
        sneaker_id: 1,
        site_score: 3,
        users_score: 1
      },
      {
        title: 'Official Images Of The adidas Yeezy Boost 350 v2 “Static',
        text: '',
        sneaker_id: 2,
        site_score: 1,
        users_score: 2
      },
      {
        title: 'Another OG Colorway Of The Nike Air Max 95 Is Coming',
        text: '',
        sneaker_id: 3,
        site_score: 3,
        users_score: 4
      },
      {
        title: 'Air Jordan 12 Releasing During Holiday 2019',
        text: '',
        sneaker_id: 4,
        site_score: 5,
        users_score: 3
      }
    ]);

    const comment = await Comment.bulkCreate([
      {
        title: 'DEFINITELY NOT THE MOST COMFORTABLE SHOE.',
        text: 'Jordan should enhance their products to facilitate comfort like the adidas orthopedic shoes',
        user_id: 1,
        article_id: 1,
        users_score: 4
      },
      {
        title: 'QUALITY IS NOT WORTH THE PRICE',
        text: 'Jordans these days have a quality of hit or miss. The edges where the upper and the sole are not connected all the way. You see glue marks on the suede and between suede and rubber.',
        user_id: '2',
        article_id: 3,
        users_score: 3
      }
    ]);

  }
  catch(evt) {
    console.error(evt);
  }
  finally {
    process.exit();
  }
};

seed();
