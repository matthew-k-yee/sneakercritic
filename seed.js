const { sequelize, Article, Comment, User, Sneaker, Brand , Role} = require('./models');

async function seed() {
  try {
    // seed stuff :)
    const brand = await Brand.bulkCreate([
      {brand_name: 'Nike'},
      {brand_name: 'Adidas'},
      {brand_name: 'New Balance'},
      {brand_name: 'Jordan'},
      {brand_name: 'Puma'},
      {brand_name: 'Reebok'}
    ]);

    const roles = await Role.bulkCreate([
      {role_name: 'Admin'},
      {role_name: 'Member'},
      {role_name: 'Guess'},
    ]);
    
    const sneaker = await Sneaker.bulkCreate([
      {
        name: 'Air Jordan 11 “Bred” ',
        type: 'low-top',
        num_colors: 1,
        product_detail: 'Fulllength Air Sole unit offers extreme comfort',
        description: '"In with the new" doesn\'t always mean "out with the old." The Grade School Jordan Retro XI Basketball Shoes deliver the perfect marriage of classic comfort and modern style, seamlessly blending old with new. Featuring a full-grain leather and synthetic upper with perforations for ventilation, these kicks offer the comfort kids needs to perform their best. From the courts to the classroom, the thick, durable rubber outsole ensures they\'ll have top-notch grip and stability, so they can push their limits with confidence. The Jumpman logo on the heel adds iconic recognition and pays tribute to one of the best.',
        brand_id: 4,
        site_score: 5,
        users_score: 3,
        sneaker_image: "air-jordan-11-bred-2019.jpg"
      },
      {
        name: 'Adidas Orginals YEEZY Boost 350 V2',
        type: 'low-top',
        num_colors: 1,
        product_detail: 'Energy-returning, responsive BOOST midsole',
        description: 'The adidas Yeezy Boost 350 V2 debuted in 2016 as the fifth piece of footwear from the adidas and Kanye West partnership. The second generation of the original Yeezy Boost 350, the V2 version featured a higher-cut and patterned Primeknit upper with a contrasting stripe that read "SPLY - 350." The reworked upper sat on a larger volume adidas Boost sole.',
        brand_id: 2,
        site_score: 3,
        users_score: 4,
        sneaker_image: 'adidas-yeezy-boost-350-v2-semi-frozen-yellow-buying-guide-1.jpg'
      },
      {
        name: 'KITH X NEW BALANCE 997 ',
        type: 'low-top',
        num_colors: 6,
        product_detail: 'Solid and translucent rubber outsole for durable traction',
        description: 'Inspired by two of Ronnie Fieg\'s favorite collaborations.',
        brand_id: 3,
        site_score: 3,
        users_score: 4,
        sneaker_image: 'kith-new-balance-997-collection-6.jpg'
      },
      {
        name: 'Nike Air Fear of God 1',
        type: 'hi-top',
        num_colors: 2,
        product_detail: 'UPPER: Mesh, MIDSOLE: Air-Sole, OUTSOLE: Waffle and flex grooves',
        description: 'Fear of God\'s own Jerry Lorenzo and his first Nike collaboration.',
        brand_id: 1,
        site_score: 3,
        users_score: 4,
        sneaker_image: 'nike-air-fear-of-god-1-black.jpg'
      },
      {
        name: 'Reebok Daytona DMX',
        type: 'low-top',
        num_colors: 4,
        product_detail: 'UPPER: Mesh, MIDSOLE: Air-Sole, OUTSOLE: Waffle and flex grooves',
        description: 'Ride high with the Daytona DMX. Fast and furious style never compromises on comfort. A cushy EVA midsole combined with a removable sockliner that accommodates orthotics equals a comfort win. Float around life\'s curves with DMX moving air technology and stay connected to the ground with the durable rubber outsole.',
        brand_id: 6,
        site_score: 3,
        users_score: 4,
        sneaker_image: 'reebok-daytona-dmx-mu-pack-1.jpg'
      }
    ]);

    const user = await User.bulkCreate([
      {
        user_name: 'anonymous',
        password: '',
        email: '',
        first_name: 'anonymous',
        last_name: '',
        role_id: 3,
      },
      {
        user_name: 'mky',
        password: '123',
        email: '123@gmail.com',
        first_name: 'matt',
        last_name: 'yee',
        role_id: 2,
      },
      {
        user_name: 'tar',
        password: '456',
        email: '456@gmail.com',
        first_name: 'troy',
        last_name: 'richardson',
        role_id: 1,
      },
      {
        user_name: 'st',
        password: '789',
        email: '789@gmail.com',
        first_name: 'seth',
        last_name: 'torres',
        role_id: 1,
      },
      {
        user_name: 'abc',
        password: '111',
        email: '111@gmail.com',
        first_name: 'John',
        last_name: 'Smith',
        role_id: 2,
      },
      {
        user_name: 'def',
        password: '222',
        email: '222@gmail.com',
        first_name: 'Ana',
        last_name: 'Wilson',
        role_id: 2,
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
        text: 'The “Semi Frozen Yellow” adidas Yeezy Boost 350 v2 offers a look that’s among the most unique in the extensive slate of adidas Yeezy releases. Featuring a bright and bold yellow base that’s artfully interspersed with wavy grey lines and a pop of red branding, it gives off a look that’s unmistakably Kanye West: loud and impossible to ignore. It’s also the first Yeezy 350 to feature a gun sole, an old-school detail that provides a stark and interesting contrast with the loud upper. Originally releasing in November of 2017, the “Semi Frozen Yellow” adidas Yeezys first hit the market in extremely limited quantities, but for their second go-around, they’ll be available at significantly more retailers than the original drop.',
        sneaker_id: 2,
        site_score: 1,
        users_score: 2
      },
      {
        title: 'The Reebok Daytona DMX MU Pack Is Dropping Soon',
        text: 'Right in line with today’s popular sneaker industry trends, Reebok’s disruptive Daytona DMX silhouette is back with a vengeance, set to release in four intriguing color schemes very soon. Boasting an admirably chunky sole unit, the Daytona still manages to boast a sleek aesthetic, giving it the ability to entice consumers from multiple different camps. Fans of the 1990s original will have their choice between a dazzling black, teal and pink creation; a sporty blue slate, and light grey; a clean skull grey, and shark white; and finally a feminine crushed cobalt and pink. Enjoy a look at all four varieties below as well as a list of retailers that will help you add your favorite color to your collection before the year is out.',
        sneaker_id: 5,
        site_score: 3,
        users_score: 4
      },
      {
        title: 'The Nike Air Fear Of God Shoot Around Releases This Weekend',
        text: 'This weekend, Jerry Lorenzo‘s first official foray with the Swoosh Brand will begin with the introduction of his Air Fear Of God collection. Highlighted by the debut of his Air Fear Of God 1 silhouette in attractive black and white color schemes, it appears that Lorenzo and Nike will also be dropping the Air Fear Of God Shoot Around sneaker. Serving as a “takedown” model of sorts, this lifestyle version of the Air Fear Of God line comes devoid of any midfoot cages and boasts a more seamless upper composed of a one-piece construction and a clasp-style lacing system. With double the Zoom Air cushioning in its heels, the Shoot Around is a street-ready statement piece that has the comfort to be worn in nearly any situation. Equipping the same design language as the other two FOG x Nike collaborative creations that heavily draw from the crossover space shared between basketball and the streets, the Shoot Around is more specifically designed to be worn before the game begins, so do not expect to see PJ Tucker hooping in these any time soon. While this model is not as souped up – if you will – as the Fear Of God 1s, its premium materials, and luxe aesthetic have still lent to a rather lofty $300 USD price tag. Grab a first look at the new Nike Air Fear Of God Shoot Around below and stay tuned for more information regarding its December 15th drop as we have it. While you wait, be sure to check out our Fear Of God buying guide in the meantime.',
        sneaker_id: 4,
        site_score: 5,
        users_score: 3
      },
      {
        title: 'Kith And New Balance Debut 2018 Footwear Collection',
        text: 'From sneakers to ice cream, from shirts to cereal, Kith can seemingly do it all. The New York-based brand/retailer has a long collaborative history with New Balance spanning an even dozen collaborative releases, and now they’ve readied a fresh six-shoe collection for 2018. Each of the half-dozen shoes draws its inspiration from two of founder Ronnie Fieg‘s favorite New Balances of all time: the United Arrows & Sons 997.5 and nonnative 997.5, and were created in collaboration with both parties to ensure maximum authenticity. While one silhouette in the collection is a classic 997, the other two offer a new look: the 997S is a modernized version of the classic New Balance 997, while the 997S Fusion takes a OG upper and melds it with a brand-new sole for a fusion-style look. One colorway of each silhouette nods to United Arrows & Sons, while the other acknowledges nonnative. The former calls upon dark blacks and greys with bright pink/purple accents, while the latter opts for a more earthy look with brown/black tones and bright cobalt blue accents. Fieg’s well-known attention to detail is present as well, with each midfoot “N” logo featuring a triple-stacked design — a clever nod to the three parties involved in each collaboration. The collection is awash in premium materials as well, with United Arrows using soft pigskin suede and rich buttery leather, while nonnative calls upon exotic textiles the likes of pony hair and ostrich-embossed leather. The collection is set to release November 21st at Kith stores and their webstore, so get a look at all six kicks below, and let us know which pair from the collection is your favorite in the comments.',
        sneaker_id: 3,
        site_score: 5,
        users_score: 3
      }
    ]);

    const comment = await Comment.bulkCreate([
      {
        title: 'COMFORT PERSONIFIED',
        text: 'These shoes are almost as comfortable as my Skechers with memory foam, almost. Like most Nike shoes they fit small so go a half size up. I normally wear a 10 and bought a 10.5 and they fit perfect.',
        user_id: '1',
        article_id: 1,
        users_score: 3
      },
      {
        title: 'GREAT SHOE, VERY COMFORTABLE',
        text: 'I wear these shoes a couple times a week. Very comfortable and go with just about anything you could wear!',
        user_id: '2',
        article_id: 1,
        users_score: 3
      },
      {
        title: 'Ugly',
        text: 'These are ugly.',
        user_id: '3',
        article_id: 1,
        users_score: 3
      },
      {
        title: 'GROSS',
        text: 'WHAT ARE THOSE!',
        user_id: '4',
        article_id: 2,
        users_score: 3
      },
      {
        title: 'GENIUS',
        text: 'Can\'t wait to get these!',
        user_id: '5',
        article_id: 2,
        users_score: 3
      },
      {
        title: 'I WANT THEM ALL',
        text: 'I NEED THESE',
        user_id: '1',
        article_id: 2,
        users_score: 3
      },
      {
        title: 'BEST PURCHASE EVER!!!',
        text: 'Most comfortable show we have owned',
        user_id: '2',
        article_id: 3,
        users_score: 5
      },
      {
        title: 'BEAUTIFUL SHOE!',
        text: 'Great style and fit. the shoe is generally very comfortable, aside from the fact that it hurts the top of my feet when wearing for too long.',
        user_id: '3',
        article_id: 3,
        users_score: 4
      },
      {
        title: 'GOOD PRODUCT',
        text: 'Sneakers fit true to size. Very comfortable sneaker.',
        user_id: '4',
        article_id: 3,
        users_score: 4
      },
      {
        title: 'THESE ARE FRESHHHHHHH',
        text: 'I NEED THESE',
        user_id: '5',
        article_id: 4,
        users_score: 5
      },
      {
        title: 'DROP',
        text: 'These are lame.',
        user_id: '1',
        article_id: 4,
        users_score: 1
      },
      {
        title: 'Nike never disappoints!',
        text: 'Really cool!',
        user_id: '2',
        article_id: 4,
        users_score: 5
      },
      {
        title: 'Awesome',
        text: 'This shoe is clearly one of the most iconic, and I just love it, would totally recommend',
        user_id: '3',
        article_id: 5,
        users_score: 4
      },
      {
        title: 'NEW BALANCE SHINES!',
        text: 'New Balance has stepped up their game with this shoe. It\'s not just visually stunning it\'s also a very solid and well made shoe.',
        user_id: '4',
        article_id: 5,
        users_score: 3
      },
      {
        title: 'Ronnie Fieg is a genius',
        text: 'I NEED THESE',
        user_id: '5',
        article_id: 5,
        users_score: 3
      },
    ]);

    const allUsers = await User.findAll();
    console.table(allUsers);
  }
  catch(evt) {
    console.error(evt);
  }
  finally {
    process.exit();
  }
};

seed();
