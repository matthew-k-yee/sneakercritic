** app description **
the app is a review aggregator for sneakers using users and reviewers scores.
The score represent how easy it is to match the sneakers look with multiple popular styles

** URL section **
- Github repo link — http
- Deployed app link — http

** model after sites like **
- https://opencritic.com
- https://www.finishline.com
- https://www.metacritic.com

** list of dependencies / technologies front-end**
- html5
- css3
- react.js
- axios
- node.js

** list of dependencies / technologies back-end**
- sequelize.js
- nodemon
- pg/pg-hstore
- morgan
- body-parser
- cors
- express.js
- passport/passport-jwt
- git/github
- PostgreSQL database

** npm scripts back-end **
- dev — nodemon server.js
- start — node server.js
- seed — node seed.js
- resetDb — node resetDb.js
- testConDb — node testConDb.js
- setup — node resetDb.js && node testConDb.js && node seed.js
- debug — node —inspect-brk server.js

** Routes **
- http://localhost:3001  — Welcome Page
- http://localhost:3001/brands — Show brands index / add brand
- http://localhost:3001/brands/:brand_id  — Show all brand shoes
- http://localhost:3001/brands/:brand_id/:sneakers_id — show article of the shoe product

- http://localhost:3001/sneakers — show all shoes/ post sneakers/
- http://localhost:3001/sneakers/:sneaker_id  — show show/update/delete sneaker

- http://localhost:3001/articles  — show all articles / post articles
- http://localhost:3001/articles/:articles_id —  delete/update articles
- http://localhost:3001/articles/:articles_id /comments  — show/post comments
- http://localhost:3001/articles/:articles_id /comments/:comment_id  — show/update/delete comment
- http://localhost:3001/articles/brands — show all articles for a brand
- http://localhost:3001/articles/brands/:brand_id  — show all articles for a brand

- http://localhost:3001/login  — login register
- http://localhost:3001/register — register users
- http://localhost:3001/users/:user_id — user profile list articles you commented on, scores you gave the shoe in the article
